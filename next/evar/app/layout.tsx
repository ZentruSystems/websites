
import { GoogleAnalytics } from 'common';
import 'common/theming/base.css';
import FixFavicon from 'common/theming/FixFavicon';
import 'common/theming/modular.css';
import 'common/theming/text.css';
import 'common/theming/ThemedImg';
import ThemedImg from 'common/theming/ThemedImg';
import { Metadata } from 'next';
import { Icon } from 'next/dist/lib/metadata/types/metadata-types';
import Link from "next/link";
import './style.css';

export default function EvarLayout({
	children
}: {
	children: React.ReactNode
}) {
	return (<>
		<html lang="en">
			<FixFavicon
				darkSrc="/faviconLight/favicon.png"
				lightSrc="/faviconDark/favicon.png"
			/>
			<body style={{ overflowX: 'hidden', overflowY: 'scroll' }}>
				<nav className="hGrid fixed glass v10Pad hFill">
					<Link className="s1 e12 ph-e5 hCenter" href="/">
						<ThemedImg
							lightsrc="./img/EvarTextLogo.svg"
							darksrc="./img/EvarTextLogo-Dark.svg"
						/>
					</Link>
				</nav>
				<div className="navPad ph-navPad">
					{children}
					<footer className="bg-l3 hGrid">
						<div className="s1 e3 vPad">
							<p>Lets meet at</p>
							<Link className='rUnitPad' href="https://www.linkedin.com/company/zentru-systems">linkedIn</Link>
							<Link className='lUnitPad' href="https://store.steampowered.com/developer/evarspace">Steam</Link>
						</div>
						<div className="s11 e12 ph-s1 ph-e5 vBottom hRight ph-hUnset vPad tUnitPad">
							<p>A field of</p>
							<Link href="https://zentru.systems">
								<img style={{ height: 25 }} src="./img/Brightness=Dark,Color=Green.svg" loading="lazy" />
							</Link>
						</div>
						<div className="s11 e12 ph-s1 ph-e5 vBottom hRight ph-hUnset bUnitPad">
							<Link href="https://zentru.systems/impressum">
								<p>Impressum</p>
							</Link>
						</div>
					</footer>
				</div>
			</body>
			<GoogleAnalytics gaId="G-0DTTBMWKCQ" />
		</html>
	</>);
}

export const metadata: Metadata = {
	title: "EVAR",
	keywords: [
		"Games"
	],
	// description: "Really Good",
	robots: { index: true, follow: true },
	openGraph: {
		title: "EVAR",
		type: 'website',
		url: "https://evar.space",
		// description: "Really Good",
	},
	icons: {
		icon: [
			{
				url: '/faviconDark/favicon.png',
				id: "favicon"
			} as unknown as Icon]
	},
};