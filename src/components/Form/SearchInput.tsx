import styles from './SearchInput.module.css';
import searchIcon from '../../assets/icons/search.svg';

const SearchInput: React.FC = () => {
	return (
			<div className={styles.searchInput}>
				<button type='submit'>
					<img src={searchIcon} alt='search icon' />
				</button>
				<input type='search' placeholder='Search for a country...' />
			</div>
	);
};

export default SearchInput;
