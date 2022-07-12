import styles from './Select.module.css';

const Select: React.FC = () => {
	return (
		<select defaultValue='Filter by Region' className={styles.select}>
			<option value='Filter by Region'  disabled hidden>
				Filter by Region
			</option>
			<option>Africa</option>
			<option>America</option>
			<option>Asia</option>
			<option>Europe</option>
			<option>Oceania</option>
		</select>
	);
};

export default Select;
