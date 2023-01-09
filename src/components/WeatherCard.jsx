import React from 'react';
import { Spinner } from './Spinner';

export const WeatherCard = ({ showData, loadingData, weather, forecast }) => {

    const today = new Date().toLocaleDateString();

    console.log(today);

    if (loadingData) {
        return <Spinner />
    }

    return (
        <div className="mt-5">
            {
                showData === true ? (
                    <div className="container">
                        <div className="card mb-3 mx-auto bg-dark text-light">
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <h3 className='card-title'>{weather.name}</h3>
                                    <p className='card-date'>{today}</p>
                                    <h1 className='card-temp'>{weather.main.temp.toFixed(1)}°C</h1>
                                    <p className="card-desc"><img src={`https://openweathermap.org/img/w/${weather.weather[0].icon}.png`} alt="icon" />{weather.weather[0].description}</p>
                                    <img src="https://images.pexels.com/photos/1707820/pexels-photo-1707820.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className='img-fluid rounded-start' alt="Ciudad" />
                                </div>

                                <div className="col-md-8">
                                    <div className="card-body text-start mt2">
                                        <h5 className='card-text'>Temperatura máxima: {weather.main.temp_max.toFixed(1)}°C</h5>
                                        <h5 className='card-text'>Temperatura mínima: {weather.main.temp_min.toFixed(1)}°C</h5>
                                        <h5 className='card-text'>Sensación térmica: {weather.main.feels_like.toFixed(1)}°C</h5>
                                        <h5 className='card-text'>Humedad: {weather.main.humidity.toFixed(1)}%</h5>
                                        <h5 className='card-text'>Velocidad del viento: {weather.wind.speed}m/s</h5>
                                    </div>

                                    <hr />

                                    <div className="row mt-4">
                                        <div className="col">
                                            <p>{`${forecast.list[0].dt_txt.substring(8, 10)}/${forecast.list[0].dt_txt.substring(5, 7)}/${forecast.list[0].dt_txt.substring(0, 4)} ${forecast.list[0].dt_txt.substring(11, 13)}h`}</p>
                                            <p className='description'>
                                                <img src={`https://openweathermap.org/img/w/${forecast.list[0].weather[0].icon}.png`} alt="icon" />
                                                {forecast.list[0].weather[0].description}
                                            </p>
                                            <p className="temp">{forecast.list[0].main.temp.toFixed(1)}°C</p>
                                        </div>

                                        <div className="col">
                                            <p>{`${forecast.list[1].dt_txt.substring(8, 10)}/${forecast.list[1].dt_txt.substring(5, 7)}/${forecast.list[1].dt_txt.substring(0, 4)} ${forecast.list[1].dt_txt.substring(11, 13)}h`}</p>
                                            <p className='description'>
                                                <img src={`https://openweathermap.org/img/w/${forecast.list[1].weather[0].icon}.png`} alt="icon" />
                                                {forecast.list[1].weather[0].description}
                                            </p>
                                            <p className="temp">{forecast.list[1].main.temp.toFixed(1)}°C</p>
                                        </div>

                                        <div className="col">
                                            <p>{`${forecast.list[2].dt_txt.substring(8, 10)}/${forecast.list[2].dt_txt.substring(5, 7)}/${forecast.list[2].dt_txt.substring(0, 4)} ${forecast.list[2].dt_txt.substring(11, 13)}h`}</p>
                                            <p className='description'>
                                                <img src={`https://openweathermap.org/img/w/${forecast.list[2].weather[0].icon}.png`} alt="icon" />
                                                {forecast.list[2].weather[0].description}
                                            </p>
                                            <p className="temp">{forecast.list[2].main.temp.toFixed(1)}°C</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <h2 className="text-light">Sin datos</h2>
                )
            }
        </div>
    )
}