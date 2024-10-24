import React from "react";

function UnitSwitch({ unit, setUnit }) {
  return (
    <ul className="options units">
      <button
        className={`celcius ${unit === "c" ? "active" : ""}`}
        onClick={() => setUnit("c")}
      >
        °C
      </button>
      <button
        className={`fahrenheit ${unit === "f" ? "active" : ""}`}
        onClick={() => setUnit("f")}
      >
        °F
      </button>
    </ul>
  );
}

export default UnitSwitch;
