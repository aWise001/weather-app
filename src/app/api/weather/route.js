import { NextResponse } from "next/server";

const DATA_SOURCE_URL = 'https://api.openweathermap.org/data/3.0/onecall'
const API_KEY = process.env.DATA_API_KEY;

export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const lat = searchParams.get('lat');
    const lon = searchParams.get('lon');
    const units = 'metric';

    const res = await fetch(`${DATA_SOURCE_URL}?lat=${lat}&lon=${lon}&units=${units}&appid=${API_KEY}`);
    const data = await res.json();
    return NextResponse.json({ data });
}