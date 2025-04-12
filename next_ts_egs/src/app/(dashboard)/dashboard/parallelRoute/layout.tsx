import { ReactNode } from "react"
import style from "./style.module.css"


const parallelRoute = ({ children, metrics, notification, revenue }:
	{ children: ReactNode, metrics: ReactNode, notification: ReactNode, revenue: ReactNode }) => {
	return (
		<div className={style.mainCont}>
			{children}
			<div className={style.container}>
				<div>{metrics}</div>
				<div>{notification}</div>
				<div>{revenue}</div>
			</div>
		</div>
	)
}
export default parallelRoute