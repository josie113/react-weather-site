import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("fahrenheit");
  function convertToCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function convertToFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  if (unit === "fahrenheit") {
    return (
      <div className="WeatherTemperature">
        <h1 className="temperature">{Math.round(props.fahrenheit)}°</h1>
        <div className="units">
          °F |{" "}
          <a href="\" onClick={convertToCelsius}>
            °C
          </a>
        </div>
      </div>
    );
  } else {
    let celsius = ((props.fahrenheit - 32) * 5) / 9;
    return (
      <div className="WeatherTemperature">
        <h1 className="temperature">{Math.round(celsius)}°</h1>
        <div className="units">
          <a href="\" onClick={convertToFahrenheit}>
            °F
          </a>{" "}
          | °C
        </div>
      </div>
    );
  }
}
