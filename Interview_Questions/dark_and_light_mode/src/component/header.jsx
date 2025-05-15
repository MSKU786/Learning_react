import { useContext } from 'react';
import { Link } from 'react-router';
import { ThemeContext } from '../contexts/theme-context';

export const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  console.log('Theme', theme, toggleTheme);
  return (
    <div className={`header ${theme}`}>
      <Link to="/">Home</Link>
      <Link to="/about">About Us</Link>
      <button
        onClick={(e) => toggleTheme()}
        className={theme}
      >
        Toggle
      </button>
    </div>
  );
};
