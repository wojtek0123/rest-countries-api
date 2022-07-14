import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useFetchCountry from '../../hooks/use-fetch-country';
import { Country } from '../../types/types';
import LoadingSpinner from '../UI/LoadingSpinner';
import styles from './CountryDetail.module.css';
import BorderCountires from './BorderCountries/BorderCountries';
import BackButton from './BackButton/BackButton';
import Content from './TextContent/TextContent';

const countryNameFromCodedFormUrl = 'https://restcountries.com/v3.1/alpha/';

const CountryDetail: React.FC = () => {
	const { id } = useParams();
	const { countries, getCountriesData, isLoading } = useFetchCountry();
	const [borders, setBorders] = useState<string[]>([]);
	const [country, setCountry] = useState<Country | undefined>();

	const countryDetailURL = `https://restcountries.com/v3.1/name/${id}?fullText=true`;

	const displayBordersCountry = useCallback((borders: string[]) => {
		if (borders === undefined) {
			return;
		}

		borders.forEach(async (border) => {
			const response = await fetch(
				`${countryNameFromCodedFormUrl}${border.toLowerCase()}`
			);
			const data = await response.json();
			setBorders((prevState) => [...prevState, data['0'].name.common]);
		});
	}, []);

	useEffect(() => {
		const borders = countries[0]?.borders;
		if (borders !== undefined) {
			displayBordersCountry(borders);
		}
	}, [displayBordersCountry, countries]);

	useEffect(() => {
		getCountriesData(countryDetailURL);
	}, [getCountriesData, countryDetailURL]);

	useEffect(() => {
		setCountry(countries[0]);
	}, [countries]);

	if (country === undefined) {
		return <LoadingSpinner />;
	}

	return (
		<div className='app'>
			<div className={styles.countryDetail}>
				{isLoading && <LoadingSpinner />}
				<BackButton />
				<div className={styles.container}>
					<img
						className={styles.flag}
						src={country.flags.png}
						alt={`Flag of ${country.name}`}
					/>
					<div className={styles.textContent}>
						<h2 className={styles.title}>{country.name.common}</h2>
						<Content country={country} />
						<BorderCountires borders={borders} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default CountryDetail;
