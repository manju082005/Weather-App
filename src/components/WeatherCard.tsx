
import type { Weather } from "../types/weather";

export default function WeatherCard({ data }: { data: Weather }) {
  return (
    <div className="flex items-center justify-between rounded-lg bg-indigo-500 p-5 text-white">
      <div>
        <h2 className="mb-4 text-xl font-bold">{data.name}</h2>
        <p>Temperature: {data.main.temp}°C</p>
        <p>Wind: {data.wind.speed} m/s</p>
        <p>Humidity: {data.main.humidity}%</p>
      </div>

      <div className="text-center">
        <img
          src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
          alt="Weather"
        />  
        <p className="capitalize">{data.weather[0].description}</p>
      </div>
    </div>
  );
}
