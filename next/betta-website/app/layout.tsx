import Link from 'next/link';
import Script from 'next/script';
import './animations.css';
import './base.css';
import EnableScrollAnimations from './EnableScrollAnimations';
import './modular.css';
import Nav from './nav/Nav';
import './style.css';
import './text.css';
import ThemedImg from './ThemedImg';


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
									lightSrc="./img/Betta Systems - Logo - Light.svg"
									darkSrc="./img/Betta Systems - Logo - Dark.svg"
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
// 	title: "Betta Systems",
// 	keywords: [
// 		"Apps",
// 		"Software",
// 		"Quality",
// 	],
// 	description: "Really Good",

// 	openGraph: {
// 		title: "Betta Systems",
// 		type: 'website',
// 		url: "https://betta.systems",
// 		description: "Really Good",
// 	}
// 	// robots: {index: true, follow: true},
// };