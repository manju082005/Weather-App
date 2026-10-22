
import { useState } from "react";
import CitySearch from "./components/CitySearch";
import WeatherCard from "./components/WeatherCard";
import Forecast from "./components/Forecast";
import {getWeather,getForecast,getWeatherByCoords,getForecastByCoords,} from "./services/weatherService";
import type { Weather, ForecastData } from "./types/weather";
import "./index.css";

export default function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState<Weather | null>(null);
  const [forecast, setForecast] = useState<ForecastData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function searchCity() {
    if (!city.trim()) {
      setError("Please enter a city name.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const weatherData = await getWeather(city.trim());
      const forecastData = await getForecast(city.trim());

      setWeather(weatherData);
      setForecast(forecastData);
    } catch {
      setError("City not found! Please enter a valid city name.");
      setWeather(null);
      setForecast(null);
    } finally {
      setLoading(false);
    }
  }
  async function searchCurrentLocation() {
  if (!navigator.geolocation) {
    setError("Geolocation is not supported by your browser.");
    return;
  }

  navigator.geolocation.getCurrentPosition(
    async (position) => {
      const { latitude, longitude } = position.coords;

      setLoading(true);
      setError("");

      try {
        const weatherData = await getWeatherByCoords(
          latitude,
          longitude
        );

        const forecastData = await getForecastByCoords(
          latitude,
          longitude
        );

        setWeather(weatherData);
        setForecast(forecastData);
      } catch {
        setError("Unable to get weather for your current location.");
        setWeather(null);
        setForecast(null);
      } finally {
        setLoading(false);
      }
    },
    () => {
      setError("Please allow location access.");
    }
  );
}

  return (
   <main className="min-h-screen bg-sky-100 p-4 sm:p-8">
  <div className="min-h-screen w-full overflow-hidden bg-sky-100">
      
        <h1 className="bg-indigo-500 p-5 text-center text-2xl font-bold text-white">
          Weather Dashboard
        </h1>

        <div className="grid gap-8 p-6 md:grid-cols-[1fr_2fr]">
          <div>
            <h2 className="mb-4 text-lg font-bold">Search City</h2>

            <CitySearch
              city={city}
              setCity={setCity}
              onSearch={searchCity}
              onCurrentLocation={searchCurrentLocation}
            />
          </div>

          <div>
            {loading && <p>Loading weather...</p>}

            {error && (
              <p className="mt-4 text-red-600">{error}</p>
            )}

            {!loading && weather && forecast && !error && (
              <>
                <WeatherCard data={weather} />
                <Forecast data={forecast} />
              </>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
