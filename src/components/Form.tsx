import React, { useState } from 'react';

interface FormProps {
    onCitySubmit: (city: string) => void;
}

const Form: React.FC<FormProps> = ({ onCitySubmit }) => {
    const [city, setCity] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onCitySubmit(city);
    };

    return (
        <form onSubmit={handleSubmit} style={{ display: 'flex', justifyContent: 'center', margin: '20px' }}>
            <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Enter your city"
                style={{ padding: '10px', fontSize: '16px' }}
            />
            <button type="submit" style={{ padding: '10px 20px', fontSize: '16px' }}>Search</button>
        </form>
    );
};

export default Form;
