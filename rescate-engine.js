/* DMF: original laboratory mission. No external assets or libraries. */
(()=>{
'use strict';
const MAP=[
'###############',
'#S....#.......#',
'#.###.#.###.#.#',
'#...#...#...#.#',
'###.###.#.###.#',
'#...#..P#...#.#',
'#.###.#.###.#.#',
'#...#.#.....#.#',
'#.#.#.#####.#.#',
'#.#...#...#...#',
'#.#####.#.###.#',
'#...K...#.....#',
'###############'];
const CONFIG={Fácil:{seconds:240,oxygen:100,leak:0.20},Medio:{seconds:185,oxygen:100,leak:0.28},Difícil:{seconds:150,oxygen:100,leak:0.35}};
const settings=n=>CONFIG[n]||CONFIG.Medio;
function game(level){
 const cfg=settings(level);let s={x:1.5,y:1.5,angle:0,time:0,oxygen:cfg.oxygen,key:false,person:false,result:'playing',note:'Busca la llave amarilla.'};
 const tile=(x,y)=>(MAP[Math.floor(y)]||'')[Math.floor(x)]||'#';
 const wall=(x,y)=>tile(x,y)==='#';
 function move(distance){if(s.result!=='playing')return;let dx=Math.cos(s.angle)*distance,dy=Math.sin(s.angle)*distance,r=.18;let nx=s.x+dx,ny=s.y+dy;if(!wall(nx+r, s.y+r)&&!wall(nx+r,s.y-r)&&!wall(nx-r,s.y+r)&&!wall(nx-r,s.y-r))s.x=nx;if(!wall(s.x+r,ny+r)&&!wall(s.x+r,ny-r)&&!wall(s.x-r,ny+r)&&!wall(s.x-r,ny-r))s.y=ny}
 function step(dt){if(s.result!=='playing')return;s.time+=dt;s.oxygen=Math.max(0,s.oxygen-cfg.leak*dt*(s.person?1.25:1));if(s.time>=cfg.seconds||s.oxygen<=0){s.result='lost';s.note='Se agotó el tiempo o el oxígeno.'}}
 function interact(){if(s.result!=='playing')return;const t=tile(s.x,s.y);if(t==='K'&&!s.key){s.key=true;s.note='Llave recogida. Encuentra a la persona herida.'}else if(t==='P'&&!s.person){if(!s.key)s.note='Necesitas la llave amarilla para abrir la cápsula.';else{s.person=true;s.note='Persona rescatada. ¡Vuelve a la salida verde!'}}else if(t==='S'){if(s.person){s.result='won';s.note='¡Rescate completado!'}else s.note='Aún falta rescatar a la persona.'}else s.note='Acércate al marcador y pulsa Actuar.'}
 return {s,cfg,tile,wall,move,step,interact,turn(n){s.angle+=n}};
}
function start(stage,level,finish){
 const g=game(level.name),s=g.s;let stopped=false,raf=0,last=0,held=new Set();
 const add=(tag,text,parent)=>{let n=document.createElement(tag);if(text!==null)n.textContent=text;parent.append(n);return n};
 add('p','Vista en primera persona. Explora el laberinto: encuentra la llave amarilla, abre la cápsula azul para rescatar a la persona y regresa a la salida verde. Actúa al pisar cada marcador. Vigila el oxígeno y el tiempo.',stage);
 add('p','Flechas o WASD: avanzar, retroceder y girar. Espacio o E: actuar. En móvil, mantén pulsados los controles.',stage);
 const c=add('canvas',null,stage);c.width=600;c.height=330;c.style.cssText='display:block;width:100%;max-width:600px;height:auto;margin:auto;background:#081a28;border-radius:12px;touch-action:manipulation';c.setAttribute('aria-label','Vista en primera persona de la estación espacial');const ctx=c.getContext('2d');
 const status=add('p','',stage);status.setAttribute('role','status');const controls=add('div',null,stage);controls.style.cssText='display:flex;flex-wrap:wrap;justify-content:center;gap:6px;touch-action:manipulation';
 function button(text,fn){const b=add('button',text,controls);b.type='button';b.style.cssText='min-width:64px;min-height:48px';b.onclick=fn;return b}
 for(const [key,text] of [['left','↶ Girar'],['forward','▲ Avanzar'],['back','▼ Retroceder'],['right','↷ Girar']]){const b=button(text,()=>{});b.addEventListener('pointerdown',e=>{e.preventDefault();b.setPointerCapture(e.pointerId);held.add(key)});for(const ev of ['pointerup','pointercancel','lostpointercapture'])b.addEventListener(ev,()=>held.delete(key));}
 button('🔑 Actuar',()=>{g.interact();draw();endIf()});
 const keyMap={ArrowUp:'forward',w:'forward',W:'forward',ArrowDown:'back',s:'back',S:'back',ArrowLeft:'left',a:'left',A:'left',ArrowRight:'right',d:'right',D:'right'};
 function keyDown(e){if(keyMap[e.key]){e.preventDefault();held.add(keyMap[e.key])}else if(e.key==='e'||e.key==='E'||e.code==='Space'){e.preventDefault();if(!e.repeat){g.interact();draw();endIf()}}}function keyUp(e){if(keyMap[e.key])held.delete(keyMap[e.key])}function blur(){held.clear()}
 window.addEventListener('keydown',keyDown);window.addEventListener('keyup',keyUp);window.addEventListener('blur',blur);
 function endIf(){if(s.result!=='playing'&&!stopped){const result=s.result;stop();finish(result)}}
 function stop(){stopped=true;cancelAnimationFrame(raf);held.clear();window.removeEventListener('keydown',keyDown);window.removeEventListener('keyup',keyUp);window.removeEventListener('blur',blur)}
 function draw(){
  const w=c.width,h=c.height;ctx.fillStyle='#162b49';ctx.fillRect(0,0,w,h/2);ctx.fillStyle='#283c3c';ctx.fillRect(0,h/2,w,h/2);
  const fov=Math.PI/3, rays=200, depths=[];for(let i=0;i<rays;i++){let a=s.angle+(i/rays-.5)*fov,dist=.02;while(dist<20&&!g.wall(s.x+Math.cos(a)*dist,s.y+Math.sin(a)*dist))dist+=.035;let d=dist*Math.cos(a-s.angle),height=Math.min(h*2,270/Math.max(.1,d));depths.push(d);let light=Math.max(30,Math.floor(180/(1+d*.22)));ctx.fillStyle=`rgb(${Math.floor(light*.48)},${Math.floor(light*.72)},${light})`;ctx.fillRect(i*3,h/2-height/2,4,height);ctx.fillStyle='#ffffff10';ctx.fillRect(i*3,h/2-height/2,3,3)}
  // Project physical markers as sprites, occluded by the ray-cast wall depth.
  for(const [x,y,label,color,visible] of [[4.5,11.5,'LLAVE','#ffdb48',!s.key],[7.5,5.5,'CÁPSULA','#5be1ff',!s.person],[1.5,1.5,'SALIDA','#4ff395',true]]){if(!visible)continue;let dx=x-s.x,dy=y-s.y,d=Math.hypot(dx,dy),a=Math.atan2(dy,dx)-s.angle;while(a>Math.PI)a-=2*Math.PI;while(a< -Math.PI)a+=2*Math.PI;let sx=Math.floor((a/fov+.5)*rays);if(sx<0||sx>=rays||d>depths[sx]+.4)continue;let size=Math.min(100,130/Math.max(.6,d));ctx.fillStyle=color;ctx.fillRect(sx*3-size/2,h/2-size/2,size,size);ctx.fillStyle='#081b28';ctx.font=`bold ${Math.max(10,Math.min(17,size/4))}px system-ui`;ctx.textAlign='center';ctx.fillText(label,sx*3,h/2+5)}
  status.textContent=`⏱ ${Math.max(0,Math.ceil(g.cfg.seconds-s.time))} s · Oxígeno ${Math.ceil(s.oxygen)}% · Llave ${s.key?'✓':'—'} · Rescate ${s.person?'✓':'—'} · ${s.note}`;
 }
 function tick(ms){if(stopped)return;let elapsed=last?Math.max(0,(ms-last)/1000):0,dt=Math.min(.1,elapsed);last=ms;if(held.has('left'))g.turn(-1.8*dt);if(held.has('right'))g.turn(1.8*dt);if(held.has('forward'))g.move(1.8*dt);if(held.has('back'))g.move(-1.25*dt);g.step(elapsed);endIf();if(stopped)return;draw();raf=requestAnimationFrame(tick)}draw();raf=requestAnimationFrame(tick);return stop;
}
window.DMFLabRescue={game,start,MAP};
})();
