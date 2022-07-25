import { useEffect, useState } from 'react';
import tw from 'tailwind-styled-components';
import mapboxgl from '!mapbox-gl';
import { useMapContext } from '../contexts/MapContext';

mapboxgl.accessToken = 'pk.eyJ1Ijoic3VoZGFubnkiLCJhIjoiY2w2MDIycGtoMTkzNDNpbW05b2wzaGJ2eCJ9.QC8bL8hpj20dvLmFM7EY0Q';

const Map = () => {
	const { location, destination } = useMapContext();

	const addMarker = (map, coordinates) => {
		const marker = new mapboxgl.Marker({ color: 'black' }).setLngLat(coordinates).addTo(map);
	};

	useEffect(() => {
		const map = new mapboxgl.Map({
			container: 'map',
			style: 'mapbox://styles/mapbox/light-v10',
			center: [-79.3832, 43.6532],
			zoom: 13,
		});

		if (location.length > 0 && destination.length > 0) {
			addMarker(map, location);
			addMarker(map, destination);
		}
	}, [location, destination]);

	return <Wrapper id='map'></Wrapper>;
};

const Wrapper = tw.div`
    flex-1
`;

export default Map;
