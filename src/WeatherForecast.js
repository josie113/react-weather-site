import React from "react";
import WeatherIcon from "./WeatherIcon";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }
  console.log(props);

  let apiKey = "774e0d8fffbeeedfdccb46cff718bbcf";
  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  let apiUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=imperial`;

  axios.get(apiUrl).then(handleResponse);
  return (
    <div className="WeatherForecast">
      <div className="row gx-1 mb-3">
        <div className="col-4 p-2" id="daily-forecast">
          <div className="daily">
            <section className="tuesday">
              <div className="row">
                <div className="col-2 text-left">
                  <span className="tues">TUE</span>
                </div>
                <div className="col-10 text-right mt-2">
                  <span className="day-2">
                    <WeatherIcon code="10d" size={40} />
                    <span className="tues-high">48°</span> |
                    <span className="tues-low">42°</span>
                  </span>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
