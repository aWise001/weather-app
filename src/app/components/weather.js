'use client'

import { useState } from "react";

export function Weather() {
    const [city, setCity] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setCity('');
        const res = await fetch(`/api/location?city=${city}`)
        const data = await res.json();
        console.log(data);
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