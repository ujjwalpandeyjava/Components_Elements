import { useState, useCallback } from 'react';
import ChildComponent from "./ChildComponent";

const ExampleWithCallback = () => {
  const [count, setCount] = useState(0);

  // Cause fo useCallback this function is not-reassigned to the memory, it will not trigger childComponent render.
  const increment = useCallback(() => {
    setCount(prevCount => prevCount + 1);
  }, []); // Dependencies array is empty, meaning `increment` will not change

  return (
    <div>
      <h3>With useCallback</h3>
      <p>Even both the child-components are warped in memo 1st one is re-rendering.</p>
      <hr />
      <p>Count: {count}</p>
      <ChildComponent onClick={increment} />
    </div>
  );
};

export default ExampleWithCallback;
