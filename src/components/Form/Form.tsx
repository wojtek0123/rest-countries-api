import styles from './Form.module.css';
import SearchInput from './SearchInput';
import Select from './Select';

const Form: React.FC = () => {
	const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
	};

	return (
		<form className={styles.form} onSubmit={(event) => submitHandler(event)}>
      <SearchInput />
			<Select />
		</form>
	);
};

export default Form;
