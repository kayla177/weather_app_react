import React, { useState, useEffect } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import Highlights from "./components/Highlights";
import UnitSwitch from "./components/UnitSwitch";
import Forecast from "./components/Forecast";

// You can hardcode or fetch the list of cities from an external source
const cities = [
  "New York",
  "Los Angeles",
  "Chicago",
  "London",
  "Paris",
  "Berlin",
  "Tokyo",
  "Beijing",
  "Sydney",
  "Toronto",
  "Mumbai",
  "Cairo",
  "Rio de Janeiro",
  "Moscow",
  "Cape Town",
  "Dubai",
  "Singapore",
  "Seoul",
  "Mexico City",
  "Toronto",
  "Vancouver",
  "Melbourne",
  "Auckland",
  "Rome",
  "Madrid",
  "Amsterdam",
  "Stockholm",
  "Oslo",
  "Copenhagen",
  "Helsinki",
  "Dublin",
  "Edinburgh",
  "Prague",
  "Vienna",
  "Budapest",
  "Warsaw",
  "Athens",
  "Istanbul",
  "Bangkok",
  "Hanoi",
  "Delhi",
  "Kolkata",
  "Lisbon",
  "Barcelona",
  "Dubrovnik",
  "Venice",
  "Zurich",
  "Geneva",
  "Munich",
  "Frankfurt",
  "Hamburg",
  "Sydney",
  "Melbourne",
  "Brisbane",
  "Perth",
  "Adelaide",
  "Wellington",
  "Christchurch",
];

function getBackground(condition) {
  switch (condition) {
    case "partly-cloudy-day":
      return "https://i.ibb.co/qNv7NxZ/pc.webp";
    case "partly-cloudy-night":
      return "https://i.ibb.co/RDfPqXz/pcn.jpg";
    case "rain":
      return "https://i.ibb.co/h2p6Yhd/rain.webp";
    case "clear-day":
      return "https://i.ibb.co/WGry01m/cd.jpg";
    case "clear-night":
      return "https://i.ibb.co/kqtZ1Gx/cn.jpg";
    case "snow":
      return "https://img.freepik.com/free-photo/mysterious-winter-landscape-majestic-mountains-winter_146671-14057.jpg";
    case "cloudy":
      return "https://images3.alphacoders.com/704/704427.jpg";
    default:
      return "https://i.ibb.co/qNv7NxZ/pc.webp"; // Fallback background
  }
}

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [unit, setUnit] = useState("c");
  const [location, setLocation] = useState("New York");
  const [forecastType, setForecastType] = useState("week");

  useEffect(() => {
    fetchWeatherData(location, unit);
  }, [location, unit]);

  const fetchWeatherData = (city, unit) => {
    const unitParam = unit === "c" ? "metric" : "us";
    fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=${unitParam}&key=XW4KTN4JHGWQ96T65KTYKTWUG&contentType=json`
    )
      .then((response) => response.json())
      .then((data) => {
        setWeatherData(data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  // Define the handleSearch function and pass it to SearchBar component
  const handleSearch = (city) => {
    setLocation(city); // Update location based on search
  };

  const background = weatherData
    ? getBackground(weatherData.currentConditions.icon)
    : "";

  return (
    <div
      className="wrapper"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${background})`,
      }}
    >
      <div className="sidebar">
        <SearchBar cities={cities} handleSearch={handleSearch} />

        {weatherData && (
          <WeatherCard weather={weatherData.currentConditions} unit={unit} />
        )}
      </div>
      <div className="main">
        <nav>
          <ul className="options">
            <button
              className={`hourly ${
                forecastType === "hourly" ? "active" : ""
              }`}
              onClick={() => setForecastType("hourly")}
            >
              Today
            </button>
            <button
              className={`week ${forecastType === "week" ? "active" : ""}`}
              onClick={() => setForecastType("week")}
            >
              Week
            </button>
          </ul>
        </nav>
        <UnitSwitch unit={unit} setUnit={setUnit} />
        {weatherData && (
          <Forecast
            forecastData={
              forecastType === "hourly"
                ? weatherData.days[0].hours // Use the hourly data for "Today"
                : weatherData.days.slice(0, 7) // Only showing one week
            }
            unit={unit}
            type={forecastType}
          />
        )}
        {weatherData && <Highlights weather={weatherData.currentConditions} />}
      </div>
    </div>
  );
}

export default App;
