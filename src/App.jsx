import * as weatherService from './services/weatherService';
// ^^ This syntax imports everything (*) exported from the weatherService.js module 
// and groups them inside a weatherService object.

const App = () => {
  const fetchData = async () => {
    const data = await weatherService.show('New York');
    console.log('Data:', data);
  };

  return (
    <main>
      <h1>Weather API</h1>
      <button onClick={fetchData}>Fetch Weather Data</button>
    </main>
  );
};

export default App;