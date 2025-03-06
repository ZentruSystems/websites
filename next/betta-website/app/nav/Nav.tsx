"use client";

import Link from "next/link";
import { useState } from "react";
import ThemedImg from "../ThemedImg";
import useResponsiveSize from "../useResponsiveSize";
import NavLink from "./NavLink";

export default function Nav() {
	const { isDesktop } = useResponsiveSize();
	const [isBurgerOpen, setIsBurgerOpen] = useState(false);

	if (isDesktop) {

		return <nav className="glass">
			<Link className="s1 e2" href="/">
				<ThemedImg className="Logo" alt="Betta"
					lightSrc="./img/Betta Systems - Logo - Light.svg"
					darkSrc="./img/Betta Systems - Logo - Dark.svg"
				/>
			</Link>
			<div className="Refs s8 e12">
				<img className="vertSep" src="./img/vertical-divider.svg" />
				<NavLink>Products</NavLink>
				<img className="vertSepChevronRight" src="./img/vertical-divider-chevron-right.svg" />
				<NavLink>Fields</NavLink>
				<img className="vertSep" src="./img/vertical-divider.svg" />
				<NavLink>Catalog</NavLink>
			</div>
		</nav>
	}

	function _toggleOpenClose() {
		setIsBurgerOpen(!isBurgerOpen);
	}

	const burgerExtend = isBurgerOpen ? 45 : 0;
	const burgerOpacity = isBurgerOpen ? 100 : 0;

	const burger = <div
		onClick={_toggleOpenClose}
		className="s5 e5 hRight liquidPad"
		style={{ paddingTop: burgerExtend }}
	>
		<div className="vFill" style={{ height: 17, width: 31 }}>
			<img className="liquidOpacity" src="./img/BurgerOpen=false.svg" style={{ position: "absolute", opacity: burgerOpacity }} />
			<img className="liquidOpacity" src="./img/BurgerOpen=true.svg" style={{ position: "absolute", opacity: 100 - burgerOpacity }} />
		</div>
	</div>


	// TODO: TransitionDelay not working!
	//	transitionDelay: !isBurgerOpen && "150ms"
	return <nav className="glass vhGrid" style={{ height: `calc(var(--nav-height) + ${burgerExtend}px)` }}>
		<div className="Refs s1 e5 liquidOpacity" style={{ position: "absolute", top: "var(--grid-gap)", opacity: burgerOpacity, zIndex: -1 }}>
			<img className="vertSep" src="./img/vertical-divider.svg" />
			<NavLink>Products</NavLink>
			<img className="vertSepChevronRight" src="./img/vertical-divider-chevron-right.svg" />
			<NavLink>Fields</NavLink>
			<img className="vertSep" src="./img/vertical-divider.svg" />
			<NavLink>Catalog</NavLink>
		</div>
		<Link className="s1 e2 liquidPad" href="/" style={{ paddingTop: burgerExtend }}>
			<ThemedImg className="Logo" alt="Betta"
				lightSrc="./img/Betta Systems - Logo - Light.svg"
				darkSrc="./img/Betta Systems - Logo - Dark.svg"
			/>
		</Link>
		{burger}
	</nav>
}
