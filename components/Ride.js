import { useState, useEffect } from 'react';
import tw from 'tailwind-styled-components';
import Car from './Car';
import { carList } from '../data/carList';
import { useMapContext } from '../contexts/MapContext';

const Ride = () => {
	const [carData, setCarData] = useState(carList);
	const { rideDuration } = useMapContext();

	const toggleSelect = id => {
		setCarData(prevCarData => {
			return prevCarData.map(car => {
				if (car.id !== id && car.selected) {
					return { ...car, selected: false };
				} else if (car.id === id) {
					return { ...car, selected: !car.selected };
				} else {
					return car;
				}
			});
		});
	};

	const CarElements = carData.map(car => {
		return (
			<Car
				key={car.id}
				img={car.imgUrl}
				service={car.service}
				multiplier={car.multiplier}
				selected={car.selected}
				toggleSelect={() => toggleSelect(car.id)}
				limit={car.limit}
				duration={rideDuration}
			/>
		);
	});

	return <Wrapper>{CarElements}</Wrapper>;
};

const Wrapper = tw.div`
    flex-1 basis-0 overflow-y-scroll mb-4
`;

export default Ride;
