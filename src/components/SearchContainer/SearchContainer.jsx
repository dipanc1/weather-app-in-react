import React, { useState } from "react";
import axios from "axios";

const GetWeather = ({ search }) => {
    search = search.toLowerCase();
    let config = {
        headers: {
            'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
            'x-rapidapi-key': 'f5962936d7msh78d3661e49607d2p1714f6jsnf0bb042b4319'
        },
        params: {
            q: search,
            cnt: '1',
        }
    }

    axios.get('https://community-open-weather-map.p.rapidapi.com/find', config).then(response => {
        console.log(response.data.list[0]);
    })
        .catch(function (error) {
            console.log(error);
        })
}

const TempContainer = ({ temp, tempMax, tempMin, humidity, feelsLike }) => {

    return (
        <div className="tempContainer">
            <ul>
                <li>{temp}</li>
                <li>{tempMax}</li>
                <li>{tempMin}</li>
                <li>{humidity}</li>
                <li>{feelsLike}</li>
            </ul>
        </div>
    )
}

const SearchContainer = () => {
    const [search, setSearch] = useState('');
    const [weather, setWeather] = useState('');


    const handleChange = (e) => {
        setSearch(e);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        GetWeather({ search });
    }

    return (
        <div>
            {weather ? <TempContainer /> :
                (
                    <>
                        <p>search bar</p>
                        <form action="submit" onSubmit={handleSubmit}>
                            <input type="text" placeholder="Type City Name" value={search} onChange={(e) => handleChange(e.target.value)} />
                            <button type="submit">Search</button>
                        </form>
                        <p onClick={setWeather}>{search}</p>
                    </>
                )
            }
        </div>
    )
}

export default SearchContainer;
