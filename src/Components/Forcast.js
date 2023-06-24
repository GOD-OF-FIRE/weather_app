import React, { useEffect, useState } from "react";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
// import faker from 'faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

let Forcast = (props) => {
  const [max, setMax] = useState([]);
  const [min, setMin] = useState([]);
  const options = {
    responsive: true,
    plugins: {
      // legend: {
      //   position: 'top' as const,
      // },
      title: {
        display: true,
        text: "7 Day Forecast",
      },
      maintainAspectRatio: false,
    },
  };

  const labels = [
    "First Day",
    "Second Day",
    "Third Day",
    "Fourth Day",
    "Fifth Day",
    "Sixth Day",
    "Seventh Day",
  ];

  const data = {
    labels,
    datasets: [
      {
        label: "Max Temp",
        data: max,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Min Temp",
        data: min,
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };
  let getWeatherInfo = async () => {
    try {
      let url = `https://api.openweathermap.org/data/2.5/forecast?q=${props.cityName}&appid=a8d88462c1d2eb36556b8329e72bb978`;

      let res = await fetch(url);
      let data = await res.json();
      setMin([]);
      setMax([]);
      for (let i = 0; i <= 6; i++) {
        setMin((oldArray) => [
          ...oldArray,
          (data.list[i].main.temp_min - 273.15),
        ]);
        setMax((oldArray) => [
          ...oldArray,
          (data.list[i].main.temp_max - 273.15),
        ]);
      }

    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getWeatherInfo();
  }, [props.cityName]);
  return (
    <React.Fragment>
      <div>
        <Line options={options} data={data} height="10rem" width="30rem" />
      </div>
    </React.Fragment>
  );
};

export default Forcast;
