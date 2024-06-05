import React, { useContext } from 'react';
import { WeatherContext } from './context/WeatherContext';
import WeatherCard from './components/WeatherCard';
import CitySelector from './components/CitySelector';

const App = () => {
  const { weatherData, selectedCity } = useContext(WeatherContext);

  return (
    <div className="app">
      <h1>Weather App</h1>
      <CitySelector />
      {weatherData ? (
        <div className="weather-cards">
          {weatherData.list.slice(0, 7).map((day, index) => (
            <WeatherCard key={index} day={day} />
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default App;