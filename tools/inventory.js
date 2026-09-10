const fs=require('fs');const secs=JSON.parse(fs.readFileSync('sections.json','utf8'));
let group='(unlabelled, top of file)';const lights=[],mats=[];let n=0;
for(const s of secs){ if(s.note && (s.type==='LIGHT'||s.type==='LIGHT_SERIES'||s.type==='MATERIAL_ADJUSTMENT')) group=s.note.replace(/\(not working currently\)/,'(author: not working)');
  if(s.type==='LIGHT'||s.type==='LIGHT_SERIES'){n++;const c=(s.kv.COLOR||'').split(',').map(x=>x.trim());
    lights.push({id:'L'+String(n).padStart(3,'0'),type:s.type,line:s.line,group,pos:s.kv.POSITION||'',src:s.kv.MATERIALS?('materials: '+s.kv.MATERIALS):(s.kv.MESHES?('meshes: '+s.kv.MESHES):''),
      range:parseFloat(s.kv.RANGE)||'',spot:parseFloat(s.kv.SPOT)||0,intensity:c.length===4?parseFloat(c[3]):'',rgb:c.slice(0,3).map(x=>(+x).toFixed(2)).join(','),
      shadows:s.kv.SHADOWS??'',vol:s.kv.VOLUMETRIC_LIGHT??'',fade:parseFloat(s.kv.FADE_AT)||'',cond:s.kv.CONDITION||''});}
  if(s.type==='MATERIAL_ADJUSTMENT'){mats.push({line:s.line,group:s.note||'',materials:s.kv.MATERIALS||s.kv.MESHES||'',key:s.kv.KEY_0||'',val:s.kv.VALUE_0||'',cond:s.kv.CONDITION||''});}
}
// group summary
const g={};for(const l of lights){const k=l.group;g[k]=g[k]||{n:0,lines:[],maxRange:0,shadows:0,big:0};g[k].n++;g[k].lines.push(l.line);g[k].maxRange=Math.max(g[k].maxRange,+l.range||0);if(l.shadows==='1')g[k].shadows++;if((+l.range||0)>=200)g[k].big++;}
let md=`# Thunderhead Raceway — night light inventory\n\nSource: \`content/tracks/thunderhead_raceway/extension/ext_config.ini\` (64,963 B, sha256 469a1733…). Original backed up beside this file as \`ext_config.ORIGINAL.ini\`.\nBoth layouts (no_dogbowls / normal) load the same stadium, decor and support models, so this list applies to both.\n\n**${lights.length} light sources** (${lights.filter(l=>l.type==='LIGHT').length} single lights + ${lights.filter(l=>l.type==='LIGHT_SERIES').length} series — a series spawns one light per mesh using that material, so its real count is set by the model, not the config) · **${mats.length} glow adjustments** (emissive materials: they make bulbs/panels look lit, they do not light the track).\n\n## By group\n\n| group (author's label) | lights | range ≥200 m | casts shadows | max range m | config lines |\n|---|---:|---:|---:|---:|---|\n`;
for(const [k,v] of Object.entries(g))md+=`| ${k} | ${v.n} | ${v.big} | ${v.shadows} | ${v.maxRange} | ${v.lines[0]}–${v.lines[v.lines.length-1]} |\n`;
md+=`\n## Every light\n\n| id | line | group | type | position (x,y,z) / source | range m | spot ° | intensity | colour rgb | shadows | fade at m |\n|---|---:|---|---|---|---:|---:|---:|---|:-:|---:|\n`;
for(const l of lights)md+=`| ${l.id} | ${l.line} | ${l.group} | ${l.type==='LIGHT_SERIES'?'series':'single'} | ${l.src||l.pos.split(',').map(x=>(+x).toFixed(1)).join(', ')} | ${l.range} | ${l.spot} | ${l.intensity} | ${l.rgb} | ${l.shadows} | ${l.fade} |\n`;
md+=`\n## Glow adjustments (emissive — cosmetic, cheap)\n\n| line | label | materials / meshes | key | value | condition |\n|---|---|---|---|---|---|\n`;
for(const m of mats)md+=`| ${m.line} | ${m.group} | ${m.materials} | ${m.key} | ${m.val} | ${m.cond} |\n`;
fs.writeFileSync('INVENTORY.md',md);fs.writeFileSync('inventory.json',JSON.stringify({lights,mats},null,1));
console.log('GROUPS:');for(const [k,v] of Object.entries(g))console.log(String(v.n).padStart(3),' big:',String(v.big).padStart(2),' shadows:',String(v.shadows).padStart(2),' maxRange:',String(v.maxRange).padStart(3),' ',k);
