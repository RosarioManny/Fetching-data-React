const API_KEY = 'be5b45c02ba4479e840175921241510'
const BASE_URL = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}`;

const show = async (city) => {
    try {
    // vv Grabs the query for the city you are searching
      const queryString = `&q=${city}`;

    // vv Adds the query and String Concotination to get the info from that url
      const res = await fetch(BASE_URL + queryString);

    // vv Gets and waits for the information
      const data = await res.json();

    // vv Displays and returns the data that was recieved 
      console.log('Data:', data);
      return data;

    // vv Error handliing
    } catch (err) {
      console.log(err);
    }
};

show('New York')