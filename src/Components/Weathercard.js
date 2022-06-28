import React, { useEffect } from "react";


const Weathercard = ({
  temp,
  humidity,
  pressure,
  weathermood,
  name,
  speed,
  country,
  sunset,
}) => {
  const [weatherState, setWeatheState] = React.useState("");
  const [bgcolor,setBgcolor]= React.useState()
  useEffect(() => {
    if (weathermood) {
      switch (weathermood) {
        case "Clouds":
          setWeatheState("wi-day-cloudy");
          setBgcolor("#313235")
          break;
        case "Haze":
          setWeatheState("wi-fog");
          setBgcolor("#A7BCC9")
          break;
        case "Clear":
          setWeatheState("wi-day-sunny");
          setBgcolor("#F1C973")
          break;
        case "Mist":
          setWeatheState("wi-dust");
          setBgcolor("#816B56")
          break;

          default:
            setWeatheState("wi-day-sunny");
            setBgcolor("#F1C973")
            break;
      }
    }
  }, [weathermood]);

  // converting the seconds into time
  let sec = sunset;
  let date = new Date(sec * 1000);
  let timeStr = `${date.getHours()}:${date.getMinutes()}`;
  return (
    <>
      <article className="widget">
        <div className="weatherIcon" style={{backgroundColor:`${bgcolor}`}}>
          <i className={`wi ${weatherState}`}></i>
        </div>
        <div className="extra-temp" style={{backgroundColor:`${bgcolor}`}}>
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
        <div className="date"> {new Date().toLocaleString()} </div>
        <div className="weatherInfo">
          <div className="temperature">
            <span>{temp}&deg;</span>
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
    </>
  );
};

export default Weathercard;