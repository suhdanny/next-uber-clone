import { useEffect, useState } from 'react';
import tw from 'tailwind-styled-components';
import mapboxgl from '!mapbox-gl';
import { useMapContext } from '../contexts/MapContext';

mapboxgl.accessToken = 'pk.eyJ1Ijoic3VoZGFubnkiLCJhIjoiY2w2MDIycGtoMTkzNDNpbW05b2wzaGJ2eCJ9.QC8bL8hpj20dvLmFM7EY0Q';

const Map = () => {
	const { location, destination, routeCoordinates } = useMapContext();

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
			map.fitBounds([location, destination], {
				padding: { left: 800, right: 300 },
			});
			map.on('load', () => {
				map.addSource('route', {
					type: 'geojson',
					data: {
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'LineString',
							coordinates: routeCoordinates,
						},
					},
				});

				map.addLayer({
					id: 'route',
					type: 'line',
					source: 'route',
					layout: {
						'line-join': 'round',
						'line-cap': 'round',
					},
					paint: {
						'line-color': 'black',
						'line-width': 5,
					},
				});
			});
		}
	}, [location, destination, routeCoordinates]);

	return <Wrapper id='map'></Wrapper>;
};

const Wrapper = tw.div`
    flex-1
`;

export default Map;
