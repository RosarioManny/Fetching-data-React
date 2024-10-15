import * as weatherService from './services/weatherService.js';
// ^^ This syntax imports everything (*) exported from the weatherService.js module and groups them inside a weatherService object.
import WeatherSearch from './components/WeatherSearch.jsx';
import { useState, useEffect } from 'react'
import WeatherDetails from './components/WeatherDetails';

const App = () => {
  const [weather, setWeather] = useState({});
  
  useEffect(() => { 
    const fetchDefaultData = async () => {
      const data = await weatherService.show('New York');
      const newWeatherState = {
        location: data.location.name,
        temperature: data.current.temp_f,
        condition: data.current.condition.text,
      }
      setWeather(newWeatherState)
    }
    fetchDefaultData();
  }, 
  []
  )

  const fetchData = async (city) => {
    const data = await weatherService.show(city);
    const newWeatherState = {
      location: data.location.name,
      temperature: data.current.temp_f,
      condition: data.current.condition.text,
    };
    setWeather(newWeatherState);
  };

  return (
    <main>
      <h1>Weather API</h1>
      <WeatherSearch fetchData={fetchData}/>
      <WeatherDetails weather={weather} />
    </main>
  );
};

export default App;