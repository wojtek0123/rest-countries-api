import React from 'react';
import Header from '../components/Header/Header';

const Layout: React.FC<{
	children: JSX.Element | JSX.Element[];
	theme: string;
}> = ({ children, theme }) => {
	return (
		<div className='app' data-theme={theme}>
			<Header />
			<main className='wrapper'>{children}</main>
		</div>
	);
};

export default Layout;
