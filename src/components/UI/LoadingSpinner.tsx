import spinner from '../../assets/icons/spinner.svg';
import styles from './LoadingSpinner.module.css';

const LoadingSpinner: React.FC = () => {
	return (
		<div className={styles.loadingSpinner}>
			<img
				src={spinner}
				alt='Loading spinner'
			/>
		</div>
	);
};

export default LoadingSpinner;
