import React, { useState } from 'react';
import { getEnvironments } from '../helpers/getEnvironments';
import { SearchBar } from './SearchBar';
import { WeatherCard } from './WeatherCard';

export const WeatherInfo = () => {

    const { VITE_APIKEY } = getEnvironments();

    const [weather, setWeather] = useState(null);
    const [forecast, setForecast] = useState(null);
    const [location, setLocation] = useState('');
    const [loading, setLoading] = useState(false);
    const [show, setShow] = useState(false);

    const getLocation = async (location) => {
        setLoading(true);
        setLocation(location);

        // Weather api call

        const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${VITE_APIKEY}&lang=es&units=metric`;

        await fetch(weatherUrl).then(response => {
            if (!response.ok) throw { response }
            return response.json();
        }).then(weatherData => {
            console.log(weatherData);
            setWeather(weatherData);
        }).catch(error => {
            console.log(error);
            setLoading(false);
            setShow(false);
        });

        // Forecast api call

        const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${VITE_APIKEY}&lang=es&units=metric`;

        await fetch(forecastUrl).then(response => {
            if (!response.ok) throw { response }
            return response.json();
        }).then(forecastData => {
            console.log(forecastData);
            setForecast(forecastData);

            setLoading(false);
            setShow(true);

        }).catch(error => {
            console.log(error);
            setLoading(false);
            setShow(false);
        });
    }

    return (
        <>
            <SearchBar newLocation={getLocation} />

            <WeatherCard showData={show} loadingData={loading} weather={weather} forecast={forecast} />
        </>
    )
}