import './base.css';
import './modular.css';
import './style.css';
import './text.css';

import NavLink from './nav/NavLink';

import type { Metadata } from 'next';
import Link from 'next/link';

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body style={{overflowX: 'hidden', overflowY: 'scroll'}}>
				<nav>
					<Link className="s1 e2" href="/">
						<img className="Logo" alt="Betta" src="./img/betta-systems-logo-transparent-1.svg" />
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
				{children}
			</body>
		</html>
	);
}

export const metadata : Metadata = {
	title: "Betta Systems",
	keywords: [
		"Apps",
		"Software",
		"Quality",
	],
	description: "Really Good",

	openGraph: {
		title: "Betta Systems",
		type: 'website',
		url: "https://betta.systems",
		description: "Really Good",
	}
	// robots: {index: true, follow: true},
};