import { lazy, Suspense, useState } from 'react';

const Component = {
	A: lazy(() => import("./MyLazyComponent_A")),
	B: lazy(() => import("./MyLazyComponent_B")),
	C: lazy(() => import("./MyLazyComponent_C"))
}

const Loading = () => <h2>Loading...</h2>;

const LazyComponent = () => {
	const [renderComp, setRenderComp] = useState("A");
	const MyLazyComp = Component[renderComp];

	return (
		<div className="App">
			<Suspense fallback={<Loading />}>
				<MyLazyComp />
			</Suspense>
			<button onClick={() => setRenderComp("A")}>Show A</button>
			<button onClick={() => setRenderComp("B")}>Show B</button>
			<button onClick={() => setRenderComp("C")}>Show C</button>
		</div>
	);
};

export default LazyComponent;