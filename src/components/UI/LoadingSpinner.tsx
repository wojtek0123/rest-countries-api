import {ReactComponent as Spinner} from '../../assets/icons/spinner.svg';
import styles from './LoadingSpinner.module.css';

const LoadingSpinner: React.FC = () => {
	return (
		<div className={styles.loadingSpinner}>
			<Spinner className={styles.icon} />
		</div>
	);
};

export default LoadingSpinner;
