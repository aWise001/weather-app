import { NextResponse } from "next/server";

const DATA_SOURCE_URL = "http://api.openweathermap.org/geo/1.0/direct";
const API_KEY = process.env.DATA_API_KEY;

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const city = searchParams.get('city');

  const res = await fetch(`${DATA_SOURCE_URL}?q=${city}&appid=${API_KEY}`);
  const data = await res.json();
  return NextResponse.json({ data });
}