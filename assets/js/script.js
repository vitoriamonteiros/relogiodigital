const horas = document.getElementById('horas');
const minutos= document.getElementById('minutos');
const segundos = document.getElementById('segundos');


const relegio = setInterval(function time() {
  let dateToday = new Date();
  let hr = dateToday.getHours().toString().padStart(2, '0');
  let min = dateToday.getMinutes().toString().padStart(2, '0');
  let seg = dateToday.getSeconds().toString().padStart(2, '0');

  horas.textContent = hr;
  minutos.textContent = min;
  segundos.textContent = seg;
})   

