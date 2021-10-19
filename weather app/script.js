// api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

const weatherApi = {
  key: "bab281d79e5f1e9755a68d754cc313e7",
  baseUrl: "https://api.openweathermap.org/data/2.5/weather",
};

const searchInputBox = document.getElementById("inputBox");
// event listener function on enter keypress
searchInputBox.addEventListener("keypress", (event) => {
  if (event.keyCode === 13) {
    console.log(searchInputBox.value);
    getWeatherReport(searchInputBox.value);
    document.querySelector(".weather-body").style.display = "block";
  }
});

// Get Weather Report and accesing the city from api
function getWeatherReport(city) {
  fetch(`${weatherApi.baseUrl}?q=${city}&appid=${weatherApi.key}&units=metric`)
    .then((weather) => {
      return weather.json();
    })
    .then(showWeatherReport);
}

// show weather report
function showWeatherReport(weather) {
  console.log(weather);

  let city = document.getElementById("city");
  city.innerHTML = `${weather.name}, ${weather.sys.country}`;

  let temperature = document.getElementById("temp");
  temperature.innerHTML = `${Math.round(weather.main.temp)}&deg;C`;

  let minMaxTemp = document.getElementById("minMax");
  minMaxTemp.innerHTML = `${Math.floor(
    weather.main.temp_min
  )}&deg;C (min)/ ${Math.ceil(weather.main.temp_max)}&deg;C (max) `;

  let weatherType = document.getElementById("weatherType");
  weatherType.innerText = `${weather.weather[0].main}`;

  if (weatherType.textContent == "Clear") {
    document.body.style.backgroundImage = "url('./images/clear.jpg')";
  } else if (weatherType.textContent == "Clouds") {
    document.body.style.backgroundImage = "url('./images/cloud.jpg')";
  } else if (weatherType.textContent == "Haze") {
    document.body.style.backgroundImage = "url('./images/cloud.jpg')";
  } else if (weatherType.textContent == "Rain") {
    document.body.style.backgroundImage = "url('./images/rain.jpg')";
  } else if (weatherType.textContent == "Snow") {
    document.body.style.backgroundImage = "url('./images/snow.jpg')";
  } else if (weatherType.textContent == "Thunderstorm") {
    document.body.style.backgroundImage = "url('./images/thunderstorm.jpg')";
  }
}
