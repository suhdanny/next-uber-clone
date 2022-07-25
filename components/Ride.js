import tw from 'tailwind-styled-components';
import Car from './Car';
import { carList } from '../data/carList';

const Ride = () => {
	const CarElements = carList.map((car, idx) => {
		return <Car key={idx} img={car.imgUrl} service={car.service} multiplier={car.multiplier} />;
	});

	return <Wrapper>{CarElements}</Wrapper>;
};

const Wrapper = tw.div`
    flex-1 basis-0 overflow-y-scroll mb-4
`;

export default Ride;
