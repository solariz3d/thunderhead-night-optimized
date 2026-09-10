const fs=require('fs');
const src=fs.readFileSync(process.argv[2],'utf8').split(/\r?\n/);
const secs=[];let cur=null;let pend=[];
src.forEach((raw,i)=>{const l=raw.trim();
  const m=l.match(/^\[([A-Z_]+?)(?:_(\.\.\.|\d+))?\]\s*(;.*)?$/);
  if(m){cur={type:m[1],tag:m[2]||'',line:i+1,note:(pend.join(' ')+' '+(m[3]||'')).replace(/;+/g,' ').replace(/\s+/g,' ').trim(),kv:{}};secs.push(cur);pend=[];return;}
  if(!l){return;} if(l.startsWith(';')){pend.push(l);return;}
  pend=[]; if(!cur)return; const k=l.match(/^([A-Za-z_\.]+)\s*=\s*(.*?)\s*(;.*)?$/); if(k){cur.kv[k[1].toUpperCase()]=k[2];}
});
const count={};const out=[];
for(const s of secs){count[s.type]=(count[s.type]||0);const idx=s.tag==='...'?count[s.type]:+s.tag;count[s.type]=s.tag==='...'?count[s.type]+1:Math.max(count[s.type],idx+1);s.idx=idx;}
fs.writeFileSync(process.argv[3],JSON.stringify(secs,null,1));
const L=secs.filter(s=>s.type==='LIGHT'||s.type==='LIGHT_SERIES');
console.log('light sections:',L.length,' (LIGHT',secs.filter(s=>s.type==='LIGHT').length,', LIGHT_SERIES',secs.filter(s=>s.type==='LIGHT_SERIES').length,')');
console.log('material adjustments:',secs.filter(s=>s.type==='MATERIAL_ADJUSTMENT').length);
const tally=(k)=>{const t={};L.forEach(s=>{const v=(s.kv[k]??'(unset)');t[v]=(t[v]||0)+1});return t};
for(const k of ['CONDITION','SHADOWS','VOLUMETRIC_LIGHT','RANGE','SPOT','COLOR','FADE_AT'])console.log(k.padEnd(17),JSON.stringify(tally(k)));
const series=L.filter(s=>s.type==='LIGHT_SERIES');series.forEach(s=>console.log('SERIES line',s.line,'MATERIALS=',s.kv.MATERIALS,'MESHES=',s.kv.MESHES,'| note:',s.note.slice(0,80)));
const notes={};L.forEach(s=>{if(s.note)notes[s.note]=(notes[s.note]||0)+1});console.log('--- comment labels above lights ---');Object.entries(notes).forEach(([n,c])=>console.log(c+'x',n.slice(0,110)));
