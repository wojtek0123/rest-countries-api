import styles from './Form.module.css';
import searchIcon from '../../assets/icons/search.svg';
import React, { useEffect, useState } from 'react';
import { Country } from '../../types/types';
import useFetchCountry from '../../hooks/use-fetch-country';

const allCountriesURL = 'https://restcountries.com/v3.1/all';

const Form: React.FC<{
	onFilteredCountries: (countries: Country[]) => void;
	onIsLoading: (state: boolean) => void;
}> = ({ onFilteredCountries, onIsLoading }) => {
	const [selectedValue, setSelectedValue] = useState('');
	const [enteredName, setEnteredName] = useState('');
	const { isLoading, countries, getCountriesData } = useFetchCountry();
	const [filteredCountries, setFilteredCountries] = useState<Country[]>([]);

	const filteringCountries = (event: React.ChangeEvent<HTMLInputElement>) => {
		setEnteredName(event.target.value);
		let selectedCountries: Country[];

		if (selectedValue !== '') {
			selectedCountries = countries
				.filter((country) => country.region === selectedValue)
				.filter((country) =>
					country.name.common
						.toLowerCase()
						.includes(event.target.value.toLowerCase())
				);
		} else {
			selectedCountries = countries.filter((country) =>
				country.name.common
					.toLowerCase()
					.includes(event.target.value.toLowerCase())
			);
		}

		setFilteredCountries(selectedCountries);
	};

	useEffect(() => {
		getCountriesData(allCountriesURL);
	}, [getCountriesData]);

	const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
	};

	const filteringCountriesByRegion = (
		event: React.ChangeEvent<HTMLSelectElement>
	) => {
		setSelectedValue(event.target.value);

		if (event.target.value === 'All') {
			setFilteredCountries(countries);
			return;
		}

		setFilteredCountries(
			countries.filter(
				(country) =>
					country.region.toLowerCase() === event.target.value.toLowerCase()
			)
		);
	};

	useEffect(() => {
		setFilteredCountries(countries);
	}, [countries]);

	useEffect(() => {
		if (enteredName === '' && selectedValue === '') {
			onFilteredCountries(countries);
		} else {
			onFilteredCountries(filteredCountries);
		}
		onIsLoading(isLoading);
	}, [
		selectedValue,
		filteredCountries,
		onFilteredCountries,
		enteredName,
		countries,
		onIsLoading,
		isLoading,
	]);

	return (
		<form className={styles.form} onSubmit={(event) => submitHandler(event)}>
			<div className={styles.searchInput}>
				<button type='submit'>
					<img src={searchIcon} alt='search icon' />
				</button>
				<input
					onInput={filteringCountries}
					type='search'
					placeholder='Search for a country...'
				/>
			</div>
			<select
				onChange={filteringCountriesByRegion}
				defaultValue='Filter by Region'
				className={styles.select}
				name='filter by region'
				aria-labelledby='filter by region'
			>
				<option value='All'>All</option>
				<option value='Africa'>Africa</option>
				<option value='Americas'>Americas</option>
				<option value='Asia'>Asia</option>
				<option value='Europe'>Europe</option>
				<option value='Oceania'>Oceania</option>
			</select>
		</form>
	);
};

export default Form;
