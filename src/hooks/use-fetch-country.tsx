import { useCallback, useState } from 'react';
import { Country } from '../types/types';

const useFetchCountry = () => {
	const [countries, setCoutries] = useState<Country[]>([]);
	const [isLoading, setIsLoading] = useState(false);

	const getCountriesData = useCallback(async (url: string) => {
		setIsLoading(true);
		try {
			const response = await fetch(url);
			if (!response.ok) {
				throw new Error('Could fetch a data!');
			}
			const data = await response.json();
			setIsLoading(false);

			data.forEach((country: Country) => {
				setCoutries((prevState) => [...prevState, country]);
			});
		} catch (error) {
			setIsLoading(false);
			console.error(error);
		}
	}, []);

	return {
		isLoading,
		countries,
    getCountriesData
	};
};

export default useFetchCountry;
