import tw from 'tailwind-styled-components';
import { BsFillPeopleFill } from 'react-icons/bs';

const Car = ({ img, service, multiplier, selected, toggleSelect, limit, duration }) => {
	const price = '$' + (duration * multiplier).toFixed(2);

	return (
		<Wrapper onClick={toggleSelect} $selected={selected}>
			<CarImage src={img} />
			<CarDetails>
				<ServiceDetail>
					<Service>{service}</Service>
					{selected && (
						<>
							<BsFillPeopleFill style={{ marginRight: 3 }} />
							<Limit>{limit}</Limit>
						</>
					)}
				</ServiceDetail>
				<Time>5 min away</Time>
			</CarDetails>
			<Price>{price}</Price>
		</Wrapper>
	);
};

const Wrapper = tw.div`
    flex p-4 items-center cursor-pointer
	${p => (p.$selected ? 'border-2 border-gray-300' : 'border-0')}
`;

const CarImage = tw.img`
    h-24 mr-4
`;

const CarDetails = tw.div`
    flex-1 flex flex-col justify-center
`;

const ServiceDetail = tw.div`
    flex items-center
`;

const Service = tw.div`
	font-medium text-lg mr-2
`;

const Limit = tw.span`
	text-sm
`;

const Time = tw.div`
    text-blue-400 text-sm
`;

const Price = tw.div`
    font-medium
`;

export default Car;
