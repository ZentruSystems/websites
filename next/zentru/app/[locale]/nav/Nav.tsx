"use client";

import ThemedImg from "common/theming/ThemedImg";
import useResponsiveSize from "common/useResponsiveSize";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useState } from "react";
import NavLink from "./NavLink";

export default function Nav() {
	const { isDesktop } = useResponsiveSize();
	const [isBurgerOpen, setIsBurgerOpen] = useState(false);
	const tAlways = useTranslations("Always");

	const vercelEnv = process.env.NEXT_PUBLIC_VERCEL_TARGET_ENV;

	const stagingBadge = <p style={{position: "fixed", left: 0, top: "var(--nav-height)"}}>{vercelEnv?.toUpperCase()}</p>

	if (isDesktop) {
		return <nav className="glass hFill">
			<Link className="s1 e2" href="/">
				<ThemedImg className="Logo" alt="Zentru Systems" loading="eager"
					lightSrc="/img/ZentruLogo/Color=Dark,Connected=False,Accent=Green,Line=Thick,Italic=False,WithRects=True.svg"
					darkSrc="/img/ZentruLogo/Color=White,Connected=False,Accent=Green,Line=Thick,Italic=False,WithRects=True.svg"
					height="10"
				/>
			</Link>
			<div className="Refs s9 e12">
				<img className="vertSep" src="/img/vertical-divider.svg" />
				<NavLink href="/products">{tAlways("products")}</NavLink>
				<img className="vertSepChevronRight" src="/img/vertical-divider-chevron-right.svg" />
				<NavLink href="/fields">{tAlways("fields")}</NavLink>
				{/* <img className="vertSep" src="/img/vertical-divider.svg" />
				<NavLink>{tAlways("about")}</NavLink> */}
				{vercelEnv != "production" && stagingBadge}
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
			<img className="liquidOpacity" src="/img/BurgerOpen=false.svg" style={{ position: "absolute", opacity: burgerOpacity }} />
			<img className="liquidOpacity" src="/img/BurgerOpen=true.svg" style={{ position: "absolute", opacity: 100 - burgerOpacity }} />
		</div>
	</div>

	return <nav className="glass vhGrid hFill" style={{ height: `calc(var(--nav-height) + ${burgerExtend}px)` }}>
		<div className="Refs s1 e5 liquidOpacity" style={{ position: "absolute", top: "var(--grid-gap)", opacity: burgerOpacity, zIndex: -1 }}>
			<img className="vertSep" src="/img/vertical-divider.svg" />
			<NavLink href="/products">{tAlways("products") ?? "Products"}</NavLink>
			<img className="vertSepChevronRight" src="/img/vertical-divider-chevron-right.svg" />
			<NavLink href="/fields">{tAlways("fields")}</NavLink>
			{/* <img className="vertSep" src="/img/vertical-divider.svg" />
			<NavLink>{tAlways("about")}</NavLink> */}
		</div>
		<Link className="s1 e4 liquidMarg" href="/" style={{ marginTop: burgerExtend, width: "fit-content" }}>
			<ThemedImg className="Logo" alt="Zentru"
				lightSrc="/img/ZentruLogo/Brightness=Dark,Color=Green.svg"
				darkSrc="/img/ZentruLogo/Brightness=Light,Color=Blue.svg"
			/>
		</Link>
		{vercelEnv != "production" && stagingBadge}
		{burger}
	</nav>
}