import styles from './Card.module.css';

const Card: React.FC<{
	flagImage: string;
	name: string;
	population: number;
	region: string;
	capital: string;
}> = ({ flagImage, name, population, region, capital }) => {
	const adjustPopulation = (population: number) => {
		return population.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
	};

	return (
		<div className={styles.card}>
			<img src={flagImage} alt={`Flag of ${name}`} />
			<div className={styles.body}>
				<h2>{name}</h2>
				<div>
					<p>
						Population: <span>{adjustPopulation(population)}</span>
					</p>
					<p>
						Region: <span>{region}</span>
					</p>
					<p>
						Capital: <span>{capital}</span>
					</p>
				</div>
			</div>
		</div>
	);
};

export default Card;
