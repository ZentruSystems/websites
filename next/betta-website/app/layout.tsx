import 'common/theming/base.css';
import 'common/theming/modular.css';
import 'common/theming/text.css';
import ThemedImg from 'common/theming/ThemedImg';
import Link from 'next/link';
import Script from 'next/script';
import './animations.css';
import EnableScrollAnimations from './EnableScrollAnimations';
import Nav from './nav/Nav';
import './style.css';


export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (<>
		<html lang="en" style={{overflowX: "hidden"}}>
			<Script src="https://flackr.github.io/scroll-timeline/dist/scroll-timeline.js" />
			<EnableScrollAnimations />
			<body>
				<Nav />
				<div className='navPad'>
					{children}
					<footer className="bg-l3 hGrid ph-bNavPad">
						<div className="s1 e3 ph-e5 vPad">
							<p>Lets meet at</p>
						</div>
						<div className="s11 e12 ph-s1 ph-e5 vBottom hRight ph-hUnset vPad">
							<p>We are</p>
							<Link href="/">
								<ThemedImg
									lightsrc="./img/Betta Systems - Logo - Light.svg"
									darksrc="./img/Betta Systems - Logo - Dark.svg"
								/>
							</Link>
						</div>
					</footer>
				</div>
			</body>
		</html>
	</>
	);
}

// export const metadata: Metadata = {
// 	title: "Evar",
// 	keywords: [
// 		"Games",
// 		"Software",
// 	],
// 	description: "Debris",

// 	openGraph: {
// 		title: "Evar",
// 		type: 'website',
// 		url: "https://evar.space",
// 		description: "Really Good",
// 	}
// 	// robots: {index: true, follow: true},
// };