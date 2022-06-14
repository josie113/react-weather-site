import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      maxTemp: response.data.main.temp_max,
      minTemp: response.data.main.temp_min,
      humidity: response.data.main.humidity,
      date: "Tuesday 08:00",
      description: response.data.weather[0].description,
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="container">
        <div className="Weather">
          <div className="row mt-2 mb-2">
            <div className="col-md-12 text-center">
              <form className="mb-3">
                <div className="row">
                  <div className="col-9">
                    <input
                      type="search"
                      placeholder="Search for your city..."
                      className="form-control"
                      autocomplete="off"
                    />
                  </div>
                  <div className="col-3">
                    <input type="submit" value="search" />
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="row gx-1 mb-3">
            <div className="col-4 p-2 mr-2 text-center">
              <div className="today">
                <h3>
                  <strong>
                    <span>{weatherData.city}</span>
                  </strong>
                </h3>
                <h4>
                  Last updated at <span>{weatherData.date}</span>
                </h4>
                <h1 className="temperature">
                  {Math.round(weatherData.temperature)}°F
                </h1>
                <div className="units">
                  <a href="\">°F</a> |{" "}
                  <a href="\" className="">
                    °C
                  </a>
                </div>
                <br />
                <div className="clearfix weather-temperature">
                  <img
                    src={weatherData.iconUrl}
                    alt={weatherData.description}
                    className="icon"
                  />
                  <h2 className="text-capitalize">{weatherData.description}</h2>
                </div>
              </div>
            </div>
            <div className="col-4 p-2 mr-2 text-center">
              <div className="today-details">
                <ul>
                  <li>High: {Math.round(weatherData.maxTemp)}%</li>
                  <li>Low: {Math.round(weatherData.minTemp)}%</li>
                  <li>Humidity: {weatherData.humidity}%</li>
                  <li>Wind: {weatherData.wind}km/h</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "b81ed97f9866e819de89275fbfb832d1";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
