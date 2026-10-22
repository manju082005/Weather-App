import type { ForecastData } from "../types/weather";


export default function Forecast({ data }: { data: ForecastData }) {

  const dailyForecast = data.list.filter((item) =>
    item.dt_txt.includes("3:00:00")
  );

  return (
    <div>
      <h2 className="mb-4 mt-6 text-xl font-bold">
        5-Day Weather Forecast
      </h2>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-5">
        {dailyForecast.map((item) => (
          <div
            key={item.dt_txt}
            className="rounded-lg bg-gray-500 p-3 text-white"
          >
            <p className="text-sm">{item.dt_txt}</p>

            <img
              src={`https://openweathermap.org/img/wn/${item.weather[0].icon}.png`}
              alt="Weather"
            />

            <p>Temp: {item.main.temp}°C</p>
            <p>Wind: {item.wind.speed} m/s</p>
            <p>Humidity: {item.main.humidity}%</p>
          </div>
        ))}
      </div>
    </div>
  );
}
