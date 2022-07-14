import { useNavigate } from 'react-router-dom';
import arrowLeft from '../../../assets/icons/arrow-left.svg';
import styles from './BackButton.module.css';

const BackButton: React.FC = () => {
	const navigate = useNavigate();


  const backButtonHandler = () => {
		navigate('/');
	};

	return (
		<button onClick={backButtonHandler} className={styles.backButton}>
			<img src={arrowLeft} alt='Arrow left' className={styles.icon} />
			<span className={styles.backButton__text}>Back</span>
		</button>
	);
};

export default BackButton;
