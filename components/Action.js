import tw from 'tailwind-styled-components';
import { useState } from 'react';
import { useMapContext } from '../contexts/MapContext';

const Action = () => {
	const [locationInputFocus, setLocationInputFocus] = useState(false);
	const [destinationInputFocus, setDestinationInputFocus] = useState(false);
	const { inputData, handleChange, handleSubmit } = useMapContext();

	const headingElement = () => {
		if (locationInputFocus) {
			return <Heading>Where to pick you up?</Heading>;
		} else if (destinationInputFocus) {
			return <Heading>Where to drop you off?</Heading>;
		}
		return <Heading>Where would you like to go?</Heading>;
	};

	return (
		<Wrapper>
			{headingElement()}
			<InputContainer>
				<Input
					placeholder='Enter your location'
					onFocus={() => setLocationInputFocus(true)}
					onBlur={() => setLocationInputFocus(false)}
					onChange={handleChange}
					name='location'
					value={inputData.location}
				/>
				<Input
					placeholder='Enter your destination'
					onFocus={() => setDestinationInputFocus(true)}
					onBlur={() => setLocationInputFocus(false)}
					onChange={handleChange}
					name='destination'
					value={inputData.destination}
				/>
				<Button onClick={handleSubmit}>Confirm Locations</Button>
			</InputContainer>
			<RideContainer></RideContainer>
		</Wrapper>
	);
};

const Wrapper = tw.div`
    absolute bg-white z-10 h-[80vh] w-[30vw] rounded left-[5%] top-[12%] p-5 flex flex-col
`;

const Heading = tw.div`
    text-2xl text-black font-bold mb-3
`;

const InputContainer = tw.div`
    flex flex-col gap-3
`;

const Input = tw.input`
    h-12 bg-gray-100 focus:outline-none focus:border-2 focus:border-black pl-3
`;

const Button = tw.button`
    h-10 bg-black text-white
`;

const RideContainer = tw.div`
    flex-1 mt-3 bg-gray-100
`;

export default Action;
