import React, {useEffect ,useState} from "react";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
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
    let [first,setFirst]=useState()
    let [second,setSecond]=useState()
    let [third,setThird]=useState()
    let [fourth,setFourth]=useState()
    let [fifth,setFifth]=useState()
    let [sixth,setSixth]=useState()
    let [seventh,setSeventh]=useState()


    let [firstMax,setFirstMax]=useState()
    let [secondMax,setSecondMax]=useState()
    let [thirdMax,setThirdMax]=useState()
    let [fourthMax,setFourthMax]=useState()
    let [fifthMax,setFifthMax]=useState()
    let [sixthMax,setSixthMax]=useState()
    let [seventhMax,setSeventhMax]=useState()
    

    const options = {
      responsive: true,
      plugins: {
        // legend: {
        //   position: 'top' as const,
        // },
        title: {
          display: true,
          text: '7 Day Forecast',
        },
         maintainAspectRatio: false 
      },
    };
    
    const labels = ['First Day', 'Second Day', 'Third Day', 'Fourth Day', 'Fifth Day', 'Sixth Day', 'Seventh Day'];
    
     const data = {
      labels,
      datasets: [
        {
          label: 'Max Temp',
          data: [firstMax,secondMax,thirdMax,fourthMax,fifthMax,sixthMax,seventhMax],
          borderColor: 'rgb(255, 99, 132)',
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        {
          label: 'Min Temp',
          data: [first,second,third,fourth,fifth,sixth,seventh],
          borderColor: 'rgb(53, 162, 235)',
          backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
      ],
    };

  let getWeatherInfo = async () => {
    try {
      let url = `https://api.openweathermap.org/data/2.5/forecast?q=${props.cityName}&appid=a8d88462c1d2eb36556b8329e72bb978`;

      let res = await fetch(url);
      let data = await res.json();
     
      setFirst(Math.floor((data.list[0].main.temp_min)-273.15))
      setSecond(Math.floor((data.list[1].main.temp_min)-273.15))
      setThird(Math.floor((data.list[2].main.temp_min)-273.15))
      setFourth(Math.floor((data.list[3].main.temp_min)-273.15))
      setFifth(Math.floor((data.list[4].main.temp_min)-273.15))
      setSixth(Math.floor((data.list[5].main.temp_min)-273.15))
      setSeventh(Math.floor((data.list[6].main.temp_min)-273.15))
      
      setFirstMax(Math.floor((data.list[0].main.temp_max)-273.15))
      setSecondMax(Math.floor((data.list[1].main.temp_max)-273.15))
      setThirdMax(Math.floor((data.list[2].main.temp_max)-273.15))
      setFourthMax(Math.floor((data.list[3].main.temp_max)-273.15))
      setFifthMax(Math.floor((data.list[4].main.temp_max)-273.15))
      setSixthMax(Math.floor((data.list[5].main.temp_max)-273.15))
      setSeventhMax(Math.floor((data.list[6].main.temp_max)-273.15))
      




















    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getWeatherInfo();
  },[props.cityName]);

 



























  
  return (
    <>
    <div>
            
    <Line options={options} data={data} height="10rem" width="30rem" />
    {/* <p>max Temp: {firstMax}</p>
    <p>Min Temp: {first}</p>
    <p>max Temp: {secondMax}</p>
    <p>Min Temp: {second}</p>
    <p>max Temp: {thirdMax}</p>
    <p>Min Temp: {third}</p>
    <p>max Temp: {fourthMax}</p>
    <p>Min Temp: {fourth}</p>
    <p>max Temp: {fifthMax}</p>
    <p>Min Temp: {fifth}</p>
    <p>max Temp: {sixthMax}</p>
    <p>Min Temp: {sixth}</p>
    <p>max Temp: {seventhMax}</p>
    <p>Min Temp: {seventh}</p> */}
    </div>
    </>
  )
}

export default Forcast