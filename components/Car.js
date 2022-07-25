import tw from 'tailwind-styled-components';

const Car = ({ img, service, multiplier }) => {
	return (
		<Wrapper>
			<CarImage src={img} />
			<CarDetails>
				<Service>{service}</Service>
				<Time>5 min away</Time>
			</CarDetails>
			<Price>$24.00</Price>
		</Wrapper>
	);
};

const Wrapper = tw.div`
    flex p-4 items-center cursor-pointer 
`;

const CarImage = tw.img`
    h-24 mr-4
`;

const CarDetails = tw.div`
    flex-1 flex flex-col justify-center
`;

const Service = tw.div`
    font-medium text-lg
`;

const Time = tw.div`
    text-blue-400 text-sm
`;

const Price = tw.div`
    font-medium
`;

export default Car;
