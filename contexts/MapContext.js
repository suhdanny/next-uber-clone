import React, { useContext, useState } from 'react';

const MapContext = React.createContext();

export const useMapContext = () => useContext(MapContext);

export const MapContextProvider = ({ children }) => {
	const [inputData, setInputData] = useState({
		location: '',
		destination: '',
	});
	const [location, setLocation] = useState([]);
	const [destination, setDestination] = useState([]);

	const handleChange = e => {
		setInputData(prevInputData => {
			return {
				...prevInputData,
				[e.target.name]: e.target.value,
			};
		});
	};

	const handleSubmit = () => {
		getCoordinates(inputData.location).then(coordinates => setLocation(coordinates));
		getCoordinates(inputData.destination).then(coordinates => setDestination(coordinates));
	};

	const getCoordinates = async location => {
		const res = await fetch(
			`https://api.mapbox.com/geocoding/v5/mapbox.places/${location}.json?` +
				new URLSearchParams({
					access_token: 'pk.eyJ1Ijoic3VoZGFubnkiLCJhIjoiY2w2MDIycGtoMTkzNDNpbW05b2wzaGJ2eCJ9.QC8bL8hpj20dvLmFM7EY0Q',
					limit: 1,
				})
		);

		const data = await res.json();

		return data.features[0].center;
	};

	const value = {
		inputData,
		handleChange,
		handleSubmit,
		location,
		destination,
	};

	return <MapContext.Provider value={value}>{children}</MapContext.Provider>;
};
