import style from "./page.module.css"

const layoutRoot = ({ children }: Readonly<{ children: React.ReactNode; }>) => {
	return (
		<div>
			<h2>Layout (Root)</h2>
			<div className={style.layoutContent}>
				{children}
			</div>
		</div>
	)
}
export default layoutRoot