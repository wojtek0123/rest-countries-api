import { useContext, useState } from 'react';
import './App.css';
import Cards from './components/Cards/Cards';
import Form from './components/Form/Form';
import Header from './components/Header/Header';
import themeContext from './store/theme';
import { Country } from './types/types';

function App() {
	const { theme } = useContext(themeContext);

	const [typedName, setTypedName] = useState<Country[]>([]);
	const [isLoading, setIsLoading] = useState(true);

	const typedCountryNameByInput = (countries: Country[]) => {
		setTypedName(countries);
	};

	const isLoadingHandler = (state: boolean) => {
		setIsLoading(state);
	};

	return (
		<div className='app' data-theme={theme}>
			<Header />
			<main className='wrapper'>
				<Form
					onFilteredCountries={typedCountryNameByInput}
					onIsLoading={isLoadingHandler}
				/>
				<Cards filteredCountries={typedName} isLoading={isLoading} />
			</main>
		</div>
	);
}

export default App;
