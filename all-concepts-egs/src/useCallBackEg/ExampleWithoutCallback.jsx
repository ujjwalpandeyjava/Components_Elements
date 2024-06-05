import { useState } from 'react';
import ChildComponent from './ChildComponent';

const ExampleWithoutCallback = () => {
  const [count, setCount] = useState(0);

  // As this function is reassigned to the memory, it will trigger childComponent render.
  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h3>Without useCallback</h3>
      <p>Count: {count}</p>
      <ChildComponent onClick={increment} />
    </div>
  );
};

export default ExampleWithoutCallback;
