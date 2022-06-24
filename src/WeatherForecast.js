import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="row gx-1 mb-3">
        <div className="col-4 p-2" id="daily-forecast">
          <div className="daily">
            <section className="tuesday">
              <div className="row">
                <div className="col-2 text-left">
                  <span className="tues">T</span>
                </div>
                <div className="col-10 text-right">
                  <span className="day-2">
                    <WeatherIcon code="10d" size={40} />
                    <span className="tues-high">48°</span> |
                    <span className="tues-low">42°</span>
                  </span>
                </div>
              </div>
            </section>
            <section className="wednesday">
              <div className="row">
                <div className="col-2 text-left">
                  <span className="wed">W</span>
                </div>
                <div className="col-10 text-right">
                  <span className="day-3">
                    <WeatherIcon code="10d" size={40} />
                    <span className="wed-high">48°</span> |
                    <span className="wed-low">42°</span>
                  </span>
                </div>
              </div>
            </section>
            <section className="thursday">
              <div className="row">
                <div className="col-2 text-left">
                  <span className="thurs">T</span>
                </div>
                <div className="col-10 text-right">
                  <span className="day-4">
                    <WeatherIcon code="10d" size={40} />
                    <span className="thur-high">48°</span> |
                    <span className="thur-low">42°</span>
                  </span>
                </div>
              </div>
            </section>
            <section className="friday">
              <div className="row">
                <div className="col-2 text-left">
                  <span className="fri">F</span>
                </div>
                <div className="col-10 text-right">
                  <span className="day-5">
                    <WeatherIcon code="10d" size={40} />
                    <span className="fri-high">48°</span> |
                    <span className="fri-low">42°</span>
                  </span>
                </div>
              </div>
            </section>
            <section className="saturday">
              <div className="row">
                <div className="col-2 text-left">
                  <span className="sat">S</span>
                </div>
                <div className="col-10 text-right">
                  <span className="day-6">
                    <WeatherIcon code="10d" size={40} />
                    <span className="sat-high">48°</span> |
                    <span className="sat-low">42°</span>
                  </span>
                </div>
              </div>
            </section>
            <section className="sunday">
              <div className="row">
                <div className="col-2 text-left">
                  <span className="sun">S</span>
                </div>
                <div className="col-10 text-right">
                  <span className="day-7">
                    <WeatherIcon code="10d" size={40} />
                    <span className="sun-high">48°</span> |
                    <span className="sun-low">42°</span>
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
