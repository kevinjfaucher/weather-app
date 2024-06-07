import React from 'react';

interface ResultProps {
    weatherData: {
        description: string;
        temperature: number;
        feelsLike: number;
        windSpeed: number;
    } | null;
    error: string | null;
}

const Result: React.FC<ResultProps> = ({ weatherData, error }) => {
    if (error) {
        return <div style={{ textAlign: 'center', margin: '20px', color: 'red' }}>{error}</div>;
    }

    if (!weatherData) {
        return null;
    }

    return (
        <div style={{ textAlign: 'center', margin: '20px' }}>
            <h2>{weatherData.description}</h2>
            <p>Current temp: {weatherData.temperature}°F</p>
            <p>Feels like: {weatherData.feelsLike}°F</p>
            <p>Wind speed: {weatherData.windSpeed} mph</p>
        </div>
    );
};

export default Result;
