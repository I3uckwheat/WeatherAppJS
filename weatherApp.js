const button = document.querySelector("#submit");;
const textInput = document.querySelector("#inputText");
const weatherDisplay = document.querySelector("#weatherDisplay")

button.addEventListener("click", (e) => {
  getWeather(e.target.value).then((response) => {
    displayWeather(weatherProcessor(response));
  });
});

// **************************************************************************************

function getWeather(location) {
  return fetch(
    `http://api.openweathermap.org/data/2.5/weather?id=APIKEY`,
    { mode: 'cors' }
  )
    .then(function(response) {
      return response.json();
    })
    .catch(console.error);
}

function weatherProcessor(jsonObj){
  return{
    temperature: jsonObj.main.temp,
    humidity: jsonObj.main.humidity,
    visibility: jsonObj.visibility,
    cloudCover: jsonObj.weather[0].description,
    windDir: jsonObj.wind.deg,
    windSpeed: jsonObj.wind.speed
  }
}

function displayWeather(weather){
  weatherDisplay.innerHTML = "";
  for(property in weather){
    weatherProp = document.createElement('p');
    weatherProp.textContent = `${property}: ${weather[property]}`
    weatherDisplay.appendChild(weatherProp);
  }
}
