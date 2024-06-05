import { memo } from "react";

const ChildComponent = memo(({ onClick }) => {
	console.log('ChildComponent rendered');
	return <button onClick={onClick}>Increment</button>;
});
export default ChildComponent;