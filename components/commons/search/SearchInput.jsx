import React, { useState } from 'react';

const SearchInput = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleInputChange = (e) => {
        setQuery(e.target.value);
    };

    const handleSearch = () => {
        if (onSearch) {
            onSearch(query);
        }
    };

    return (
        <div className="flex items-center justify-center p-4">
            <input
                type="text"
                value={query}
                onChange={handleInputChange}
                placeholder="Arreglos, Flores, Ramilletes..."
                className="w-full max-w-md p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button
                onClick={handleSearch}
                className="p-2 bg-primary text-white rounded-r-md hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-primary"
            >
                Buscar
            </button>
        </div>
    );
};

export default SearchInput;
