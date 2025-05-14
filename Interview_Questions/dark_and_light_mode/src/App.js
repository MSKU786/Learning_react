import { useState } from 'react';
import Header from './component/header';
import './styles.css';

export default function App() {
  const [colorState, setColorState] = useState(false);

  return (
    <div className={`App ${colorState ? 'theme-dark' : 'theme'}`}>
      <Header
        colorState={colorState}
        setColorState={setColorState}
      />
      <div>
        <h1>Interview Question</h1>
      </div>
    </div>
  );
}
