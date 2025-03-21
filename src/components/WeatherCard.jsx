import React from "react";
import { FaTemperatureHigh, FaWind, FaTint } from "react-icons/fa";
import { motion } from "framer-motion";

const WeatherCard = ({ weather }) => {
  return (
    <motion.div
      className="weather-card"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <h2>{weather.city}</h2>
      <p>
        <FaTemperatureHigh /> {weather.temp}°C
      </p>
      <p>
        <FaTint /> Humidity: {weather.humidity}%
      </p>
      <p>
        <FaWind /> Wind Speed: {weather.wind} m/s
      </p>
    </motion.div>
  );
};

export default WeatherCard;
