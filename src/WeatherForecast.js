import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon";
import axios from "axios";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row gx-1 mb-3">
          <div className="col-4 p-2" id="daily-forecast">
            <div className="daily">
              <section className="tuesday">
                <div className="row">
                  <div className="col-2 text-left">
                    <span className="tues">{forecast[0].dt}</span>
                  </div>
                  <div className="col-10 text-right mt-2">
                    <span className="day-2">
                      <WeatherIcon
                        code={forecast[0].weather[0].icon}
                        size={40}
                      />
                      <span className="tues-high">{forecast[0].temp.max}°</span>{" "}
                      |<span className="tues-low">{forecast[0].temp.min}°</span>
                    </span>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "774e0d8fffbeeedfdccb46cff718bbcf";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=imperial`;

    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
