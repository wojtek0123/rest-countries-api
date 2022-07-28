import { useContext, useState } from 'react';
import './App.css';
import Cards from './components/Cards/Cards';
import Form from './components/Form/Form';
import Layout from './layout/Layout';
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
		<Layout theme={theme}>
			<Form
					onFilteredCountries={typedCountryNameByInput}
					onIsLoading={isLoadingHandler}
				/>
				<Cards filteredCountries={typedName} isLoading={isLoading} />
		</Layout>
	);
}

export default App;
