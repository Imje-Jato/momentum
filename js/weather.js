const API_KEY = "c9d5f83f1520c039f4ccd1d3719daa10";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  console.log("You live it", lat, lon);
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url).then((response) =>
    response.json().then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}${"℃"}`;
    })
  );
}
function onGeoError() {
  alert("Fuck! Where are you now?");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
