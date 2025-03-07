
import 'common/theming/base.css';
import 'common/theming/modular.css';
import 'common/theming/text.css';
import 'common/theming/ThemedImg';
import ThemedImg from 'common/theming/ThemedImg';
import Link from "next/link";
import './style.css';

export default function EvarFooterLayout({
	children
}: {
	children: React.ReactNode
}) {
	return (<html lang="en">
		<body style={{ overflowX: 'hidden', overflowY: 'scroll' }}>
			<nav className="hGrid fixed glass v10Pad hFill">
				<Link className="s4 e8 hCenter" href="/">
					<ThemedImg loading="eager"
						lightsrc="./img/Evar Text Logo.svg"
						darksrc="./img/Evar Text Logo Dark.svg"
					/>
				</Link>
			</nav>
			<div className="navPad">

				{children}
			</div>
			<footer className="bg-l3 hGrid">
				<div className="s1 e3 vPad">
					<p>Lets meet at</p>
				</div>
				<div className="s11 e12 vBottom hRight vPad">
					<p>A Field endeavored by</p>
					<Link href="https://betta.systems">
						<img src="./img/betta-systems-logo-transparent-1.svg" loading="lazy" />
					</Link>
				</div>
			</footer>
		</body>
	</html>);
}