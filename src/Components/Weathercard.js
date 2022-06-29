import React, { useEffect } from "react";
import "./style.css";
let Weathercard = ({
  temp,
  humidity,
  pressure,
  weathermood,
  name,
  speed,
  country,
  sunset,
  temp_min,
  temp_max,
  sunrise,
}) => {
  const [weatherState, setWeatheState] = React.useState("");
  const [bgcolor, setBgcolor] = React.useState();
  const [show, setShow] = React.useState(false);
  useEffect(() => {
    if (weathermood) {
      switch (weathermood) {
        case "Clouds":
          setWeatheState("wi-day-cloudy");
          setBgcolor("#7F7F7F");
          break;
        case "Haze":
          setWeatheState("wi-fog");
          setBgcolor("#A7BCC9");
          break;
        case "Clear":
          setWeatheState("wi-day-sunny");
          setBgcolor("#F1C973");
          break;
        case "Mist":
          setWeatheState("wi-dust");
          setBgcolor("#816B56");
          break;

        default:
          setWeatheState("wi-day-sunny");
          setBgcolor("#F1C973");
          break;
      }
    }
  }, [weathermood]);

  // converting the seconds into time
  let riseSec = sunrise;
  let sec = sunset;
  let riseTime = new Date(riseSec * 1000);
  let date = new Date(sec * 1000);
  let timeStr = `${date.getHours()}:${date.getMinutes()}`;
  let riseTimeStr = `${riseTime.getHours()}:${riseTime.getMinutes()}`;
  if(show){
    return (
      <>
        <div className="wrapper">
          <article className="widget">
            <div
              className="weatherIcon"
              style={{ backgroundColor: `${bgcolor}` }}
            >
              <i className={`wi ${weatherState}`}></i>
            </div>
  
            <div className="date"> {new Date().toLocaleString()} </div>
            <div className="weatherInfo">
              <div className="temperature">
                <span className="currTemp">{temp}&deg;</span>
                <pre> High Temp: {temp_max}</pre>
                <pre>Low Temp: {temp_min}</pre>
              </div>
  
              <div className="description">
                <div className="weatherCondition">{weathermood}</div>
                <div className="place">
                  {name}, {country}
                </div>
              </div>
            </div>
  
            {/* our 4column section  */}
          </article>
          <p className="toggle" onClick={()=>{
            setShow(!show)
          }}>▶️</p>
          <div className="extra-temp" >
            <div className="temp-info-minmax">
              <div className="two-sided-section first">
                <p>
                  <i className={"wi wi-sunrise"}></i>
                </p>
                <p className="extra-info-leftside">
                  {riseTimeStr} PM <br />
                  Sunrise
                </p>
              </div>
            </div>
            <div className="temp-info-minmax">
              <div className="two-sided-section first">
                <p>
                  <i className={"wi wi-sunset"}></i>
                </p>
                <p className="extra-info-leftside">
                  {timeStr} PM <br />
                  Sunset
                </p>
              </div>
            </div>
  
            <div className="temp-info-minmax">
              <div className="two-sided-section second">
                <p>
                  <i className={"wi wi-humidity"}></i>
                </p>
                <p className="extra-info-leftside">
                  {humidity} <br />
                  Humidity
                </p>
              </div>
            </div>
  
            <div className="weather-extra-info">
              <div className="two-sided-section first">
                <p>
                  <i className={"wi wi-rain"}></i>
                </p>
                <p className="extra-info-leftside">
                  {pressure} <br />
                  Pressure
                </p>
              </div>
            </div>
  
            <div className="weather-extra-info">
              <div className="two-sided-section second">
                <p>
                  <i className={"wi wi-strong-wind"}></i>
                </p>
                <p className="extra-info-leftside">
                  {speed} <br />
                  Speed
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
  return (
    <>
      <div className="wrapper">
        <article className="widget">
          <div
            className="weatherIcon"
            style={{ backgroundColor: `${bgcolor}` }}
          >
            <i className={`wi ${weatherState}`}></i>
          </div>

          <div className="date"> {new Date().toLocaleString()} </div>
          <div className="weatherInfo">
            <div className="temperature">
              <span className="currTemp">{temp}&deg;</span>
              <pre> High Temp: {temp_max}</pre>
              <pre>Low Temp: {temp_min}</pre>
            </div>

            <div className="description">
              <div className="weatherCondition">{weathermood}</div>
              <div className="place">
                {name}, {country}
              </div>
            </div>
          </div>

          {/* our 4column section  */}
        </article>
        <p className="toggle" onClick={()=>{
          setShow(!show)
        }}>▶️</p>
        
        {/* <div className="extra-temp" >
          <div className="temp-info-minmax">
            <div className="two-sided-section first">
              <p>
                <i className={"wi wi-sunrise"}></i>
              </p>
              <p className="extra-info-leftside">
                {riseTimeStr} PM <br />
                Sunrise
              </p>
            </div>
          </div>
          <div className="temp-info-minmax">
            <div className="two-sided-section first">
              <p>
                <i className={"wi wi-sunset"}></i>
              </p>
              <p className="extra-info-leftside">
                {timeStr} PM <br />
                Sunset
              </p>
            </div>
          </div>

          <div className="temp-info-minmax">
            <div className="two-sided-section second">
              <p>
                <i className={"wi wi-humidity"}></i>
              </p>
              <p className="extra-info-leftside">
                {humidity} <br />
                Humidity
              </p>
            </div>
          </div>

          <div className="weather-extra-info">
            <div className="two-sided-section first">
              <p>
                <i className={"wi wi-rain"}></i>
              </p>
              <p className="extra-info-leftside">
                {pressure} <br />
                Pressure
              </p>
            </div>
          </div>

          <div className="weather-extra-info">
            <div className="two-sided-section second">
              <p>
                <i className={"wi wi-strong-wind"}></i>
              </p>
              <p className="extra-info-leftside">
                {speed} <br />
                Speed
              </p>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default Weathercard;
