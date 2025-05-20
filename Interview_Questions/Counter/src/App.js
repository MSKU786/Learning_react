import { Counter } from './Counter';
import { useState } from 'react';
import './styles.css';

/*

🧩 Problem Statement:
Design a React application that allows users to manage a dynamic list of counters. Each counter should be independently functional and maintain its own internal state.

Implement the following functionality:

A button labeled "Add Counter" which, when clicked, appends a new counter to the list.

Each counter should:

Display a number starting from 0.

Include Increment (+) and Decrement (-) buttons to modify its own value.

Each counter should also include a Delete button that removes it from the list.

The application should maintain a unique identifier for each counter to help React track component instances efficiently.

*/

export default function App() {
  const [counters, setCounters] = useState([]);

  const addCounter = () => {
    setCounters((prev) => [
      ...prev,
      prev.length > 0 ? prev[prev.length - 1] + 1 : 1,
    ]);
  };

  const removeCounter = (counter) => {
    console.log(counter);
    setCounters((prev) => prev.filter((c) => c != counter));
  };

  return (
    <div className="App">
      <h1>Counter</h1>
      <div>
        <button onClick={addCounter}>Add Counter</button>
      </div>
      {counters.map((counter) => {
        return (
          <div key={counter}>
            <Counter />
            <div>
              <button onClick={() => removeCounter(counter)}>Delete</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
