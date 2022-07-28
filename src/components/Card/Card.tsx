import { Link } from 'react-router-dom';
import styles from './Card.module.css';

const Card: React.FC<{
	flagImage: string;
	name: string;
	population: number;
	region: string;
	capital: string;
}> = ({ flagImage, name, population, region, capital }) => {
	return (
		<Link className={styles.card} to={`/${name}`}>
			<img src={flagImage} alt={`Flag of ${name}`} />
			<div className={styles.body}>
				<h2>{name}</h2>
				<div>
					<p>
						Population:{' '}
						<span>{new Intl.NumberFormat('en-EN').format(population)}</span>
					</p>
					<p>
						Region: <span>{region}</span>
					</p>
					<p>
						Capital: <span>{capital}</span>
					</p>
				</div>
			</div>
		</Link>
	);
};

export default Card;
