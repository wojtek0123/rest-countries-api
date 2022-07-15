import { Country } from '../../types/types';
import Card from '../Card/Card';
import LoadingSpinner from '../UI/LoadingSpinner';
import styles from './Cards.module.css';

const Cards: React.FC<{ filteredCountries: Country[]; isLoading: boolean }> = ({
	filteredCountries,
	isLoading
}) => {

	if (isLoading) {
		return <LoadingSpinner />
	}

	if (filteredCountries.length === 0) {
		return <p className={styles.message}>Not found countries!</p>;
	}

	return (
		<div className={styles.cards}>
			{filteredCountries.map((country, index) => (
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
