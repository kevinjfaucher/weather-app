import axios from 'axios';

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

export const getWeather = async (city: string) => {
    const response = await axios.get(BASE_URL, {
        params: {
            q: city,
            appid: API_KEY,
            units: 'imperial'
        }
    });
    return response.data;
};
