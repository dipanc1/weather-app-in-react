import React, { useState } from "react";
import axios from "axios";

const getWeather = ({ search }) => {
    let config = {
        headers: {
            'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
            'x-rapidapi-key': 'f5962936d7msh78d3661e49607d2p1714f6jsnf0bb042b4319'
        },
        params: {
            q: { search },
            cnt: '1',
        }
    }

    axios.get('https://community-open-weather-map.p.rapidapi.com/find', config).then(response => {
        console.log(response.data)
    })
        .catch(function (error) {
            console.log(error);
        })
}


const SearchContainer = () => {
    const [search, setSearch] = useState('');

    const handleChange = (e) => {
        setSearch(e)
        getWeather();
    }

    return (
        <div>
            <p>search bar</p>
            <input type="text" placeholder="Type City Name" value={search} onChange={(e) => handleChange(e.target.value)} />
            <p>{search}</p>
        </div>
    )
}

export default SearchContainer;
