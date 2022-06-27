import React, { useState } from "react";

export default function WeatherTemperature(props) {
      return (
        <div className="WeatherTemperature">
          <h1 className="temperature">{Math.round(props.fahrenheit)}°</h1>
          <div className="units">
          </div>
        </div>
      );
}
