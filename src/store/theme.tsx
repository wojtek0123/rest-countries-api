import React, { useEffect, useState } from "react";

interface Theme {
	theme: string;
	setTheme: () => void;
}

const defaultState: Theme = {
	theme: 'dark',
	setTheme: () => {},
};

const themeContext = React.createContext<Theme>(defaultState);
const localStorageTheme = localStorage.getItem('theme');
const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
const initialTheme = localStorageTheme ? localStorageTheme : defaultDark;

export const ThemeContextProvider: React.FC<{ children: JSX.Element }> = ({children}) => {
  const [theme, setTheme] = useState(initialTheme);

  const changeTheme = () => {
    const setNewTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(setNewTheme);
  }
  
  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme])

  const contextValue = {
    theme: theme,
    setTheme: changeTheme
  }

  return <themeContext.Provider value={contextValue}>
    {children}
  </themeContext.Provider>
}

export default themeContext;