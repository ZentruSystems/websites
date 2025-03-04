import Link from "next/link";
import './base.css';
import './modular.css';
import './style.css';
import './text.css';

export default function EvarFooterLayout({
	children
}: {
	children: React.ReactNode
}) {
	return (<html lang="en">
		<body style={{ overflowX: 'hidden', overflowY: 'scroll' }}>
			<nav className="hGrid fixed glass v10Pad hFill">
				<Link className="s4 e8 hCenter" href="/">
					<img className="vertSep" src="./img/Evar Text Logo.svg" />
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
					<Link href="/">
						<img src="./img/betta-systems-logo-transparent-1.svg" />
					</Link>
				</div>
			</footer>
		</body>
	</html>);
}