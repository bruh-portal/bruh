(()=>{
'use strict';
const challenges=[
['Serie numérica','¿Qué número sigue: 2, 4, 8, 16…?','32. Cada número es el doble del anterior.'],
['El tercero','Si adelantas a la persona que va segunda en una carrera, ¿en qué posición te colocas?','En segunda posición: ocupas su lugar.'],
['Cajas y manzanas','Tienes 3 cajas con 4 manzanas cada una. ¿Cuántas manzanas hay?','12 manzanas: 3 × 4 = 12.'],
['Días de la semana','Si hoy es lunes, ¿qué día será dentro de 10 días?','Jueves. Siete días después es lunes y tres más es jueves.'],
['La mitad de la mitad','¿Cuál es la mitad de la mitad de 80?','20: la mitad de 80 es 40 y la mitad de 40 es 20.'],
['Patrón de letras','¿Qué letra sigue: A, C, E, G…?','I. Avanzamos dos letras cada vez.'],
['Las velas','Hay 6 velas encendidas y apagas 2. ¿Cuántas siguen encendidas?','4 velas siguen encendidas.'],
['Reloj mental','¿Cuántos minutos hay en dos horas y media?','150 minutos: 120 + 30.'],
['Triángulos','¿Cuántos lados suman 4 triángulos separados?','12 lados: cada triángulo tiene 3.'],
['Pelotas','Tienes 15 pelotas y repartes 5 por igual entre 5 amigos. ¿Cuántas recibe cada uno?','1 pelota cada uno. Las otras 10 no se reparten.'],
['Escalera','Una escalera tiene 12 peldaños. Si subes de dos en dos, ¿cuántos pasos necesitas?','6 pasos de dos peldaños.'],
['Serie descendente','¿Qué número sigue: 50, 45, 40, 35…?','30. Se resta 5 en cada paso.'],
['Cuadrado','Un cuadrado tiene un perímetro de 20 cm. ¿Cuánto mide cada lado?','5 cm, porque sus cuatro lados son iguales.'],
['Familia','Una madre tiene dos hijos y cada hijo tiene una hermana. ¿Cuántos hijos tiene como mínimo?','Tres: dos hijos y una hermana compartida.'],
['Fútbol','En un torneo, cada victoria vale 3 puntos y cada empate 1. ¿Cuántos puntos son 2 victorias y 2 empates?','8 puntos: 6 + 2.'],
['Reparto','Reparte 24 pegatinas en partes iguales entre 6 personas. ¿Cuántas recibe cada una?','4 pegatinas: 24 ÷ 6.'],
['Pares','¿Cuál es la suma de los números pares del 2 al 10?','30: 2 + 4 + 6 + 8 + 10.'],
['Calendario','¿Cuántos meses del año tienen al menos 28 días?','Los 12 meses.'],
['Gran salto','¿Qué número sigue: 1, 4, 9, 16…?','25. Son cuadrados: 1², 2², 3², 4², 5².'],
['Dados','¿Cuánto suman las caras opuestas de un dado normal?','7: los pares son 1 y 6, 2 y 5, 3 y 4.'],
['Semáforo','Si un patrón repite rojo, amarillo, verde, ¿cuál es el séptimo color?','Rojo: el patrón tiene tres colores y vuelve a empezar.'],
['El doble','El doble de un número es 18. ¿Qué número es?','9, porque 9 × 2 = 18.'],
['De compras','Un lápiz cuesta 2 € y una libreta 5 €. ¿Cuánto cuestan 2 lápices y una libreta?','9 €: 2 + 2 + 5.'],
['Tiempo','Una película empieza a las 16:20 y dura 90 minutos. ¿A qué hora termina?','A las 17:50.'],
['La granja','Hay 3 gallinas y 2 ovejas. ¿Cuántas patas hay en total?','14 patas: 3 × 2 + 2 × 4.'],
['Número escondido','Piensa en un número: súmale 7 y obtienes 19. ¿Cuál era?','12, porque 19 − 7 = 12.'],
['Esquinas','Dos cuadrados separados, ¿cuántas esquinas tienen en total?','8 esquinas: 4 + 4.'],
['Carrera','Si en una carrera vas último y adelantas a la persona que va justo delante, ¿sigues siendo último?','No: esa persona queda detrás de ti.'],
['Serie alterna','¿Qué número sigue: 1, 3, 2, 4, 3, 5…?','4. Alterna +2 y −1.'],
['Monedas','¿Cuántas monedas de 20 céntimos necesitas para formar 1 euro?','5 monedas: 5 × 20 = 100 céntimos.'],
['Un minuto','¿Cuántos segundos hay en 3 minutos?','180 segundos.'],
['Doblar','Una hoja doblada por la mitad dos veces, sin desdoblarla, ¿cuántas capas tiene?','4 capas, si cada doblez divide todas las capas por la mitad.'],
['Kilómetros','Una ruta tiene 6 km. Si recorres un tercio, ¿cuánto has avanzado?','2 km.'],
['Horas','Si son las 23:00 y pasan 3 horas, ¿qué hora es?','Las 02:00 del día siguiente.'],
['Operaciones','¿Cuánto es 3 + 4 × 2?','11. Primero la multiplicación: 3 + 8.'],
['Cubos','¿Cuántas caras tienen en total 2 cubos separados?','12 caras: cada cubo tiene 6.']
];
const art=[
{title:'Flechas de Müller-Lyer',question:'¿Qué línea horizontal parece más larga?',answer:'Las dos líneas horizontales miden lo mismo. La orientación de las puntas cambia cómo percibimos su longitud.',svg:'<line x1="75" y1="65" x2="225" y2="65"/><path d="M75 65 l-24 -18 M75 65 l-24 18 M225 65 l24 -18 M225 65 l24 18"/><line x1="75" y1="145" x2="225" y2="145"/><path d="M75 145 l24 -18 M75 145 l24 18 M225 145 l-24 -18 M225 145 l-24 18"/>'},
{title:'Círculos de Ebbinghaus',question:'¿Cuál de los dos círculos azules centrales parece mayor?',answer:'Los dos círculos azules centrales tienen el mismo tamaño. Los círculos que los rodean cambian la comparación.',svg:'<g fill="#5f6a80" stroke="none"><circle cx="48" cy="57" r="27"/><circle cx="112" cy="57" r="27"/><circle cx="48" cy="143" r="27"/><circle cx="112" cy="143" r="27"/><circle cx="190" cy="65" r="9"/><circle cx="210" cy="54" r="9"/><circle cx="231" cy="54" r="9"/><circle cx="251" cy="65" r="9"/><circle cx="190" cy="135" r="9"/><circle cx="210" cy="146" r="9"/><circle cx="231" cy="146" r="9"/><circle cx="251" cy="135" r="9"/><circle cx="180" cy="100" r="9"/><circle cx="260" cy="100" r="9"/></g><g fill="#21bacc" stroke="none"><circle cx="80" cy="100" r="19"/><circle cx="220" cy="100" r="19"/></g>'},
{title:'Contraste simultáneo',question:'¿Los dos cuadrados pequeños tienen el mismo gris?',answer:'Sí. Son exactamente el mismo gris; uno parece más claro porque su fondo es oscuro.',svg:'<rect x="20" y="30" width="125" height="140" fill="#202020" stroke="none"/><rect x="155" y="30" width="125" height="140" fill="#eeeeee" stroke="none"/><rect x="60" y="80" width="45" height="40" fill="#888888" stroke="none"/><rect x="195" y="80" width="45" height="40" fill="#888888" stroke="none"/>'},
{title:'Ilusión de Ponzo',question:'¿Cuál de las dos barras horizontales parece más larga?',answer:'Las barras miden lo mismo. Las líneas convergentes pueden hacer que la barra superior parezca más grande.',svg:'<path d="M45 190 L135 10 M255 190 L165 10" stroke="#64748b"/><line x1="105" y1="55" x2="195" y2="55" stroke="#0ab8cd" stroke-width="9"/><line x1="105" y1="150" x2="195" y2="150" stroke="#0ab8cd" stroke-width="9"/>'}
];
// Answers match the 36 original challenges above, in order.
const solutions=['32','segunda','12','jueves','20','i','4','150','12','1','6','30','5','3','8','4','30','12','25','7','rojo','9','9','17:50','14','12','8','no','4','5','180','4','2','02:00','11','12'];
const simulators=[
 ['Tiro parabólico · suave','flight',35,12],['Tiro parabólico · alto','flight',60,15],['Tiro parabólico · largo','flight',45,20],
 ['Ahorro · 10 semanas','saving',10,10],['Ahorro · 20 semanas','saving',20,5],['Ahorro · 12 semanas','saving',12,8],
 ['Dados · 10 lanzamientos','dice',10,2],['Dados · 30 lanzamientos','dice',30,2],['Dados · 50 lanzamientos','dice',50,2],
 ['Mezcla de luz · azul','color',30,100],['Mezcla de luz · verde','color',120,70],['Mezcla de luz · rojo','color',220,40]
];
const bank=[...challenges.map((x,i)=>({id:'q'+i,type:'quiz',title:x[0],question:x[1],answer:x[2],solution:solutions[i]})),...art.map((x,i)=>({...x,id:'a'+i,type:'art'})),...simulators.map((x,i)=>({id:'s'+i,type:'sim',title:x[0],sim:x[1],a:x[2],b:x[3]}))];
const root=document.getElementById('discoverRoot');if(!root)return;
root.innerHTML=`<h2>🌀 Descubre</h2><p>Un reto, una ilusión o un simulador para explorar dentro de DMF.</p><p>Actualizaciones a las 08:00, 11:00, 14:00, 17:00 y 20:00 (hora de tu dispositivo). De 23:00 a 08:00 no cambia.</p><p id="discoverClock" role="status"></p><article class="discover-card" id="discoverCard"></article><p class="discover-note" id="discoverInfo"></p>`;
const $=id=>document.getElementById(id),key='dmf_discover_interactive_v2';let state={current:null,slot:null,seen:[],cycle:1}, displayed=null;
try{let s=JSON.parse(localStorage.getItem(key)||'null');if(s&&Array.isArray(s.seen)){state={current:bank.some(x=>x.id===s.current)?s.current:null,slot:typeof s.slot==='string'?s.slot:null,seen:s.seen.filter((x,i,a)=>bank.some(b=>b.id===x)&&a.indexOf(x)===i),cycle:Number.isInteger(s.cycle)&&s.cycle>0?s.cycle:1}}}catch(e){}
function save(){try{localStorage.setItem(key,JSON.stringify(state))}catch(e){}}
function timeInfo(d){const h=d.getHours(),date=[d.getFullYear(),d.getMonth()+1,d.getDate()].join('-');let hour=h<8?null:h<11?8:h<14?11:h<17?14:h<20?17:h<23?20:null;let next=new Date(d);next.setSeconds(0,0);if(h<8)next.setHours(8,0,0,0);else if(h<11)next.setHours(11,0,0,0);else if(h<14)next.setHours(14,0,0,0);else if(h<17)next.setHours(17,0,0,0);else if(h<20)next.setHours(20,0,0,0);else{next.setDate(next.getDate()+1);next.setHours(8,0,0,0)}return {slot:hour===null?null:date+'-'+hour,next}}
function choose(){let unused=bank.filter(x=>!state.seen.includes(x.id));if(!unused.length){state.seen=[];state.cycle++;unused=bank.slice();if(state.current&&unused.length>1)unused=unused.filter(x=>x.id!==state.current)}let item=unused[Math.floor(Math.random()*unused.length)];state.current=item.id;state.seen.push(item.id)}
function el(tag,text,parent){const n=document.createElement(tag);if(text!==null)n.textContent=text;parent.append(n);return n}
function button(text,parent,fn){const b=el('button',text,parent);b.type='button';b.style.margin='6px';b.addEventListener('click',fn);return b}
function range(parent,label,min,max,value){const l=el('label',label+' ',parent),r=el('input',null,l);r.type='range';r.min=min;r.max=max;r.value=value;r.setAttribute('aria-label',label);const out=el('output',' '+value,l);r.oninput=()=>{out.textContent=' '+r.value;draw()};parent.append(document.createElement('br'));return r}
let draw=()=>{};
function render(item){const card=$('discoverCard');card.replaceChildren();draw=()=>{};if(!item){el('p','Todavía no hay actividad en este navegador. La primera aparecerá a las 08:00.',card);return}el('span',item.type==='quiz'?'🧠 Reto interactivo':item.type==='art'?'👁️ Ilusión óptica':'🧪 Simulador',card);el('h3',item.title,card);
if(item.type==='quiz'){el('p',item.question,card);const f=el('form',null,card),label=el('label','Tu respuesta: ',f),input=el('input',null,label);input.type='text';input.autocomplete='off';input.required=true;input.placeholder='Escribe aquí';const b=el('button','Comprobar',f);b.type='submit';const feedback=el('p','',card);feedback.setAttribute('role','status');f.onsubmit=e=>{e.preventDefault();const norm=s=>s.trim().toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/\s+/g,' ');let got=norm(input.value),want=norm(item.solution);if(/^0\d:\d\d$/.test(want))want=want.slice(1);if(/^0\d:\d\d$/.test(got))got=got.slice(1);feedback.textContent=got===want?'✅ ¡Correcto! '+item.answer:'🤔 No coincide. Inténtalo otra vez o mira la explicación.'};const d=el('details',null,card);el('summary','Ver respuesta y explicación',d);el('p',item.answer,d)}
if(item.type==='art'){el('p',item.question,card);const area=el('div',null,card);area.innerHTML='<svg viewBox="0 0 300 200" role="img" aria-label="'+item.title+'" xmlns="http://www.w3.org/2000/svg" style="stroke:#20334b;stroke-width:4;fill:none;stroke-linecap:round;max-width:100%;width:350px;height:auto;background:#fff;border-radius:12px">'+item.svg+'</svg>';let simple=false;button('Quitar / poner el contexto',card,()=>{simple=!simple;let svg=area.querySelector('svg');if(simple){if(item.id==='a0')svg.innerHTML='<line x1="75" y1="65" x2="225" y2="65"/><line x1="75" y1="145" x2="225" y2="145"/>';if(item.id==='a1')svg.innerHTML='<g fill="#21bacc" stroke="none"><circle cx="80" cy="100" r="19"/><circle cx="220" cy="100" r="19"/></g>';if(item.id==='a2')svg.innerHTML='<rect x="60" y="80" width="45" height="40" fill="#888" stroke="none"/><rect x="195" y="80" width="45" height="40" fill="#888" stroke="none"/>';if(item.id==='a3')svg.innerHTML='<line x1="105" y1="55" x2="195" y2="55" stroke="#0ab8cd" stroke-width="9"/><line x1="105" y1="150" x2="195" y2="150" stroke="#0ab8cd" stroke-width="9"/>'}else svg.innerHTML=item.svg});const d=el('details',null,card);el('summary','Ver explicación',d);el('p',item.answer,d)}
if(item.type==='sim'){
 const body=el('div',null,card),result=el('p','',card);result.setAttribute('role','status');
 if(item.sim==='flight'){el('p','Cambia el ángulo y la velocidad para explorar un tiro ideal, sin aire y sobre suelo plano.',body);const a=range(body,'Ángulo (grados)',5,85,item.a),v=range(body,'Velocidad (m/s)',5,30,item.b);const canvas=el('canvas',null,body);canvas.width=400;canvas.height=190;canvas.style.cssText='max-width:100%;width:400px;background:#f4fbff;border-radius:12px';canvas.setAttribute('aria-label','Trayectoria del proyectil');draw=()=>{const angle=+a.value*Math.PI/180,vel=+v.value,g=9.81,dist=vel*vel*Math.sin(2*angle)/g,high=vel*vel*Math.sin(angle)**2/(2*g);result.textContent=`Alcance: ${dist.toFixed(1)} m · Altura máxima: ${high.toFixed(1)} m. La gráfica se adapta a cada tiro.`;const c=canvas.getContext('2d');c.clearRect(0,0,400,190);c.strokeStyle='#118d9f';c.lineWidth=3;c.beginPath();for(let i=0;i<=100;i++){let t=i/100,x=20+360*t,y=170-140*(4*t*(1-t));if(i===0)c.moveTo(x,y);else c.lineTo(x,y)}c.stroke();c.fillStyle='#243746';c.fillText('Salida',20,185);c.fillText(dist.toFixed(1)+' m',330,185)};draw()}
 if(item.sim==='saving'){el('p','Explora cuánto ahorrarías con la misma cantidad cada semana, sin intereses.',body);const w=range(body,'Semanas',1,52,item.a),amount=range(body,'Euros por semana',1,50,item.b);draw=()=>{result.textContent=`${w.value} semanas × ${amount.value} € = ${+w.value*+amount.value} € ahorrados.`};draw()}
 if(item.sim==='color'){el('p','Combina luz roja, verde y azul con los controles.',body);const r=range(body,'Rojo',0,255,item.a),g=range(body,'Verde',0,255,item.b),b=range(body,'Azul',0,255,170);const swatch=el('div',null,body);swatch.style.cssText='width:100%;max-width:300px;height:110px;border:2px solid white;border-radius:12px';draw=()=>{const hex=[r,g,b].map(x=>(+x.value).toString(16).padStart(2,'0')).join('').toUpperCase();swatch.style.background='#'+hex;result.textContent='Color RGB: #'+hex};draw()}
 if(item.sim==='dice'){el('p','Lanza dos dados y observa cómo varía la frecuencia de las sumas. Es una simulación aleatoria.',body);const count=range(body,'Lanzamientos',1,100,item.a);let previous=null;const show=()=>{if(!previous){result.textContent='Pulsa lanzar para empezar.';return}result.textContent='Frecuencias ('+previous.n+' lanzamientos): '+previous.hist.map((n,i)=>(i+2)+': '+n).join(' · ')};draw=()=>{result.textContent='Cantidad elegida: '+count.value+'. Pulsa lanzar.'};button('🎲 Lanzar dados',body,()=>{let n=+count.value,hist=Array(11).fill(0);for(let i=0;i<n;i++)hist[Math.floor(Math.random()*6)+Math.floor(Math.random()*6)]++;previous={n,hist};show()});show()}
}}
function update(){const now=new Date(),t=timeInfo(now);if(t.slot&&t.slot!==state.slot){choose();state.slot=t.slot;save()}const item=bank.find(x=>x.id===state.current);if(displayed!==state.current){displayed=state.current;render(item)}else if(!item&&!$('discoverCard').childNodes.length)render(null);$('discoverClock').textContent='Próxima actualización: '+t.next.toLocaleString('es-ES',{dateStyle:'medium',timeStyle:'short'})+(t.slot?'':' · Noche: se conserva la última actividad.');$('discoverInfo').textContent=`Colección finita: ${challenges.length} retos, ${art.length} ilusiones y ${simulators.length} variantes de simuladores (${bank.length} actividades). Vistas en este ciclo: ${state.seen.length}/${bank.length}. Al agotarse empieza otro ciclo. El progreso se guarda solo en este navegador; si borras sus datos, se reinicia.`}
update();setInterval(update,1000);document.addEventListener('visibilitychange',()=>{if(!document.hidden)update()});window.addEventListener('pageshow',update);window.addEventListener('focus',update);
})();
