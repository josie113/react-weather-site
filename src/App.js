import React from "react";
import Weather from "./Weather";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Portland"/>
        <footer>
          This project was coded by Josie Harvey and is{" "}
          <a
            href="https://github.com/josie113/react-weather-site"
            target="_blank" rel="noopener noreferrer"
          >
            open-sourced on Github
          </a>
        </footer>
      </div>
    </div>
  );
}
