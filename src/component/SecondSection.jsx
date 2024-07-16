import React, { useEffect, useState } from 'react'
import '../secondsection.css'
import axios from 'axios';
import { GrLocation } from "react-icons/gr";
import cloud from '../images/cloud.webp'
const SecondSection = () => {
    const [location, setLocation] = useState('Mohali');
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [weatherData, setWeatherData] = useState(null);

    const apiKey = '98c6f5ed79c6ca5b9153c59d3bd6fc83';
    useEffect(() => {
        fetchWeatherData(location); // Fetch weather data on initial render
    }, [location]); // Fetch whenever location changes


    const fetchWeatherData = async (location) => {
        setLoading(true);
        setError(null);
        try {
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`)
            console.log(response.data)
            setWeatherData(response.data);
        } catch (error) {
            setError(error.message);
        }
    }

    const handleEnterClick = (e) => {
        if (location && e.key == 'Enter') {
            fetchWeatherData(location)
        }
    }

    const handlelocationIconClick = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(async (position) => {
                const { longitude, latitude } = position.coords;
                try {
                    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`);
                    setWeatherData(response.data);
                    console.log(response.data);
                    setLocation(response.data.name)
                } catch (error) {
                    setError(error.message)
                }
            })
        }
        else {
            setError("Geo location doesnot exists for this browser")
        }
    }

    return (
        <>
            <div className='input-field'>
                <form onSubmit={(e) => e.preventDefault()}>
                    <div className='icon'>
                        <GrLocation onClick={handlelocationIconClick} />
                    </div>
                    <input type='text' placeholder='Enter Location...' value={location} onChange={(e) => setLocation(e.target.value)} onKeyDown={handleEnterClick} />
                </form>
                {loading && <p>{loading}</p>}

            </div>

            <div className="card">
                <div className="container">
                    <div className='card-content'>
                        <p>{new Date().toUTCString()}</p>
                        <img src={cloud} />
                        {weatherData && location !== '' && <h1>{weatherData.weather[0].main}, {weatherData.main.temp} °C</h1>}
                    </div>
                </div>
            </div>
        </>
    )
}
export default SecondSection