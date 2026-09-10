// Switches off Thunderhead night lights by author group, without touching any track model.
// Always starts from ext_config.ORIGINAL.ini, so it is repeatable and fully reversible.
const fs=require('fs'),path=require('path'),crypto=require('crypto');
const TRACK=(process.env.AC_ROOT||'G:/SteamLibrary/steamapps/common/assettocorsa')+'/content/tracks/thunderhead_raceway/extension/ext_config.ini';
const LIST=path.resolve(__dirname,process.argv.slice(2).find(x=>!x.startsWith('--'))||'off-groups.txt');
const ORIG=path.join(__dirname,'ext_config.ORIGINAL.ini') /* put a copy of the author's original here; its sha256 is checked */;
const sha=b=>crypto.createHash('sha256').update(b).digest('hex').slice(0,16);
const orig=fs.readFileSync(ORIG);
if(sha(orig)!=='469a1733c2868b84'){console.error('REFUSING: the backup is not the original (sha '+sha(orig)+')');process.exit(1);}
if(process.argv.includes('--restore')){fs.writeFileSync(TRACK,orig);console.log('RESTORED original, sha',sha(fs.readFileSync(TRACK)));process.exit(0);}
const off=new Set(fs.readFileSync(LIST,'utf8').split(/\r?\n/).map(s=>s.trim()).filter(s=>s&&!s.startsWith('#')));
const lines=orig.toString('utf8').split(/\r?\n/);const eol=orig.toString('utf8').includes('\r\n')?'\r\n':'\n';
let group='(unlabelled, top of file)',pend=[],out=[],inLight=false,sectionOff=false,sawActive=false,n=0,changed={},known=new Set([group]);
const close=()=>{if(inLight&&sectionOff&&!sawActive){out.splice(hdrAt+1,0,'ACTIVE=0 ; switched off by thunderhead_lights/apply.js');}};
let hdrAt=-1;
for(const raw of lines){const l=raw.trim();const m=l.match(/^\[([A-Z_]+?)(?:_(\.\.\.|\d+))?\]\s*(;.*)?$/);
  if(m){close();const note=(pend.join(' ')+' '+(m[3]||'')).replace(/;+/g,' ').replace(/\s+/g,' ').trim();
    const isL=m[1]==='LIGHT'||m[1]==='LIGHT_SERIES';
    if(note&&(isL||m[1]==='MATERIAL_ADJUSTMENT'))group=note.replace(/\(not working currently\)/,'(author: not working)');
    known.add(group);inLight=isL;sawActive=false;sectionOff=isL&&off.has(group);if(isL)n++;
    if(sectionOff)changed[group]=(changed[group]||0)+1;
    out.push(raw);hdrAt=out.length-1;pend=[];continue;}
  if(l.startsWith(';')){pend.push(l);out.push(raw);continue;} if(l)pend=[];
  if(inLight&&sectionOff&&/^ACTIVE\s*=/i.test(l)){out.push('ACTIVE=0 ; switched off by thunderhead_lights/apply.js');sawActive=true;continue;}
  out.push(raw);}
close();
const bad=[...off].filter(g=>!known.has(g));if(bad.length){console.error('REFUSING: unknown group(s) in off-groups.txt:',bad);process.exit(1);}
fs.writeFileSync(TRACK,out.join(eol));
const tot=Object.values(changed).reduce((a,b)=>a+b,0);
console.log('preset:',path.relative(__dirname,LIST));
console.log('light sections seen:',n,'| switched off:',tot,'| left on:',n-tot);
for(const [g,c] of Object.entries(changed))console.log('  off',String(c).padStart(3),' ',g);
console.log('track file sha',sha(fs.readFileSync(TRACK)),'(original 469a1733c2868b84)');
