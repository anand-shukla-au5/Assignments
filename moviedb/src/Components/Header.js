import React, { useState } from 'react'

function Header({ onSearch }) {
    const [searchTerm, setSearchTerm] = useState('');
    const [hasError, setHasError] = useState(false);

    const handleSearch = () => {
        if (hasError || searchTerm.trim() === '') {
            return; // Don't perform search if there's an error or search term is empty
        }

        // Call the provided onChange function with the search term
        onSearch(searchTerm);
    };

    const handleInputChange = (event) => {
        const value = event.target.value;
        setSearchTerm(value);

        // Validate search term
        const regex = /^[a-zA-Z0-9\s]+$/;
        const isValid = regex.test(value);
        setHasError(!isValid);
    };
    return (
        <header className="flex flex-col sm:flex-row m-5 justify-between h-auto mx-8 md:mx-14">
            <div className="relative">
                <input
                    type="text"
                    className={`w-full sm:w-64 px-4 py-2 text-slate-800 border ${hasError ? 'border-red-500' : 'border-gray-300'
                        } rounded-l-md focus:outline-none focus:ring-2 ${hasError ? 'ring-red-500' : 'ring-blue-500'
                        }`}
                    placeholder="Search Actors Name..."
                    onChange={handleInputChange}
                    value={searchTerm}
                />
                {hasError && (
                    <p className="absolute text-red-500 text-xs mt-1 ml-2">
                        Special characters and Empty values are not allowed.
                    </p>
                )}
                <button
                    disabled={hasError}
                    onClick={handleSearch}
                    className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-r-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    Search
                </button>
            </div>
            <img
                className="object-contain h-10 w-28 mt-4 sm:mt-0"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXS3AAd4zoVoOwt-39LhkLrvSjbl3R-uLkXg&usqp=CAU"
                alt="Logo"
            />
        </header>
    )
}

export default Header