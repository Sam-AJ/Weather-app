import React, { useState } from 'react';

export const SearchBar = ({ newLocation }) => {

    const [city, setCity] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(city);
        if (city === '' || !city) return;

        newLocation(city);
    }

    return (
        <nav className='nav'>
            <a href="/" className='site-title'>Weather App</a>

            <form onSubmit={onSubmit}>
                <div className="searchInput">
                    <input
                        type="text"
                        placeholder='Tiempo en tu ciudad'
                        onChange={(e) => setCity(e.target.value)}
                    />

                    <div className='searchIcon'>
                        <button type='submit'><i className="fa-solid fa-magnifying-glass"></i></button>
                    </div>
                </div>
            </form>
        </nav>
    )
}