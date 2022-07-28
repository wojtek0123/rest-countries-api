import styles from './Header.module.css';
import {ReactComponent as MoonIcon} from '../../assets/icons/moon.svg';
import { useContext } from 'react';
import themeContext from '../../store/theme';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
	const {theme, setTheme } = useContext(themeContext);

	const changeThemeHandler = () => {
		setTheme()
	}

	return (
		<header className={styles.header}>
			<div className={styles.container}>
				<Link to='/' className={styles.link}>
					<h1 className={styles.title}>Where in the world?</h1>
				</Link>
				<button onClick={changeThemeHandler}>
					<MoonIcon className={styles.image} />
					<p className={styles.text}>{`${theme === 'dark' ? 'Light' : 'Dark'} Mode`}</p>
				</button>
			</div>
		</header>
	);
};

export default Header;
