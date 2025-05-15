import { useContext } from 'react';
import { ThemeContext } from '../contexts/theme-context';

export const Home = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={theme}>
      <h1>Home pAGE</h1>
      <p>This is my home page</p>
    </div>
  );
};
