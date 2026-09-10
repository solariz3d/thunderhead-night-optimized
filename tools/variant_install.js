// Adds Night Optimized as the THIRD layout of the author's own track, and --undo takes it back out exactly.
// Default is a DRY RUN that only prints. Pass --apply to change anything.
const fs=require('fs'),path=require('path'),crypto=require('crypto');
const T=(process.env.AC_ROOT||'G:/SteamLibrary/steamapps/common/assettocorsa')+'/content/tracks/thunderhead_raceway';
const W=__dirname, APPLY=process.argv.includes('--apply'), UNDO=process.argv.includes('--undo');
const sha=f=>crypto.createHash('sha256').update(fs.readFileSync(f)).digest('hex').slice(0,16);
// ORIG: a copy of the author's shipped ext_config.ini, placed here by you (it is not redistributed).
const ORIG=path.join(W,'ext_config.ORIGINAL.ini');
const NIGHTCFG=path.join(W,'..','track','extension','ext_config.ini'), LUA=path.join(W,'..','track','extension','stock_lights.lua');
if(!fs.existsSync(ORIG)){console.error('Put a copy of the shipped content/tracks/thunderhead_raceway/extension/ext_config.ini at '+ORIG+' first.');process.exit(2)}
if(sha(ORIG)!=='469a1733c2868b84'){console.error('REFUSING: backup is not the shipped original');process.exit(1)}
const ADDED=['night_optimized','models_night_optimized.ini',path.join('ui','night_optimized'),path.join('extension','stock_lights.lua')];
const act=(msg,fn)=>{console.log((APPLY?'  DO   ':'  plan ')+msg);if(APPLY)fn()};
const walk=(r,rel)=>fs.readdirSync(path.join(r,rel),{withFileTypes:true}).flatMap(e=>e.isDirectory()?walk(r,path.join(rel,e.name)):[path.join(rel,e.name)]);
const cp=(a,b)=>{fs.mkdirSync(path.dirname(b),{recursive:true});fs.copyFileSync(a,b)};
const cfg=path.join(T,'extension','ext_config.ini');
if(UNDO){
  act('restore extension/ext_config.ini from the shipped original (469a1733…)',()=>fs.copyFileSync(ORIG,cfg));
  for(const a of ADDED)if(fs.existsSync(path.join(T,a)))act('remove '+a,()=>fs.rmSync(path.join(T,a),{recursive:true,force:true}));
  if(APPLY)console.log('config now',sha(cfg));
  process.exit(0);
}
if(sha(cfg)!=='469a1733c2868b84'){console.error('REFUSING: the track config is not the shipped original ('+sha(cfg)+'). Run --undo first.');process.exit(1)}
for(const a of ADDED)if(fs.existsSync(path.join(T,a))){console.error('REFUSING: '+a+' already exists');process.exit(1)}
act('night_optimized/  <- copy of no_dogbowls/ (data + map)',()=>{for(const f of walk(T,'no_dogbowls'))cp(path.join(T,f),path.join(T,f.replace(/^no_dogbowls/,'night_optimized')))});
act('models_night_optimized.ini  <- copy of models_no_dogbowls.ini',()=>cp(path.join(T,'models_no_dogbowls.ini'),path.join(T,'models_night_optimized.ini')));
act('ui/night_optimized/  <- copy of ui/no_dogbowls/, name "Thunderhead Raceway (Night Optimized)"',()=>{
  for(const f of walk(T,path.join('ui','no_dogbowls')))cp(path.join(T,f),path.join(T,f.replace(path.join('ui','no_dogbowls'),path.join('ui','night_optimized'))));
  const u=path.join(T,'ui','night_optimized','ui_track.json');const s=fs.readFileSync(u,'utf8');const re=/("name"\s*:\s*")([^"]*)(")/;if(!re.test(s))throw new Error('no name field');
  fs.writeFileSync(u,s.replace(re,(m,a,b,c)=>a+'Thunderhead Raceway (Night Optimized)'+c))});
act('extension/stock_lights.lua  <- the 61 stadium/ambient lights, on every layout except night_optimized',()=>cp(LUA,path.join(T,'extension','stock_lights.lua')));
act('extension/ext_config.ini  <- night build + [SCRIPT_...] SCRIPT = stock_lights.lua',()=>fs.copyFileSync(NIGHTCFG,cfg));
console.log(APPLY?'DONE. config now '+sha(cfg):'DRY RUN — nothing changed. Re-run with --apply.');
