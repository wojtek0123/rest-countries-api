import styles from './BorderCountries.module.css';
import BorderCountry from './BorderCountry';

const BorderCountires: React.FC<{ borders: string[] }> = ({ borders }) => {
	return (
		<div className={styles.borderContainer}>
			<h3 className={styles.borderTitle}>Border Countries:</h3>
			<div className={styles.borderBox}>
				{borders.length === 0 && <p className={styles.borderMessage}>No borders countries</p>}
				{borders.map((border, index) => (
					<BorderCountry index={index} border={border} />
				))}
			</div>
		</div>
	);
};

export default BorderCountires;
