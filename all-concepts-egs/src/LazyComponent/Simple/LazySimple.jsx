import { lazy, Suspense } from 'react';

const MyLazyComponent = lazy(() => import('./MyLazyComponent'));

const Loading = () => <h2>Loading...</h2>;

const LazySimple = () => {
	return (
		<div className="App">
			<Suspense fallback={<Loading />}>
				<MyLazyComponent />
			</Suspense>
		</div>
	);
};

export default LazySimple;