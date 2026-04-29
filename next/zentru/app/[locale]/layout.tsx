import 'common/theming/base.css';
import 'common/theming/modular.css';
import 'common/theming/text.css';
import ThemedImg from 'common/theming/ThemedImg';
import { getTranslations } from 'next-intl/server';
import Link from 'next/link';
import '../animations.css';
import '../style.css';
import Nav from './nav/Nav';

export default async function BaseLayout({
	children,
}: {
	children: React.ReactNode
}) {
	const t = await getTranslations();
	const tAlways = await getTranslations("Always");

	return <>
			<Nav />
			<div className='navPad vflex minV100'>
				{children}
				<footer className="bg-l4 hGrid ph-bNavPad">
					<div className="s1 e3 ph-e5 vPad">
						<p>{tAlways("letsMeetAt") ?? "Lets meet at"}</p>
						<Link href="https://www.linkedin.com/company/zentru-systems">linkedIn</Link>
					</div>
					<div className="s11 e12 ph-s1 ph-e5 vBottom hRight ph-hUnset vPad">
						<p>{tAlways("weAre") ?? "We are"}</p>
						<Link href="/">
							<ThemedImg style={{ height: 25 }}
								lightSrc="/img/ZentruLogo/Color=Dark,Connected=False,Accent=Green,Line=Thick,Italic=False,WithRects=True.svg"
								darkSrc="/img/ZentruLogo/Color=White,Connected=False,Accent=Green,Line=Thick,Italic=False,WithRects=True.svg"
							/>
						</Link>
					</div>
					<div className="s11 e12 ph-s1 ph-e5 vBottom hRight ph-hUnset bUnitPad">
						<Link href="/impressum">
							<p>{tAlways("imprint") ?? "Imprint"}</p>
						</Link>
						<Link href="/privacy-policy">
							<p>{tAlways("privacyPolicy") ?? "Privacy Policy"}</p>
						</Link>
					</div>
				</footer>
			</div>
	</>;
}

