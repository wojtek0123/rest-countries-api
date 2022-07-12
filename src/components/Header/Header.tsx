import styles from './Header.module.css';
import moonIcon from '../../assets/icons/moon.svg';

const Header: React.FC = () => {
	return (
		<header className={styles.header}>
			<div className={styles.container}>
				<h1>Where in the world?</h1>
				<button>
					<img src={moonIcon} alt='moon icon' />
					<p>Dark Mode</p>
				</button>
			</div>
		</header>
	);
};

export default Header;
