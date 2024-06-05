import React from 'react';
import logo from '../assets/logo.png';
import style from "./Navbar.module.css"

export function Navbar1() {
	return (
		<nav className={`${style.mainNavbar} ${style.navbar}`}>
			<a href="/"> <img src={logo} alt="logo" height='40px' /></a>
			<div className={`${style.navbar} ${style.secondaryNav}`}>
				<a className={style.navLink} href="/e">Electrician</a> |
				<a className={style.navLink} href="/s">Sites</a>
			</ div>
		</nav>
	)
}