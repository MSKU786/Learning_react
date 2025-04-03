import { Checkout } from './Checkout.component';
import './styles.css';

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <Checkout numberOfQueues={5} />
    </div>
  );
}
