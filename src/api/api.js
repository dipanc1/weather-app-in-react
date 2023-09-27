import axios from "axios";

export const forecastWeather = async (city, days) => {
    const options = {
        method: 'GET',
        url: 'https://weatherapi-com.p.rapidapi.com/forecast.json',
        params: {
            q: city,
            days: days,
            lang: 'en'
        },
        headers: {
            'X-RapidAPI-Key': '',
            'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        }
    };

    try {
        const response = await axios.request(options);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}