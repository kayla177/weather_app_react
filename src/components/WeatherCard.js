import React from "react";

// Function to get the correct weather icon URL
function getIcon(condition) {
  switch (condition) {
    case "partly-cloudy-day":
      return "https://i.ibb.co/PZQXH8V/27.png";
    case "partly-cloudy-night":
      return "https://i.ibb.co/Kzkk59k/15.png";
    case "rain":
      return "https://i.ibb.co/kBd2NTS/39.png";
    case "clear-day":
      return "https://i.ibb.co/rb4rrJL/26.png";
    case "clear-night":
      return "https://i.ibb.co/1nxNGHL/10.png";
    case "snow":
      return "https://i.ibb.co/Zf17chp/snow.png";
    case "cloudy":
      return "https://i.ibb.co/0cNLLb4/cloudy.png";
    default:
      return "https://i.ibb.co/rb4rrJL/26.png"; // Fallback icon
  }
}

function WeatherCard({ weather, location }) {
  return (
    <div>
      <div className="weather-icon">
        <img src={getIcon(weather.icon)} alt="Weather icon" />
      </div>
      <div className="temperature">
        <h1>{weather.temp}°C</h1>
      </div>
      <div className="date-time">{weather.datetime}</div>
      <div className="divider"></div>
      <div className="condition-rain">
        <div className="condition">
          <i className="fas fa-cloud"></i>
          <div>{weather.conditions}</div>
        </div>
        <div className="rain">
          <i className="fas fa-tint"></i>
          <p>Perc - {weather.precip}%</p>
        </div>
      </div>
      <div className="location">
        <i className="fas fa-map-marker-alt"></i>
        <p>{location}</p>
      </div>
    </div>
  );
}

export default WeatherCard;
