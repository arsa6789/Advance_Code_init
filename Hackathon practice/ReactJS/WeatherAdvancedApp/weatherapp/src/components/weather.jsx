import "./weather.css";
import search_icon from "../Assets/search.png";
import clear_icon from "../Assets/clear.png";
import cloud_icon from "../Assets/cloud.png";
import drizzle_icon from "../Assets/drizzle.png";
import humidity_icon from "../Assets/humidity.png";
import rain_icon from "../Assets/rain.png";
import snow_icon from "../Assets/snow.png";
import wind_icon from "../Assets/wind.png";
import { useCallback, useEffect, useRef, useState } from "react";

const Weather = () => {
  const inputRef = useRef()
  const [weatherData, setWeatherData] = useState(false);

  const allIcons = {
    "01d": clear_icon,
    "01n": clear_icon,
    "02d": cloud_icon,
    "02n": cloud_icon,
    "03d": cloud_icon,
    "03n": cloud_icon,
    "04d": drizzle_icon,
    "04n": drizzle_icon,
    "09d": rain_icon,
    "09n": rain_icon,
    "10d": rain_icon,
    "10n": rain_icon,
    "13d": snow_icon,
    "13n": snow_icon,
  }
  const search = useCallback(async (city = "") => {
    const fetchWeather = async (url) => {
      const response = await fetch(url);
      const data = await response.json();
      const icon = allIcons[data.weather[0].icon] || clear_icon;

      setWeatherData({
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        temperature: Math.floor(data.main.temp),
        location: data.name,
        icon: icon,
      });
    };

    const trimmedCity = city?.trim();

    if (trimmedCity) {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${trimmedCity}&units=metric&appid=${import.meta.env.VITE_APP_ID}`;
      try {
        await fetchWeather(url);
      } catch (error) {
        console.log(error, "==error");
      }
      return;
    }

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${import.meta.env.VITE_APP_ID}`;

          try {
            await fetchWeather(url);
          } catch (error) {
            console.log(error, "==error");
          }
        },
        async () => {
          const fallbackUrl = `https://api.openweathermap.org/data/2.5/weather?q=London&units=metric&appid=${import.meta.env.VITE_APP_ID}`;
          try {
            await fetchWeather(fallbackUrl);
          } catch (error) {
            console.log(error, "==error");
          }
        }
      );
      return;
    }

    const fallbackUrl = `https://api.openweathermap.org/data/2.5/weather?q=London&units=metric&appid=${import.meta.env.VITE_APP_ID}`;
    try {
      await fetchWeather(fallbackUrl);
    } catch (error) {
      console.log(error, "==error");
    }
  }, [allIcons]);

  useEffect(() => {
    search();
  }, [search]);

  return (
    <div className="weather">
      <div className="search-bar">
        <input type="text" ref={inputRef} placeholder="search" />
        <img src={search_icon} alt="search icon" onClick={()=>search(inputRef.current.value)}/>
      </div>
      <img src={weatherData.icon} alt="" className="weather-icon" />
      <p className="temperature">{weatherData.temperature}°C</p>
      <p className="location">{weatherData.location}</p>
      <div className="weather-data">
        <div className="col">
          <img src={humidity_icon} alt="" />
          <div>
            <p>{weatherData.humidity}%</p>
            <span>Humidity</span>
          </div>
        </div>
        <div className="col">
          <img src={wind_icon} alt="" />
          <div>
            <p>{weatherData.windSpeed}Km/h</p>
            <span>Wind speed</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
