const fs=require('fs'),path=require('path');
const SRC=(process.env.AC_ROOT||'G:/SteamLibrary/steamapps/common/assettocorsa')+'/content/tracks/thunderhead_raceway';
const DST=(process.env.AC_ROOT||'G:/SteamLibrary/steamapps/common/assettocorsa')+'/content/tracks/thunderhead_raceway_night';
if(fs.existsSync(DST)){console.error('REFUSING: '+DST+' exists');process.exit(1);}
const LINK=[], COPY=[];
const link=(rel)=>{const s=path.join(SRC,rel),d=path.join(DST,rel);fs.mkdirSync(path.dirname(d),{recursive:true});fs.linkSync(s,d);LINK.push(rel);};
const copy=(rel,to)=>{const s=path.join(SRC,rel),d=path.join(DST,to||rel);fs.mkdirSync(path.dirname(d),{recursive:true});fs.copyFileSync(s,d);COPY.push(to||rel);};
const walk=(rel)=>fs.readdirSync(path.join(SRC,rel),{withFileTypes:true}).flatMap(e=>e.isDirectory()?walk(path.join(rel,e.name)):[path.join(rel,e.name)]);
// big, never-edited assets -> hard links (the No Dogbowls layout does not use thtrack2.kn5)
for(const k of ['thtrack.kn5','stadium.kn5','decor.kn5','support.kn5','support2.kn5'])link(k);
for(const f of walk('skins'))link(f);
for(const f of walk('texture'))link(f);
for(const f of walk('extension'))if(!f.endsWith('ext_config.ini'))link(f);
// small or edited files -> real copies
copy('models_no_dogbowls.ini');
for(const f of walk('no_dogbowls'))copy(f);
for(const f of walk('data'))copy(f);
for(const f of walk(path.join('ui','no_dogbowls')))copy(f);
for(const f of fs.readdirSync(path.join(SRC,'ui'),{withFileTypes:true}).filter(e=>e.isFile()))copy(path.join('ui',f.name));
fs.mkdirSync(path.join(DST,'ai'),{recursive:true});
// the night lights, as this track's own config
fs.copyFileSync(require('path').join(__dirname,'..','night_track','extension','ext_config.ini'),path.join(DST,'extension','ext_config.ini'));COPY.push('extension/ext_config.ini (night build)');
// UI name
const u=path.join(DST,'ui','no_dogbowls','ui_track.json');const j=JSON.parse(fs.readFileSync(u,'utf8'));
j.name='Thunderhead Raceway Night (No Dogbowls)';
j.description='The No Dogbowls layout with night lighting trimmed for performance: the stadium floodlights and ambient fill are off; sponsor and sign lights plus the track-edge sidelights stay on. Night lighting preset by solariz3d; track by Dogeish.';
fs.writeFileSync(u,JSON.stringify(j,null,'\t')+'\n');
console.log('hard-linked',LINK.length,'files | real copies',COPY.length,'files');
