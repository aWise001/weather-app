'use client'

import { useState } from "react";

function unixTo24Hr(date) {
  var hours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
  var minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
  var seconds = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
  return(hours + ':' + minutes + ':' + seconds);
}

export function Weather() {
    const [city, setCity] = useState('');
    const [dTemp, setDTemp] = useState(null);
    const [humidity, setHumidity] = useState(null);
    const [sunrise, setSunrise] = useState(null);
    const [sunset, setSunset] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setCity('');
        const res = await fetch(`/api/location?city=${city}`);
        const data = await res.json();
        const lat = data.data[0].lat;
        const lon = data.data[0].lon;
        const res2 = await fetch(`/api/weather?lat=${lat}&lon=${lon}`);
        const data2 = await res2.json();
        setDTemp(data2.data.current.temp);
        setHumidity(data2.data.current.humidity);
        setSunrise(unixTo24Hr(new Date(data2.data.current.sunrise * 1000)));
        setSunset(unixTo24Hr(new Date(data2.data.current.sunset * 1000)));
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="City"
                />
                <button>Get Weather</button>
            </form>
            <div>
                {dTemp ? <div>Current temperature: {dTemp}</div>: <div></div>}
                {humidity ? <div>Humidity: {humidity}</div>: <div></div>}
                {sunrise ? <div>Sunrise: {sunrise}</div>: <div></div>}
                {sunset ? <div>Sunset: {sunset}</div>: <div></div>}
            </div>
        </div>
    );
}