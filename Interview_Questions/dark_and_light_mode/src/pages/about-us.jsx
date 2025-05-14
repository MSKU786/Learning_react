import { useContext } from 'react';
import { ThemeContext } from '../contexts/theme-context';

export const AboutUs = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div>
      <h1> About Us </h1>
      <p>This page is regrading about us info</p>
    </div>
  );
};
