import React, { useState } from "react";
import axios from "axios";
import TempContainer from "../TempContainer/TempContainer";
import CityContainer from "../CityContainer/CityContainer";


const SearchContainer = () => {
    const [search, setSearch] = useState('');
    const [weather, setWeather] = useState('noWeather');
    const [temp, setTemp] = useState('');
    const [tempMax, setTempMax] = useState('');
    const [tempMin, setTempMin] = useState('');
    const [humidity, setHumidity] = useState('');
    const [feelsLike, setFeelsLike] = useState('');
    const [cityName, setCityName] = useState('');
    const [main, setMain] = useState('');
    const [description, setDescription] = useState('');
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
            setTemp(response.data.list[0].main.temp);
            setTempMax(response.data.list[0].main.temp_max);
            setTempMin(response.data.list[0].main.temp_min);
            setHumidity(response.data.list[0].main.humidity);
            setFeelsLike(response.data.list[0].main.feels_like);
            setCityName(response.data.list[0].name);
            setMain(response.data.list[0].weather[0].main);
            setDescription(response.data.list[0].weather[0].description);
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

    return (
        <div>
            {
                weather === 'weather' ? (
                    <>
                        <TempContainer temp={temp} tempMax={tempMax} tempMin={tempMin} feelsLike={feelsLike} humidity={humidity} /> <CityContainer cityName={cityName} main={main} description={description} icon={icon} />
                    </>
                ) : (
                    <>
                        <p>search bar</p>
                        <form action="submit" onSubmit={handleSubmit}>
                            <input type="text" placeholder="Type City Name" value={search} onChange={(e) => handleChange(e.target.value)} />
                            <button type="submit">Search</button>
                        </form>
                        <p style={{ cursor: 'pointer' }} onClick={setWeather}>{search}</p>
                    </>
                )
            }
        </div>
    )
}

export default SearchContainer;
