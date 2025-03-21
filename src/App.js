import React, { useState } from "react";
import axios from "axios";
import WeatherCard from "./components/WeatherCard";
import { motion } from "framer-motion";
import "./App.css";

const App = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  const API_KEY = process.env.REACT_APP_API_KEY;

  const fetchWeather = async () => {
    if (!city) return;
    try {
      const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
      );
      setWeather({
        city: data.name,
        temp: data.main.temp,
        humidity: data.main.humidity,
        wind: data.wind.speed,
      });
      setError("");
    } catch (err) {
      setError("City not found! Please try again.");
      setWeather(null);
    }
  };

  return (
    <div className="app">
      <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        Weather App
      </motion.h1>
      <div className="search">
        <input
          type="text"
          placeholder="Enter city name..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={fetchWeather}>Get Weather</button>
      </div>
      {error && <p className="error">{error}</p>}
      {weather && <WeatherCard weather={weather} />}
    </div>
  );
};

export default App;

