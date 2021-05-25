fetch('https://api.openweathermap.org/data/2.5/weather?q=Mogilev&appid=2deca2a49cacd2151b4a829cc3fde826').then(function (resp) {return resp.json() }).then(function (data) {
  console.log (data);
  var temp = Math.round(data.main.temp - 273);
  cityName.innerText=data.name
  temperature.innerText=temp+" C";
  discription.innerText=data.weather[0]['description'];
})