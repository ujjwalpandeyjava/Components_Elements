import { NavLink } from "react-router-dom";
import style from './NewsSectionLayout.module.css';

/**
 * Auto select the menu as per the active url
 */
export default function NewsSidebar() {
	return (
		<div className={style.sideBar}>
			<NavLink style={({ isActive, isPending, isTransitioning }) => {
				return {
					border: isActive ? "1px solid black" : "",
					color: isPending ? "red" : "black",
				};
			}} className={style.options} caseSensitive={true} end={true} to="" > Daily News</NavLink>
			<NavLink style={({ isActive, isPending, isTransitioning }) => {
				return {
					border: isActive ? "1px solid black" : "",
					color: isPending ? "red" : "black",
				};
			}} className={style.options} to="./featured" > Featured articles</NavLink>
			<NavLink style={({ isActive, isPending, isTransitioning }) => {
				return {
					border: isActive ? "1px solid black" : "",
					color: isPending ? "red" : "black",
				};
			}} className={style.options} to="./personal" > Personal Center</NavLink>
		</div>)
}
