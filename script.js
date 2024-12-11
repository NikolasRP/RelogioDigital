const horas = document.getElementById('horas');

const minutos = document.getElementById('minutos');

const segundos = document.getElementById('segundos');

const relogio = setInterval(functiontime(){
                            let dateToday = newDate();
  let hr = dateToday.getHours();
  let min = dateToday.getMinutes();
  let s = dateToday.getSeconds();

  horas.textcontent = hr;
  minutos.textcontent = min;
  segundos.textcontent = s;

  if (hr < 10) hr = '0' + hr;
  if (hr < 10) hr = '0' + hr;
  if (hr < 10) hr = '0' + hr;

})
