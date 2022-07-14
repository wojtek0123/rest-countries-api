import { Country, Details } from '../../../types/types';
import styles from './TextContent.module.css';
import useDisplayCommasInNumber from '../../../hooks/use-display-comma-number';

const TextContent: React.FC<{ country: Country }> = ({ country }) => {
	const { displayCommasInNumber } = useDisplayCommasInNumber();

	const displayDetails = (detail: any, kind: Details) => {
		const result: any[] = [];
		const keys = Object.keys(detail);

		keys.forEach((key) => {
			if (kind === Details.Currency) {
				result.push(detail[key].name);
			}
			if (kind === Details.Language) {
				result.push(detail[key]);
			}
			if (kind === Details.NativeName) {
				result.push(detail[key].official);
			}
		});
		return result.join(', ');
	};

	return (
		<div className={styles.boxes}>
			<div className={styles.box}>
				<p className={styles.text}>
					Native Name:{' '}
					<span className={styles.content}>
						{displayDetails(country.name.nativeName, Details.NativeName)}
					</span>
				</p>
				<p className={styles.text}>
					Population: <span className={styles.content}>{displayCommasInNumber(country.population)}</span>
				</p>
				<p className={styles.text}>
					Region: <span className={styles.content}>{country.region}</span>
				</p>
				<p className={styles.text}>
					Sub Region: <span className={styles.content}>{country.subregion}</span>
				</p>
				<p className={styles.text}>
					Capital: <span className={styles.content}>{country.capital}</span>
				</p>
			</div>
			<div className={styles.box}>
				<p className={styles.text}>
					Top Level Domain: <span className={styles.content}>{country.tld}</span>
				</p>
				<p className={styles.text}>
					Currencies:{' '}
					<span className={styles.content}>{displayDetails(country.currencies, Details.Currency)}</span>
				</p>
				<p className={styles.text}>
					Languages:{' '}
					<span className={styles.content}>{displayDetails(country.languages, Details.Language)}</span>
				</p>
			</div>
		</div>
	);
};

export default TextContent;
