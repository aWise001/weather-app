'use client'

import { useState } from "react";

export function Weather() {
    const [city, setCity] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setCity('');

        const res = await fetch(`/api/location?city=${city}`);
        const data = await res.json();
        const lat = data.data[0].lat;
        const lon = data.data[0].lon;

        const res2 = await fetch(`/api/weather?lat=${lat}&lon=${lon}`);
        const data2 = await res2.json();
        console.log(data2.data.current.dt);
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
        </div>
    );
}