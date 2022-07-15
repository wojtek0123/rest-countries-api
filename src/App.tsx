import { useState } from 'react';
import './App.css';
import Cards from './components/Cards/Cards';
import Form from './components/Form/Form';
import { Country } from './types/types';

function App() {
	const [typedName, setTypedName] = useState<Country[]>([]);
	const [isLoading, setIsLoading] = useState(true);

	const typedCountryNameByInput = (countries: Country[]) => {
		setTypedName(countries);
	}

	const isLoadingHandler = (state: boolean) => {
		setIsLoading(state);
	}

	return (
		<div className='app'>
			<Form onFilteredCountries={typedCountryNameByInput} onIsLoading={isLoadingHandler} />
			<Cards filteredCountries={typedName} isLoading={isLoading} />
		</div>
	);
}

export default App;
