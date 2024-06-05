import { Fragment, lazy, useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer';
import style from './InteractionLazyComp.module.css';

/**
 * Load the component only when it comes into view.
 * @returns A demo component.
 */
function InteractionLazyComp() {
	const { ref, inView, entry } = useInView({});
	const [DynamicComp, setEle] = useState(null);
	useEffect(() => {
		if (inView) {
			setEle(lazy(() => import('./laxyComp2')));
			console.log(entry);
		} else
			setEle(null);
	}, [entry, inView]);

	return (
		<Fragment>
			<div className={style.full}>
				Other elements.
				{DynamicComp && <DynamicComp />}
			</div>
			<div ref={ref} className={style.extra}>InteractionLazyComp</div>
		</Fragment>
	)
}

export default InteractionLazyComp