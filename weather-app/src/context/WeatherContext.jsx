import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [selectedCity, setSelectedCity] = useState('Istanbul');

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/forecast`,
          {
            params: {
              q: selectedCity,
              appid: import.meta.env.VITE_OPENWEATHER_API_KEY,
              units: 'metric',
            },
          }
        );
        setWeatherData(response.data);
      } catch (error) {
        console.error('Error fetching the weather data:', error);
      }
    };
    fetchWeather();
  }, [selectedCity]);

  return (
    <WeatherContext.Provider value={{ weatherData, selectedCity, setSelectedCity }}>
      {children}
    </WeatherContext.Provider>
  );
};