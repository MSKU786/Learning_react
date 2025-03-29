import { ProgresBar } from './ProgresBar.component';
import './styles.css';

export default function App() {
  return (
    <div className="App">
      <h1>Progress Bar</h1>
      <ProgresBar progress={70} />
    </div>
  );
}
