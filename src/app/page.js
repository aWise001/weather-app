// import { useState } from 'react';

// function unixTo24Hr(date) {
//   var hours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
//   var minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
//   var seconds = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();

//   return(hours + ':' + minutes + ':' + seconds);
// }

// function Weather() {
//   const [weatherData, setWeatherData] = useState(null);
//   const lat = 51.7050;
//   const lon = -0.1125;
//   const key = process.env.WEATHER_API_KEY;

//   const units = "metric";

//   function handleClick() {
//     const xhr = new XMLHttpRequest();
//     xhr.open('GET', `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&units=${units}&appid=${key}`);
//     xhr.onload = function() {
//       if (xhr.status === 200) {
//         setWeatherData(JSON.parse(xhr.responseText));
//       }
//     };
//     xhr.send();
//   }

//   if(weatherData) {
//     var sunrise_time = unixTo24Hr(new Date(weatherData.current.sunrise * 1000));
//     var current_time = unixTo24Hr(new Date(weatherData.current.dt * 1000));
//   }
//   return (
//     <div>
//       <button onClick={handleClick}>Get Weather</button>
//       {weatherData ? <div>{sunrise_time} {current_time}</div> : <div>Loading...</div>}
//     </div>
//   );
// }

import {Weather} from './components/weather'

export default function HomePage() {
  return (
    <div>
      <Weather />
    </div>
  );
}
