import { useContext } from 'react';

const MapContext = React.createContext();

export const useMapContext = () => useContext(MapContext);

export const MapContextProvider = ({ children }) => {
	const [inputData, setInputData] = useState({
		location: '',
		destination: '',
	});

	const handleChange = e => {
		setInputData(prevInputData => {
			return {
				...prevInputData,
				[e.target.name]: e.target.value,
			};
		});
	};

	const value = {
		inputData,
		handleChange,
	};

	return <MapContext.Provider value={value}>{children}</MapContext.Provider>;
};
