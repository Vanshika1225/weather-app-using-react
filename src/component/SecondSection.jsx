import React, { useState } from 'react'
import '../secondsection.css'
import axios  from 'axios';

const SecondSection = () => {
    const [location, setLocation] = useState('');
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [weatherData, setWeatherData] = useState(null);

    const apiKey = '98c6f5ed79c6ca5b9153c59d3bd6fc83';

    const fetchWeatherData = async (location) => {
        setLoading(true);
        setError(null);
        try {
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`)
            console.log(response.data)
            setWeatherData(response.data);
        } catch (error) {
            setError(error.message);
            setWeatherData('');
        }
    }

    const handleEnterClick = (e) => {
        if (location && e.key == 'Enter') {
            fetchWeatherData(location)
        }
    }
    return (
        <div >
            <form onSubmit={(e) => e.preventDefault()}>
                <input type='text' placeholder='Enter Location...' value={location} onChange={(e) => setLocation(e.target.value)} onKeyDown={handleEnterClick} />
            </form>
            {loading && <p>{loading}</p>}
            {error && <p>{error}</p>}

        </div>
    )
}

export default SecondSection