import { useCallback, useContext, useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import useFetchCountry from '../../hooks/use-fetch-country';
import { Country } from '../../types/types';
import LoadingSpinner from '../UI/LoadingSpinner';
import styles from './CountryDetail.module.css';
import { Details } from '../../types/types';
import { ReactComponent as ArrowLeft } from '../../assets/icons/arrow-left.svg';
import themeContext from '../../store/theme';
import { displayCommasInNumber } from '../../utils/displayCommasInNumber';

const countryNameFromCodedFormUrl = 'https://restcountries.com/v3.1/alpha/';

const CountryDetail: React.FC = () => {
	const { theme } = useContext(themeContext);
	const { id } = useParams();
	const { countries, getCountriesData, isLoading } = useFetchCountry();
	const [borders, setBorders] = useState<string[]>([]);
	const [country, setCountry] = useState<Country | undefined>();

	const countryDetailURL = `https://restcountries.com/v3.1/name/${id}?fullText=true`;
	const getArrayAndNeedOnlyOneElement = 0;

	const displayBordersCountry = useCallback((borders: string[]) => {
		borders.forEach(async (border) => {
			const response = await fetch(
				`${countryNameFromCodedFormUrl}${border.toLowerCase()}`
			);
			const data = await response.json();
			setBorders((prevState) => [
				...prevState,
				data.map((country: Country) => country.name.common),
			]);
		});
	}, []);

	const displayDetails = (detail: Country, kind: Details) => {
		if (kind === Details.Currency) {
			const currencyKeys = Object.keys(detail.currencies);
			const currencies = currencyKeys
				.map((key) => detail.currencies[key].name)
				.join(', ');
			return currencies;
		}
		if (kind === Details.Language) {
			const languageKeys = Object.keys(detail.languages);
			const languages = languageKeys
				.map((key) => detail.languages[key])
				.join(', ');
			return languages;
		}
		if (kind === Details.NativeName) {
			const nativeNameKeys = Object.keys(detail.name.nativeName);
			const nativeNames = nativeNameKeys
				.map((key) => detail.name.nativeName[key].official)
				.join(', ');
			return nativeNames;
		}
	};

	useEffect(() => {
		const borderCountries = countries[getArrayAndNeedOnlyOneElement]?.borders;
		if (borderCountries !== undefined) {
			displayBordersCountry(borderCountries);
		}
	}, [displayBordersCountry, countries]);

	useEffect(() => {
		getCountriesData(countryDetailURL);
	}, [getCountriesData, countryDetailURL]);

	useEffect(() => {
		setCountry(countries[getArrayAndNeedOnlyOneElement]);
	}, [countries]);

	if (country === undefined) {
		return <LoadingSpinner />;
	}

	return (
		<main className='app' data-theme={theme}>
			<div className='wrapper'>
				<div className={styles.countryDetail}>
					{isLoading && <LoadingSpinner />}
					<Link to='/' className={styles.backButton}>
						<ArrowLeft className={styles.icon} />
						<span className={styles.btnText}>Back</span>
					</Link>
					<div className={styles.container}>
						<img
							className={styles.flag}
							src={country.flags.png}
							alt={`Flag of ${country.name}`}
						/>
						<div className={styles.textContent}>
							<h2 className={styles.title}>{country.name.common}</h2>
							<div className={styles.boxes}>
								<div className={styles.box}>
									<p className={styles.text}>
										Native Name:{' '}
										<span className={styles.content}>
											{displayDetails(country, Details.NativeName)}
										</span>
									</p>
									<p className={styles.text}>
										Population:{' '}
										<span className={styles.content}>
											{displayCommasInNumber(country.population)}
										</span>
									</p>
									<p className={styles.text}>
										Region:{' '}
										<span className={styles.content}>{country.region}</span>
									</p>
									<p className={styles.text}>
										Sub Region:{' '}
										<span className={styles.content}>{country.subregion}</span>
									</p>
									<p className={styles.text}>
										Capital:{' '}
										<span className={styles.content}>{country.capital}</span>
									</p>
								</div>
								<div className={styles.box}>
									<p className={styles.text}>
										Top Level Domain:{' '}
										<span className={styles.content}>{country.tld}</span>
									</p>
									<p className={styles.text}>
										Currencies:{' '}
										<span className={styles.content}>
											{displayDetails(country, Details.Currency)}
										</span>
									</p>
									<p className={styles.text}>
										Languages:{' '}
										<span className={styles.content}>
											{displayDetails(country, Details.Language)}
										</span>
									</p>
								</div>
							</div>
							<div className={styles.borderContainer}>
								<h3 className={styles.borderTitle}>Border Countries:</h3>
								<div className={styles.borderBox}>
									{borders.length === 0 && (
										<p className={styles.borderMessage}>No borders countries</p>
									)}
									{borders.map((border, index) => (
										<span key={index} className={styles.borderCountry}>
											{border}
										</span>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
};

export default CountryDetail;
