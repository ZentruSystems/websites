import Link from "next/link";
import Separator from "../../common/components/separator/Separator";
import DynamicQuote from "./DynamicQuote";
import SideBoard from "./SideBoard";

export default function Page() {
	return <main>
			<section className="Head bg-l4 hGrid">
				<div className="vCenter vBigPad ph-vPad s1 e7 ph-e5 vFill vSpaceing">
					<h2 className="light noMargin">Because we don’t like how Companies treat their Customers.</h2>
					<h2 className="light noMargin">Because we don’t like bad design.</h2>
					<h2 className="light noMargin">Because we <a ><span className="bold mutedPrimaryAccent">love</span> really good.</a></h2>
				</div>
				<div className="s8 e13 flex ph-s1 ph-e5 ph-flex-vert">
					<Separator/>
					<div className="vCenter vPad ph-tUnitPad vFill hFill il-grid layoutVBottom">
						<Link href="https://evar.space" className="il-grid vUnitPad layoutVBottom layoutHCenter">
							<img className="invertIfLightTheme" style={{ height: 50, }} src="./img/Evar Text Logo.svg" alt="Evar – Games" />
						</Link>
						<h4 className="hCenter vBottom">Check out all our Projects from all our Fields</h4>
					</div>
				</div>
			</section>
			<section className="Really vhGrid">
				<h2 className="s1 e5 ph-e5 tPad">Really Good</h2>
				<DynamicQuote/>
				<p className="s1 e8 ph-e3 bPad ph-vUnitPad ph-rGap UnitPad ph-vCenter">
					We focus on what you feel, not how we deliver that feeling just making sure you get more of it.<br />
					<br/>
					The undescribable feeling of using a product that is really good.
				</p>
				<SideBoard
					src="./img/OldProducts.svg"
					alt="Thoughtfulness from a lost era"
				/>
			</section>
			<section className="Sustainability">

			</section>
		</main>
}