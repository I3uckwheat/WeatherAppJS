const button = document.querySelector("#submit");
const textInput = document.querySelector("#inputText")

function getWeather(location) {
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=APIKEY`,
    { mode: 'cors' }
  )
    .then(function(response) {
      return response.json();
    })
    .catch(console.error);
}

button.addEventListener("click", (e) => {
  getWeather(textInput.value).then((response) => console.log(response));
});
