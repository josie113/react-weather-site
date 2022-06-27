import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
    function maxTemperature() {
        let temperature = Math.round(props.data.temp.max);
        return `${temperature}`;
    }
    function minTemperature() {
      let temperature = Math.round(props.data.temp.min);
      return `${temperature}`;
    }

    function day() {
        let date = new Date(props.data.dt * 1000);
        let day = date.getDay();

        let days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"]

        return days[day];
    }
    return (
      <div>
        <span className="WeatherForecast-day">{day()}</span>
        <div className="col-10 text-right mt-2">
          <span className="day-2">
            <WeatherIcon code={props.data.weather[0].icon} size={30} />
            <span className="tues-high">{maxTemperature()}°</span> |
            <span className="tues-low">{minTemperature()}°</span>
          </span>
        </div>
      </div>
    );
}