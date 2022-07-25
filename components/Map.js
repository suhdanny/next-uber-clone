import { useEffect, useState } from 'react';
import tw from 'tailwind-styled-components';
import mapboxgl from '!mapbox-gl';

const accessToken = 'pk.eyJ1Ijoic3VoZGFubnkiLCJhIjoiY2w2MDIycGtoMTkzNDNpbW05b2wzaGJ2eCJ9.QC8bL8hpj20dvLmFM7EY0Q';

mapboxgl.accessToken = accessToken;

const Map = () => {
	const getCoordinates = async location => {
		const res = await fetch(
			`https://api.mapbox.com/geocoding/v5/mapbox.places/${location}.json?` +
				new URLSearchParams({
					access_token: accessToken,
					limit: 1,
				})
		);
		const data = await res.json();

		return data.features[0].center;
	};

	const addMarker = (map, coordinates) => {
		const marker = new mapboxgl.Marker().setLngLat(coordinates).addTo(map);
	};

	useEffect(() => {
		const map = new mapboxgl.Map({
			container: 'map',
			style: 'mapbox://styles/mapbox/light-v10',
			center: [-79.3832, 43.6532],
			zoom: 13,
		});
	});

	return <Wrapper id='map'></Wrapper>;
};

const Wrapper = tw.div`
    flex-1
`;

export default Map;
