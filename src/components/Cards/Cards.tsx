import { useCallback, useEffect, useState } from 'react';
import Card from '../Card/Card';
import LoadingSpinner from '../UI/LoadingSpinner';
import styles from './Cards.module.css';

type Currency = {
	name: string;
	symbol: string;
};

type Flag = {
	png: string;
	svg: string;
};

type Country = {
	name: {
		common: string;
		nativeName: string[];
	};
	region: string;
	population: number;
	subRegion: string;
	capital: string;
	currencies: Currency[];
	languages: string[];
	borderCountries?: string[];
	flags: {
    png: string,
    svg: string
  };
};

const Cards: React.FC = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [coutries, setCoutries] = useState<Country[]>([]);

	const getCountriesData = useCallback(async () => {
		setIsLoading(true);
		try {
			const response = await fetch('https://restcountries.com/v3.1/all');
			if (!response.ok) {
				throw new Error('Could fetch a data!');
			}
			const data = await response.json();
			// console.log(data);
			setIsLoading(false);

			data.forEach((country: Country) => {
				setCoutries((prevState) => [...prevState, country]);
			});
		} catch (error) {
			setIsLoading(false);

			console.error(error);
		}
	}, []);

	useEffect(() => {
		getCountriesData();
	}, [getCountriesData]);

	console.log(coutries);

	return (
		<div className={styles.cards}>
			{isLoading && <LoadingSpinner />}
			{!isLoading &&
				coutries.map((country, index) => (
					<Card
						key={index}
						name={country.name.common}
						population={country.population}
						region={country.region}
						capital={country.capital}
						flagImage={country.flags.png}
					/>
				))}
		</div>
	);
};

export default Cards;
