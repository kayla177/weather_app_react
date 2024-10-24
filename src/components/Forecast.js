import React from 'react';

function getDayName(dateString) {
  const date = new Date(dateString);
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  return days[date.getDay()];
}

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

function celciusToFahrenheit(temp) {
  return ((temp * 9) / 5 + 32).toFixed(1);
}

function Forecast({ forecastData, unit, type }) {
  return (
    <div className="cards">
      {forecastData.map((data, index) => (
        <div className="card" key={index}>
          <h2 className="day-name">
            {type === "hourly"
              ? `${data.datetime.substring(0, 5)} ${data.datetime.includes('AM') ? 'AM' : 'PM'}` // Hour format
              : getDayName(data.datetime)}
          </h2>
          <div className="card-icon">
            <img src={getIcon(data.icon)} alt="Weather icon" />
          </div>
          <div className="day-temp">
            <h2 className="temp">
              {unit === "c" ? data.temp : celciusToFahrenheit(data.temp)}
            </h2>
            <span className="temp-unit">°{unit.toUpperCase()}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Forecast;
