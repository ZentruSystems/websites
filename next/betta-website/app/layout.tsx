import './base.css';
import './modular.css';
import './style.css';
import './text.css';

import NavLink from './nav/NavLink';

import type { Metadata } from 'next';
import Link from 'next/link';
import ThemedImg from './ThemedImg';

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	console.log(children);

	return (
		<html lang="en">
			<body style={{ overflowX: 'hidden', overflowY: 'scroll' }}>
				<nav className="glass">
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
				<div className='navPad'>
					{children}
					<footer className="bg-l3 hGrid">
						<div className="s1 e3 vPad">
							<p>Lets meet at</p>
						</div>
						<div className="s11 e12 vBottom hRight vPad">
							<p>We are</p>
							<Link href="/">
								<ThemedImg
									lightSrc="./img/Betta Systems - Logo - Light.svg"
									darkSrc="./img/Betta Systems - Logo - Dark.svg"
								/>
							</Link>
						</div>
					</footer>
				</div>
			</body>
		</html>
	);
}

export const metadata: Metadata = {
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