
import axios from "axios";
import type { Weather, ForecastData } from "../types/weather";

const KEY = "a5ec3a1e22ef8f5b54e3f2a9df247a26";
const URL = "https://api.openweathermap.org/data/2.5";

export async function getWeather(city: string): Promise<Weather> {
  const response = await axios.get(`${URL}/weather`, {
    params: {
      q: city,
      appid: KEY,
      units: "metric",
    },
  });

  return response.data;
}

export async function getForecast(city: string): Promise<ForecastData> {
  const response = await axios.get(`${URL}/forecast`, {
    params: {
      q: city,
      appid: KEY,
      units: "metric",
    },
  });
  

  return response.data;
}
export const getWeatherByCoords = async (
  lat: number,
  lon: number
): Promise<Weather> => {
  const response = await axios.get<Weather>(
    `${URL}/weather`,
    {
      params: {
        lat,
        lon,
        appid: KEY,
        units: "metric",
      },
    }
  );

  return response.data;
};

export const getForecastByCoords = async (
  lat: number,
  lon: number
): Promise<ForecastData> => {
  const response = await axios.get<ForecastData>(
    `${URL}/forecast`,
    {
      params: {
        lat,
        lon,
        appid: KEY,
        units: "metric",
      },
    }
  );

  return response.data;
};