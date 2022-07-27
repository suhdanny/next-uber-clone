import { useEffect } from 'react';
import tw from 'tailwind-styled-components';
import Header from '../../components/Header';
import Map from '../../components/Map';
import Action from '../../components/Action';

function Drive() {
	return (
		<Wrapper>
			<Header />
			<Map />
			<Action />
		</Wrapper>
	);
}

const Wrapper = tw.div`
	flex flex-col h-screen relative
`;

export default Drive;
