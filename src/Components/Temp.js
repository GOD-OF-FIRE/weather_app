import React, { useEffect, useState } from "react";
import Weathercard from "./Weathercard";
import "./style.css";
import Forcast from "./Forcast";
const Temp = () => {
  const [searchValue, setSearchValue] = useState("Bangalore");
  const [tempInfo, setTempInfo] = useState({});
  const [city,setCity]=useState("Bangalore")
  let getWeatherInfo = async () => {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=a8d88462c1d2eb36556b8329e72bb978`;

      let res = await fetch(url);
      let data = await res.json();

      let { temp, humidity, pressure, temp_min, temp_max } = data.main;
      const { main: weathermood } = data.weather[0];
      const { name } = data;
      const { speed } = data.wind;
      const { country, sunset, sunrise } = data.sys;
      const myNewWeatherInfo = {
        temp,
        humidity,
        pressure,
        weathermood,
        name,
        speed,
        country,
        sunset,
        sunrise,
        temp_min,
        temp_max,
      };
      setTempInfo(myNewWeatherInfo);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getWeatherInfo();
  }, []);

  return (
    <div>
      <div className="wrap">
        <div className="search">
          <input
            type="search"
            placeholder="search..."
            autoFocus
            id="search"
            className="searchTerm"
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <button
            className="searchButton"
            type="button"
            onClick={()=>{
              getWeatherInfo()
              setCity(searchValue)
            }}
          >
            Search
          </button>
        </div>
      </div>
      <Weathercard {...tempInfo} />
      <div>
        <Forcast cityName={city} />
      </div>
    </div>
  );
};

export default Temp;
