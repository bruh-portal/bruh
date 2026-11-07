/* Fondo horario: aproximación solar local, sin permisos ni servicios externos. */
(()=>{
  'use strict';
  const cities={madrid:[40.4168,-3.7038],barcelona:[41.3874,2.1686],sevilla:[37.3891,-5.9845],valencia:[39.4699,-0.3763],bilbao:[43.263,-2.935],malaga:[36.7213,-4.4214],santiago:[42.8782,-8.5448],palma:[39.5696,2.6502],palmas:[28.1235,-15.4363],tenerife:[28.4636,-16.2518]};
  const key='dmfCiudadSolarV1', select=document.createElement('select'),label=document.createElement('label'),note=document.createElement('small'),box=document.createElement('div');
  select.id='dmfSolarCity';label.htmlFor=select.id;label.textContent='Ciudad para el fondo según la hora';
  const options=[['madrid','Madrid (referencia peninsular)'],['barcelona','Barcelona'],['sevilla','Sevilla'],['valencia','Valencia'],['bilbao','Bilbao'],['malaga','Málaga'],['santiago','Santiago de Compostela'],['palma','Palma'],['palmas','Las Palmas de Gran Canaria'],['tenerife','Santa Cruz de Tenerife']];
  options.forEach(([value,text])=>{const option=document.createElement('option');option.value=value;option.textContent=text;select.append(option)});
  note.textContent='Amanecer y puesta de sol aproximados para la ciudad elegida; se calculan en este navegador, sin ubicación ni conexión. El reloj del dispositivo debe ser correcto.';
  box.append(label,select,note);document.getElementById('settingsTheme').after(box);
  let city='madrid';try{const stored=localStorage.getItem(key);if(Object.prototype.hasOwnProperty.call(cities,stored))city=stored}catch{} select.value=city;
  const style=document.createElement('style');style.textContent='body[data-theme="horario"]:not([data-decor-bg]):not([data-custom-bg]){background:linear-gradient(135deg,var(--dmf-solar-top,#11132f),var(--dmf-solar-bottom,#142940)) fixed!important;animation:none!important}';document.head.append(style);
  // Approximate apparent solar position using UTC instant; DST is inherent in the instant.
  function solar(now,lat,lon){
    const d=now/86400000+2440587.5-2451545, rad=Math.PI/180, mod=(n,m)=>((n%m)+m)%m;
    const L=mod(280.46+0.9856474*d,360),g=mod(357.528+0.9856003*d,360)*rad;
    const lambda=(L+1.915*Math.sin(g)+0.020*Math.sin(2*g))*rad,epsilon=(23.439-0.0000004*d)*rad;
    const decl=Math.asin(Math.sin(epsilon)*Math.sin(lambda));
    const ra=mod(Math.atan2(Math.cos(epsilon)*Math.sin(lambda),Math.cos(lambda))/rad,360);
    const gmst=mod(280.46061837+360.98564736629*d,360);
    const hour=mod(gmst+lon-ra+180,360)-180;
    const altitude=Math.asin(Math.sin(lat*rad)*Math.sin(decl)+Math.cos(lat*rad)*Math.cos(decl)*Math.cos(hour*rad))/rad;
    return {altitude,hour};
  }
  const night=[[13,18,42],[18,35,53]],dawn=[[60,36,64],[106,61,65]],day=[[16,65,85],[25,94,104]],sunset=[[81,35,63],[116,59,52]];
  function mix(a,b,t){return a.map((v,i)=>Math.round(v+(b[i]-v)*t))}
  function smooth(x){x=Math.max(0,Math.min(1,x));return x*x*(3-2*x)}
  function colors(altitude,hour){
    const glow=hour<0?dawn:sunset;
    return [0,1].map(i=>altitude<0?mix(night[i],glow[i],smooth((altitude+10)/10)):mix(glow[i],day[i],smooth(altitude/14)));
  }
  function update(){
    const active=document.body.dataset.theme==='horario';box.hidden=!active;if(!active)return;
    const [lat,lon]=cities[city],position=solar(Date.now(),lat,lon),c=colors(position.altitude,position.hour);
    document.body.style.setProperty('--dmf-solar-top',`rgb(${c[0].join(',')})`);document.body.style.setProperty('--dmf-solar-bottom',`rgb(${c[1].join(',')})`);
  }
  select.addEventListener('change',()=>{if(!Object.prototype.hasOwnProperty.call(cities,select.value))return;city=select.value;try{localStorage.setItem(key,city)}catch{}update()});
  document.getElementById('settingsTheme').addEventListener('change',update);
  document.getElementById('settingsReset').addEventListener('click',()=>{city='madrid';select.value=city;try{localStorage.removeItem(key)}catch{}update()});
  document.addEventListener('visibilitychange',()=>{if(!document.hidden)update()});window.addEventListener('pageshow',update);
  update();setInterval(()=>{if(!document.hidden)update()},60000);
})();
