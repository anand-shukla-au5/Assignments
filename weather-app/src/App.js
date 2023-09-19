import React, { useState } from 'react'
function App() {
  const [location, setLocation] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const apiKey = "YOUR_OPENWEATHERMAP_API_KEY";

  const fetchWeatherData = async () => {
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`);
      setWeatherData(response.data);
      setError(null);
    } catch (err) {
      setError("Location not found or API error");
      setWeatherData(null);
    }
  };

  return (
    <div className="flex items-center h-screen bg-teal-500">
      <main className="bg-gray-300 p-4 rounded-lg mx-auto w-96">
        <header className="App-header">
          <h1 className=" text-lg">Weather App</h1>
        </header>
        <hr className=" border-t-2 border-blue-500 mt-3" />
        <section>
          <input
            type="text"
            placeholder="Enter location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="border p-2 rounded-lg mb-2"
          />
          <button
            onClick={fetchWeatherData}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg"
          >
            Get Weather
          </button>
          {error && <p className="text-red-500 mt-2">{error}</p>}
        </section>
      </main>
    </div>
  );
}

export default App;
