import { useEffect } from 'react';
import useFetchCountry from '../../hooks/use-fetch-country';
import Card from '../Card/Card';
import LoadingSpinner from '../UI/LoadingSpinner';
import styles from './Cards.module.css';

const allCountriesURL = 'https://restcountries.com/v3.1/all';

const Cards: React.FC = () => {
	const { isLoading, countries, getCountriesData } = useFetchCountry();

	useEffect(() => {
		getCountriesData(allCountriesURL);
	}, [getCountriesData]);

	if (isLoading) {
		return <LoadingSpinner />;
	}

	return (
		<div className={styles.cards}>
			{countries.map((country, index) => (
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
