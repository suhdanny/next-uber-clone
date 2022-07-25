import { useEffect } from 'react';
import tw from 'tailwind-styled-components';
import Header from './components/Header';
import Map from './components/Map';

export default function Home() {
	return (
		<Wrapper>
			<Header />
			<Map />
		</Wrapper>
	);
}

const Wrapper = tw.div`
	flex flex-col h-screen
`;
