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
const bank=[...challenges.map(([title,question,answer])=>({title,question,answer})),...art];
const root=document.getElementById('discoverRoot');if(!root)return;
root.innerHTML='<h2>🌀 Descubre</h2><p>Un reto o una ilusión para darle una vuelta al cerebro. Cambia automáticamente cada dos horas.</p><p id="discoverClock" role="status"></p><article class="discover-card"><span id="discoverKind"></span><h3 id="discoverTitle"></h3><p id="discoverQuestion"></p><div id="discoverArt"></div><details><summary>Ver respuesta</summary><p id="discoverAnswer"></p></details></article><p class="discover-note"></p>';
const $=id=>document.getElementById(id),period=7200000; let last=-1;
root.querySelector('.discover-note').textContent=`Colección propia: ${challenges.length} retos y ${art.length} ilusiones. Es finita: después de ${bank.length} turnos vuelve a empezar.`;
function update(){const now=Date.now(),slot=Math.floor(now/period),remaining=(slot+1)*period-now;if(slot!==last){last=slot;const index=((slot*17)%bank.length+bank.length)%bank.length,x=bank[index];$('discoverKind').textContent=x.svg?'👁️ Ilusión óptica':'🧠 Reto';$('discoverTitle').textContent=x.title;$('discoverQuestion').textContent=x.question;$('discoverAnswer').textContent=x.answer;$('discoverArt').innerHTML=x.svg?'<svg viewBox="0 0 300 200" role="img" aria-label="'+x.title+'" xmlns="http://www.w3.org/2000/svg" style="stroke:#20334b;stroke-width:4;fill:none;stroke-linecap:round;max-width:100%;height:auto;background:#fff;border-radius:12px">'+x.svg+'</svg>':'';root.querySelector('details').open=false;}
const sec=Math.ceil(remaining/1000),hh=Math.floor(sec/3600),mm=Math.floor(sec%3600/60),ss=sec%60;$('discoverClock').textContent='Actualizado: '+new Date(slot*period).toLocaleString('es-ES',{dateStyle:'medium',timeStyle:'short'})+' · Próximo en '+[hh,mm,ss].map(n=>String(n).padStart(2,'0')).join(':');}
update();setInterval(update,1000);document.addEventListener('visibilitychange',()=>{if(!document.hidden)update()});window.addEventListener('pageshow',update);
})();
