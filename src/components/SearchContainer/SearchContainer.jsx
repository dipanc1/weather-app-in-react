import React, { useState } from "react";
import axios from "axios";
import TempContainer from "../TempContainer/TempContainer";
import './searchContainer.css';


const SearchContainer = () => {
    const [search, setSearch] = useState('');
    const [weather, setWeather] = useState('noWeather');
    const [temp, setTemp] = useState('');
    const [tempMax, setTempMax] = useState('');
    const [tempMin, setTempMin] = useState('');
    const [humidity, setHumidity] = useState('');
    const [feelsLike, setFeelsLike] = useState('');
    const [cityName, setCityName] = useState('');
    const [id, setId] = useState('');
    const [icon, setIcon] = useState('');

    const GetWeather = ({ search }) => {
        search = search.toLowerCase();
        let config = {
            headers: {
                'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
                'x-rapidapi-key': process.env.REACT_APP_API_KEY
            },
            params: {
                q: search,
                cnt: '1',
            }
        }

        axios.get('https://community-open-weather-map.p.rapidapi.com/find', config).then(response => {
            console.log(response.data.list[0]);
            setWeather('weather');
            setTemp((response.data.list[0].main.temp - 273.15).toFixed(1));
            setTempMax((response.data.list[0].main.temp_max - 273.15).toFixed(1));
            setTempMin((response.data.list[0].main.temp_min - 273.15).toFixed(1));
            setHumidity(response.data.list[0].main.humidity);
            setFeelsLike((response.data.list[0].main.feels_like - 273.15).toFixed(1));
            setCityName(response.data.list[0].name);
            setId(response.data.list[0].weather[0].id);
            setIcon(response.data.list[0].weather[0].icon);

        })
            .catch(function (error) {
                console.log(error);
                alert(error);
                setWeather('noWeather');
            });
    };


    const handleChange = (e) => {
        setSearch(e);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        GetWeather({ search });
    }

    const handleBack = () => {
        setSearch('');
        setWeather('noWeather');
    }

    return (
        <div>
            {
                weather === 'weather' ? (
                    <div className="results">
                        <button className="backButton" onClick={handleBack}>
                            Back
                        </button>
                        <TempContainer temp={temp} tempMax={tempMax} tempMin={tempMin} feelsLike={feelsLike} humidity={humidity} cityName={cityName} id={id} icon={icon} />
                    </div>
                ) : (
                    <div className="container">
                        <h1 className="heading">Search Here</h1>
                        <form action="submit" onSubmit={handleSubmit}>
                            <input type="text" placeholder="Type City Name" value={search} onChange={(e) => handleChange(e.target.value)} className="input" />
                            <button type="submit" className="searchButton">Search</button>
                        </form>
                    </div>
                )
            }
        </div>
    )
}

export default SearchContainer;
