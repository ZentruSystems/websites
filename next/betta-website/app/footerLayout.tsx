import Link from 'next/link';
import './footer.module.css';

export default function FooterLayout({
	children,
	content
}: {
	children: React.ReactNode,
	content?: React.ReactNode,
}) {
	return <>
		{children}
		<footer className="bg-l3 hGrid">
			{content || (<>
				<div className="s1 e3 vPad">
					<p>Lets meet at</p>
				</div>
				<div className="s11 e12 vBottom hRight vPad">
					<p>We are</p>
					<Link href="/">
						<img src="./img/betta-systems-logo-transparent-1.svg" />
					</Link>
				</div>
			</>
			)}
		</footer>
	</>
}