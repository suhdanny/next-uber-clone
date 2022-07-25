import { useEffect } from 'react';
import tw from 'tailwind-styled-components';
import mapboxgl from '!mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1Ijoic3VoZGFubnkiLCJhIjoiY2w2MDIycGtoMTkzNDNpbW05b2wzaGJ2eCJ9.QC8bL8hpj20dvLmFM7EY0Q';

const Map = () => {
	useEffect(() => {
		const map = new mapboxgl.Map({
			container: 'map',
			style: 'mapbox://styles/mapbox/light-v10',
			center: [-79.3832, 43.6532],
			zoom: 13,
		});
	}, []);

	return <Wrapper id='map'>Map</Wrapper>;
};

const Wrapper = tw.div`
    flex-1
`;

export default Map;
