// F = Function
// I = import
// R = Return 
// E = Export
import { useState } from 'react' // I.

const WeatherSearch = (props) => { // F.
    const [city, setCity] = useState('')

    const handleSubmit = (e) => {
        // Prevents form default action
        e.preventDefault();
        props.fetchData(city)
        setCity('')
    };

    return ( // R.
        <section>
            <h2>Search</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="city">Enter a city:</label>
                <input
                id="city"
                type="text"
                name="city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                />
                <button type="submit">Search</button>
            </form>
        </section>
    ) 
}

export default WeatherSearch // E.