import React, { useState } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Result from './components/Result';
import { getWeather } from './api/weatherAPI';

const App: React.FC = () => {
    const [weatherData, setWeatherData] = useState<any>(null);
    const [error, setError] = useState<string | null>(null);

    const handleCitySubmit = async (city: string) => {
        try {
            const data = await getWeather(city);
            const formattedData = {
                description: data.weather[0].description,
                temperature: data.main.temp,
                feelsLike: data.main.feels_like,
                windSpeed: data.wind.speed
            };
            setWeatherData(formattedData);
            setError(null); // Reset the error state if successful
        } catch (error) {
            console.error('Error fetching weather data:', error);
            setWeatherData(null);
            setError('Invalid city name. Please enter a valid city.');
        }
    };

    return (
        <div>
            <Header />
            <Form onCitySubmit={handleCitySubmit} />
            <Result weatherData={weatherData} error={error} />
        </div>
    );
};

export default App;
