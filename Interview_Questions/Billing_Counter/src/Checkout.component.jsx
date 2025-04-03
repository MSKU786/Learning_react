import { useEffect, useState } from 'react';
import { Queue } from './Queue';
import './styles.css';

export const Checkout = ({ numberOfQueues }) => {
  const [state, setState] = useState(null);

  const [queues, setQueues] = useState([]);

  const handleChange = (e) => {
    setState(e.target.value);
  };

  const handleClick = (e) => {
    const num = state;

    const fetchQueue = () => {
      let min = 999;
      let ans = null;
      let ind = -1;
      let length = 0;

      for (let i = 0; i < queues.length; i++) {
        if (min > queues[i]?.sum) {
          min = queues[i].sum;
          ans = queues[i];
          ind = i;
          length = queues[i].length;
        } else if (min == queues[i]?.sum && length > queues[i].length) {
          min = queues[i].sum;
          ans = queues[i];
          ind = i;
          length = queues[i].length;
        }
      }

      const newQueue = [...queues];
      newQueue[ind] = {
        ...newQueue[ind],
        data: [...newQueue[ind].data, num],
        sum: newQueue[ind].sum + parseInt(num),
        length: newQueue[ind].length + 1,
      };

      setQueues(newQueue);
    };

    fetchQueue();
    setState('');
  };

  useEffect(() => {
    const initialState = [];
    for (let i = 0; i < numberOfQueues; i++) {
      initialState.push({ id: i, data: [], sum: 0, length: 0 });
    }
    setQueues(initialState);
  }, []);

  return (
    <div className="counter-container">
      <div>
        <input
          type="number"
          value={state}
          onChange={handleChange}
        />
        <button onClick={handleClick}> Checkout </button>
      </div>
      <div className="queue-container">
        {queues.map((queue, index) => {
          return (
            <Queue
              id={index}
              data={queue}
            />
          );
        })}
      </div>
    </div>
  );
};
