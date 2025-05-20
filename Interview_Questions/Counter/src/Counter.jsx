import { useState } from 'react';
import './styles.css';

export const Counter = () => {
  const [current, setCurrent] = useState(0);

  const handleIncrement = () => {
    setCurrent((prev) => prev + 1);
  };

  const handleDecrement = () => {
    setCurrent((prev) => prev - 1);
  };

  return (
    <div className="counter">
      <div>{current}</div>
      <div>
        <button onClick={handleIncrement}> + </button>
        <button onClick={handleDecrement}> - </button>
      </div>
    </div>
  );
};
