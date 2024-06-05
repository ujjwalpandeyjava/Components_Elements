import { forwardRef, useImperativeHandle, useRef } from "react";

const UseRefChild = forwardRef((props, ref) => {
  const inputRef = useRef();

  // Attach the ref form the parent component.
  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    },
    getValue: () => {
      return inputRef.current.value;
    },
  }));

  return (
    <div>
      <input ref={inputRef} defaultValue={"Hello world!"}/>
    </div>
  )
});

export default UseRefChild