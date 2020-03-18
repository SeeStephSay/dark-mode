import React, { useState } from 'react';

const useLocalStorage = (key, initialValue) => {
	const [ storedValue, setStoredValue ] = useState(() => {
		const item = window.localStorage.getItem(key);

		{
			/* If the item is true, then return the item parsed with JSON. Else, return the initial value. 
    return expression ? true expression : false expression */
		}

		return item ? JSON.parse(item) : initialValue;
	});

	const setValue = (value) => {
		setStoredValue(value);
		window.localStorage.setItem(key, JSON.stringify(value));
	};
	return [ storedValue, setValue ];
};

export default useLocalStorage;
