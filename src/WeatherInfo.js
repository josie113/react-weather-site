import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row gx-1 mb-3">
        <div className="col-6 p-2 mr-2 text-center">
          <div className="today">
            <h3>
              <strong>
                <span>{props.data.city}</span>
              </strong>
            </h3>
            <h4>
              Last updated at <FormattedDate date={props.data.date} />
            </h4>
            <WeatherTemperature fahrenheit={Math.round(props.data.temperature)} />
            <br />
            <div className="clearfix weather-temperature">
              <WeatherIcon code={props.data.icon} size={60} />
              <h2 className="text-capitalize">{props.data.description}</h2>
            </div>
          </div>
        </div>
        <div className="col-4 p-2 mr-2 text-center">
          <div className="today-details">
            <ul>
              <li>High: {Math.round(props.data.maxTemp)}%</li>
              <li>Low: {Math.round(props.data.minTemp)}%</li>
              <li>Humidity: {props.data.humidity}%</li>
              <li>Wind: {props.data.wind}km/h</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
