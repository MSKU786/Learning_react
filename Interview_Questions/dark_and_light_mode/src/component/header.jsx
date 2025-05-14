import { Link } from 'react-router';

export default function Header({ colorState, setColorState }) {
  return (
    <div className="header">
      <Link to="/">Home</Link>
      <Link to="/about">About Us</Link>
      <button
        onClick={(e) => setColorState(!colorState)}
        className={colorState ? 'button-dark' : 'button'}
      >
        Toggle
      </button>
    </div>
  );
}
