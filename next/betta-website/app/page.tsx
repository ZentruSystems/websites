
export default function Page() {
	return <main>
		<section className="Head bg-l4 hGrid">
			<div className="vCenter vBigPad s1 e7 vFill vSpaceing">
				<h2 className="light noMargin">Because we don’t like how Companies treat their Customers.</h2>
				<h2 className="light noMargin">Because we don’t like bad design.</h2>
				<h2 className="light noMargin">Because we <span className="bold primaryAccent">love</span> really good.</h2>
			</div>
			<div className="s8 e13 flex">
				<img className="vCenter vAltPad flex rGap" src="./img/VertSep.svg" />
				<div className="vCenter vPad vFill hFill il-grid">
					<img className="hCenter" style={{ height: 200, width: 200 }} src="./img/Evar Text Logo.svg" />
					<h4 className="hCenter vBottom">Check out all our Projects from all our Fields</h4>
				</div>
			</div>
		</section>
		<section className="Really vhGrid">
			<h2 className="s1 e2 tPad">Really Good</h2>
			<p className="s1 e8">
				We believe that whatever we do, we should do it really good.<br />
				We believe this, because we strive for the thoughtfulness and sustainable design of the past.<br />
				<br />
				Just think of all the timeless designs, we got – that’s what we love.
				<br />As Phillip Stark put it
			</p>
			<p className="Quote s1 e6">
				“Timeless design is the only design that can be sustainable and the only design we should focus on”
			</p>
			<p className="s1 e8 bPad">
				We focus on what you feel, not how we deliver that feeling just making sure you get more of it.<br />
				The undescribable feeling of using a product that is really good.
			</p>
			<div className="s9 e13 bg-l4 lRound flex Container" style={{gridRowStart: 1, gridRowEnd: 5, marginTop: 8, marginBottom: 8, paddingLeft: 10}}>
				<img className="More RightFloat ToUnitPad hUnitPad vCenter hFill" src="./img/OldProducts.svg" alt="Thoughtfulness from a lost era"/>
			</div>
		</section>
		<section className="Sustainability">

		</section>
	</main>;
}