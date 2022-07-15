import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CountryDetailPage from './pages/CoutryDetailPage';
import { ThemeContextProvider } from './store/theme';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<React.StrictMode>
		<ThemeContextProvider>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<App />} />
					<Route path='/:id' element={<CountryDetailPage />} />
				</Routes>
			</BrowserRouter>
		</ThemeContextProvider>
	</React.StrictMode>
);
