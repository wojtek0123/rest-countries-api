import styles from './BorderCountry.module.css';

const BorderCountry: React.FC<{ index: number; border: string }> = ({
	index,
	border,
}) => {
	return (
		<span key={index} className={styles.borderCountry}>
			{border}
		</span>
	);
};

export default BorderCountry;
