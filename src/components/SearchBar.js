import React, { useState } from "react";

function SearchBar({ cities, handleSearch }) {
  const [suggestions, setSuggestions] = useState([]);
  const [input, setInput] = useState("");

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInput(value);
    if (value) {
      const filteredSuggestions = cities.filter((city) =>
        city.toLowerCase().startsWith(value.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (city) => {
    setInput(city);
    setSuggestions([]);
    handleSearch(city);
  };

  return (
    <div className="search">
      <input
        type="text"
        placeholder="Search..."
        value={input}
        onChange={handleInputChange}
      />
      <button onClick={() => handleSearch(input)}>
        <i className="fa-solid fa-magnifying-glass"></i>
      </button>
      {suggestions.length > 0 && (
        <ul className="suggestions">
          {suggestions.map((city, index) => (
            <li key={index} onClick={() => handleSuggestionClick(city)}>
              {city}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SearchBar;
