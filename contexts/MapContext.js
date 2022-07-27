import React, { useContext, useState, useEffect } from 'react';

const MapContext = React.createContext();

export const useMapContext = () => useContext(MapContext);

export const MapContextProvider = ({ children }) => {
	const [inputData, setInputData] = useState({
		location: '',
		destination: '',
	});
	const [location, setLocation] = useState([]);
	const [destination, setDestination] = useState([]);
	const [rideDuration, setRideDuration] = useState(0);
	const [routeCoordinates, setRouteCoordinates] = useState([]);

	useEffect(() => {
		if (location.length > 0 && destination.length > 0) {
			fetchDirection(location, destination);
		}
	}, [location, destination]);

	const handleChange = e => {
		setInputData(prevInputData => {
			return {
				...prevInputData,
				[e.target.name]: e.target.value,
			};
		});
	};

	const calculateCoordinates = () => {
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

	const fetchDirection = async (loc, des) => {
		const res = await fetch(
			`https://api.mapbox.com/directions/v5/mapbox/driving/${loc[0]},${loc[1]};${des[0]},${des[1]}?` +
				new URLSearchParams({
					access_token: 'pk.eyJ1Ijoic3VoZGFubnkiLCJhIjoiY2w2MDIycGtoMTkzNDNpbW05b2wzaGJ2eCJ9.QC8bL8hpj20dvLmFM7EY0Q',
					geometries: 'geojson',
				})
		);
		const data = await res.json();
		setRideDuration(data?.routes[0].duration / 60);
		setRouteCoordinates(data?.routes[0].geometry.coordinates);
	};

	const value = {
		inputData,
		handleChange,
		calculateCoordinates,
		location,
		destination,
		rideDuration,
		routeCoordinates,
	};

	return <MapContext.Provider value={value}>{children}</MapContext.Provider>;
};
