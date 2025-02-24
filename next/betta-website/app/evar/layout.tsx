import Link from "next/link";
import FooterLayout from "../footerLayout";

export default function EvarFooterLayout({
	children
}: {
	children: React.ReactNode
}) {
	return <FooterLayout
		content={
			<>
				<div className="s1 e3 vPad">
					<p>Lets meet at</p>
				</div>
				<div className="s11 e12 vBottom hRight vPad">
					<p>A Field endeavored by</p>
					<Link href="/">
						<img src="./img/betta-systems-logo-transparent-1.svg" />
					</Link>
				</div>
			</>
		}>
		{children}
	</FooterLayout>
}