import { useContext } from 'react';
import { ThemeContext } from '../contexts/theme-context';

export const AboutUs = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={theme}>
      <h1> About Us </h1>
      <p>This page is regrading about us info</p>
    </div>
  );
};
