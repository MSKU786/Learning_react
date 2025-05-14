import { createContext, useContext, useState } from 'react';

export const ThemeContext = createContext({});

export const ThemeProvider = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState(false);

  const toggleTheme = () => {
    setDarkTheme((prevState) => !prevState);
  };

  const theme = darkTheme ? 'dark' : 'light';
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
