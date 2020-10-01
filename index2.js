let apiKey = "31d0af66c1fd3004cc392f8486b2455e";
let units = "imperial";
let days = ["Sun", "Mon", "Tue", "Wed", "Thurs", "Fri", "Sat"];

// myCity function takes users search string and displys it at "h1" heading 1
function myCity(event) {
  event.preventDefault();
  // I created an id for search-input in the search-form in the html
  let userCity = document.querySelector("#search-input");

  let cityName = document.querySelector("h1");
  cityName.innerHTML = `${userCity.value}`;
  let city = `${userCity.value}`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(showTemperature);
}
// Wait for the user to click on the "Search" button
let form = document.querySelector("#search-button");
form.addEventListener("click", myCity);

// Get a new date sample and display it at the "funnyTime" paragraph
let cityTime = new Date();
let day = days[cityTime.getDay()];

funnyTime.innerHTML = `${day} ${cityTime.getHours()}:${cityTime.getMinutes()}`;

// this is the celcius fahrenheit converter
/*function clickCelcius(event) {
  event.preventDefault();
  //alert("celcius")
  let tempValue = document.querySelector("#temp");
  tempValue.innerHTML = "19";
}

let celciusWeather = document.querySelector("#celcius-link");
celciusWeather.addEventListener("click", clickCelcius);
*/

/*function clickFahren(event) {
  event.preventDefault();
  // alert("fehanrehait");
  let tempValue = document.querySelector("#temp");
  tempValue.innerHTML = "77";
}
*/

//let fahrenWeather = document.querySelector("#fahrenheit-link");
//fahrenWeather.addEventListener("click", clickFahren);

//weather API
function showTemperature(louie) {
  let temperature = Math.round(louie.data.main.temp);
  let tempValue = document.querySelector("#temp");
  tempValue.innerHTML = temperature;
}

//gets weather from current location an displays into temp
function showCurrentLocation(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(showTemperature);
  //console.log(position);
}

// myCity function takes users search string and displys it at "h1" heading 1
function myCurrentCity(event) {
  event.preventDefault();

  navigator.geolocation.getCurrentPosition(showCurrentLocation);
}
// Wait for the user to click on the "current" button
let currentButton = document.querySelector("#current-button");
currentButton.addEventListener("click", myCurrentCity);
