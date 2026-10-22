type CitySearchProps = {
  city: string;
 setCity: (city: string) => void;
  onSearch: () => void;
  onCurrentLocation: () => void;
};

function CitySearch({ city, setCity, onSearch,onCurrentLocation }: CitySearchProps) {
  return (
    <div className="flex flex-col gap-3">
  
  <div className="flex gap-2">
    <input
      type="text"
      value={city}
      onChange={(e) => setCity(e.target.value)}
      placeholder="Enter city name"
      className="flex-1 rounded-lg border p-3"
    />

    <button
      type="button"
      onClick={onSearch}
      className="rounded-lg bg-indigo-500 px-5 py-2 text-white"
    >
      Search
    </button>
  </div>

  <button
    type="button"
    onClick={onCurrentLocation}
    className="w-fit rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
  >
    Use My Current Location
  </button>
</div>
  );
}

export default CitySearch;