import { useState } from 'react';
import { ProgresBar } from './ProgresBar.component';
import './styles.css';

export default function App() {
  const [colorState, setColorState] = useState(0);

  return (
    <div className="App">
      <Header
        colorState={colorState}
        setColorState={setColorState}
      />
      <div className={`${state} ? "theme-dark" : "theme"`}></div>
    </div>
  );
}
