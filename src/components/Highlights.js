function Highlights({ weather }) {
    return (
      <div className="highlights">
        <div className="card2">
          <h4 className="card-heading">UV Index</h4>
          <div className="content">
            <p className="uv-index">{weather.uvindex}</p>
            <p className="uv-text">Low</p>
          </div>
        </div>
        <div className="card2">
          <h4 className="card-heading">Wind Status</h4>
          <div className="content">
            <p className="wind-speed">{weather.windspeed} km/h</p>
          </div>
        </div>
        <div className="card2">
          <h4 className="card-heading">Sunrise & Sunset</h4>
          <div className="content">
            <p>{weather.sunrise}</p>
            <p>{weather.sunset}</p>
          </div>
        </div>
        <div className="card2">
          <h4 className="card-heading">Humidity</h4>
          <div className="content">
            <p>{weather.humidity}%</p>
            <p>High</p>
          </div>
        </div>
        <div className="card2">
          <h4 className="card-heading">Visibility</h4>
          <div className="content">
            <p>{weather.visibility}</p>
            <p>Clear Air</p>
          </div>
        </div>
        <div className="card2">
          <h4 className="card-heading">Air Quality</h4>
          <div className="content">
            <p>{weather.airquality}</p>
            <p>Moderate</p>
          </div>
        </div>
      </div>
    );
  }
  
  export default Highlights;
  