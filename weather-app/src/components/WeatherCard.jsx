import React from 'react';
import { WiDaySunny, WiCloud, WiRain, WiSnow } from 'react-icons/wi';

const WeatherCard = ({ day }) => {
  const date = new Date(day.dt * 1000);
  const dayName = date.toLocaleDateString('tr-TR', { weekday: 'long' });
  
  const weatherIcons = {
    '01d': <WiDaySunny size={48} />,
    '01n': <WiDaySunny size={48} />,
    '02d': <WiCloud size={48} />,
    '02n': <WiCloud size={48} />,
    '03d': <WiCloud size={48} />,
    '03n': <WiCloud size={48} />,
    '04d': <WiCloud size={48} />,
    '04n': <WiCloud size={48} />,
    '09d': <WiRain size={48} />,
    '09n': <WiRain size={48} />,
    '10d': <WiRain size={48} />,
    '10n': <WiRain size={48} />,
    '11d': <WiRain size={48} />,
    '11n': <WiRain size={48} />,
    '13d': <WiSnow size={48} />,
    '13n': <WiSnow size={48} />,
    '50d': <WiCloud size={48} />,
    '50n': <WiCloud size={48} />
  };

  const weatherIcon = weatherIcons[day.weather[0].icon];

  return (
    <div className="weather-card">
      <h3>{dayName}</h3>
      {weatherIcon}
      <p>{day.weather[0].description}</p>
      <p>Max: {Math.round(day.main.temp_max)}°C</p>
      <p>Min: {Math.round(day.main.temp_min)}°C</p>
    </div>
  );
};

export default WeatherCard;