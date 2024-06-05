import { useRef } from "react";
import UseRefChild from "./UseRefChild"


function UseRefParent() {
  const childRef = useRef();

  const focusInput = () => {
    if (childRef.current) {
      childRef.current.focus();
    }
  };

  const logValue = () => {
    if (childRef.current) {
      console.log(childRef.current.getValue());
    }
  };

  return (
    <div>
      userRef Dom manipulation from parent component.
      <UseRefChild ref={childRef} />
      <button onClick={focusInput}>Focus Input</button>
      <button onClick={logValue}>Log Input Value</button>
    </div>
  );
}

export default UseRefParent