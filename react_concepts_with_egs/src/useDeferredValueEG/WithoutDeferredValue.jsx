import { useState } from 'react';
import HeavyComputation from "./HeavyComputation";

const WithoutDeferredValue = () => {
  const [input, setInput] = useState('');

  return (
    <div>
      <h1>Without useDeferredValue</h1>
      <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
      <HeavyComputation value={input} />
    </div>
  );
};

export default WithoutDeferredValue;
