import * as weatherService from './services/weatherService';
// ^^ This syntax imports everything (*) exported from the weatherService.js module and groups them inside a weatherService object.
import WeatherSearch from './components/WeatherSearch';
import { useState } from 'react'

const App = () => {
  const [weatherService, setWeather] = useState({})

  const fetchData = async () => {
    const data = await weatherService.show('New York');
    console.log('Data:', data);
  };

  return (
    <main>
      <h1>Weather API</h1>
      <WeatherSearch />
    </main>
  );
};

export default App;