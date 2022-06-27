import React, { useState } from "react";
import WeatherForecastDay from "./WeatherForecastDay";
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
          <div className="col p-2" id="daily-forecast">
            <div className="daily">
              <section className="tuesday">
                <div className="row">
                  {forecast.map(function (dailyForecast, index) {
                    if (index < 6) {
                    return (
                      <div className="col-2 text-left" key={index}>
                        <WeatherForecastDay data={dailyForecast} />
                      </div>
                    );
                    }
                  })}
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
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=imperial`;

    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
