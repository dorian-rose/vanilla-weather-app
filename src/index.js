function displayTemperature(response) {
  document.querySelector("#current-temperature").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#feels-like").innerHTML = Math.round(
    response.data.main.feels_like
  );
  document.querySelector("#wind").innerHTML = Math.round(
    response.data.wind.speed
  );
  document.querySelector("#location").innerHTML = response.data.name;
  document.querySelector("#weather-description").innerHTML =
    response.data.weather[0].description;
}

let apiKey = "535cacbb3f8a0df0aeb4790235b9541f";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=adelaide&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(displayTemperature);
