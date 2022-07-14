import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Header from './components/Header/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CountryDetailPage from './pages/CoutryDetailPage';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	// <React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route
					path='/'
					element={
						<>
							<Header />
							<App />
						</>
					}
				/>
				<Route
					path='/:id'
					element={
						<>
							<Header />
							<CountryDetailPage />
						</>
					}
				/>
			</Routes>
		</BrowserRouter>
	// </React.StrictMode>
);
