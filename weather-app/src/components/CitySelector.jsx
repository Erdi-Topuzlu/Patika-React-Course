import React, { useContext, useState } from 'react';
import { WeatherContext } from '../context/WeatherContext';

const cities = ['Istanbul', 'Ankara', 'Izmir', 'Antalya', 'Bursa'];

const CitySelector = () => {
  const { setSelectedCity } = useContext(WeatherContext);
  const [city, setCity] = useState('Istanbul');

  const handleCityChange = (event) => {
    setCity(event.target.value);
    setSelectedCity(event.target.value);
  };

  return (
    <select value={city} onChange={handleCityChange}>
      {cities.map((city, index) => (
        <option key={index} value={city}>
          {city}
        </option>
      ))}
    </select>
  );
};

export default CitySelector;