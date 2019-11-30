 //JI099NKDq2fJHUmfV68XsEnUAq4G4npA
//degree to ℉ conversion
let option = document.getElementsByTagName('option');
let temp = document.getElementById('temp');
let f = document.getElementById("output℉");
function convertToFahrenheit() {
  if(option.selected == '°C'){
  let celsius = (temp.value * 1.8) + 32;
  f.innerHTML = `(${celsius} ℉`;
  }
}
function convertToCelsius() {
  if(option.selected == '℉'){
    let fah = (temp.value - 32)*(5/9);
  f.innerHTML = `${fah} °C`;
  }
}
let inputSearch = document.getElementById('inputSearch');
//fetch('https://maps.googleapis.com/maps/api/geocode/json?address=inputSearch&key=AIzaSyC_AgddD3PBSw1OunhnHCh5A9y438OZpB8')
function convertToCoor () {
  //let staticMap = 'https://www.mapquestapi.com/staticmap/v5/map?locations='+ inputSearch.value + '|marker&size=600,400@2x&key=n2oPuxX0QBp3dYl4qjZAbW7eoT6E9WPx';
  const userValue = 'http://www.mapquestapi.com/geocoding/v1/address?key=JI099NKDq2fJHUmfV68XsEnUAq4G4npA&location='+ inputSearch.value;
fetch(userValue)
.then(data => data.json())
.then(res => {
  document.getElementById('latLan').innerHTML = `Lat: ${res.results[0].locations[0].displayLatLng.lat},
   Lng: ${res.results[0].locations[0].displayLatLng.lat}`;
   inputSearch.placeholder = "Search for your place of Interest";
  //console.log(res.results[0].locations[0].displayLatLng);AIzaSyBIQuBBlmgjtAwW0rjbWai7QQajdUzS2aY
});
let img = document.getElementById('mapIn');
      img.setAttribute('src','https://www.mapquestapi.com/staticmap/v5/map?locations='+ inputSearch.value +  '|marker&size=600,400@2x&zoom=7&key=n2oPuxX0QBp3dYl4qjZAbW7eoT6E9WPx');
  fetch('https://api.openweathermap.org/data/2.5/weather?q=' + inputSearch.value +'&appid=64005ab0a5f760ac941af96ff3f6c2c4')
  .then(data => data.json())
  .then(res => {
    console.log(res);
    let temp = document.getElementById('temp1');
    let windSpeed = document.getElementById('windSpeed');
    let pressure = document.getElementById('pressure');
    let humidity = document.getElementById('humidity');
    let temp_min = document.getElementById('temp_min');
    let temp_max = document.getElementById('temp_max');
    let weatherCond = document.getElementById('weatherCond');

    temp.innerHTML = `Temperature of place is ${res.main.temp} `;
    pressure.innerHTML = `Pressure of place is ${res.main.pressure}`;
    windSpeed.innerHTML = `wind speed of place is ${res.wind.speed};`;
    humidity.innerHTML = `Humidity of place is ${res.main.humidity}`;
    temp_min.innerHTML = `Minimum temperature of place is ${res.main.temp_min}`;
    temp_max.innerHTML = `Maximum temperature of place is ${res.main.temp_max}`;
    weatherCond.innerHTML = `Weather Condition of place is ${res.weather[0].main}`;

})
}
if(navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    function(p) {
      let img = document.getElementById('mapIn');
      img.setAttribute('src','https://www.mapquestapi.com/staticmap/v5/map?locations='+ p.coords.latitude + ',' + p.coords.longitude +  '|marker&size=600,400@2x&zoom=7&key=n2oPuxX0QBp3dYl4qjZAbW7eoT6E9WPx');
        })
}