const apiKey = "API_KEY"; // Replace with your actual API key
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.getElementById("city");
const searchBtn = document.getElementById("btn");

async function checkWeather(city = "tunisia") {
  if (!city.trim()) return;

  const res = await fetch(apiUrl + city + `&appid=${apiKey}`);
  let data = await res.json();

  if (res.status == 404) {
    alert("City not found!");
    return;
  }

  console.log(data);
  document.getElementById("cityName").innerHTML = data.name;
  document.getElementById("temp").innerHTML = Math.round(data.main.temp) + "°C";
  document.getElementById("humidity").innerHTML = data.main.humidity + "%";
  document.getElementById("wind").innerHTML = data.wind.speed + " km/h";
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});

// Changed 'click' to 'keydown'
searchBox.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    checkWeather(searchBox.value);
  }
});

checkWeather();
