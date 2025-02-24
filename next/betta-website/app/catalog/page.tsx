export default function Catalog() {
	return <main>
		<section className="vhGrid">
			<h2 className="s1 e2 tPad">Business Card Management</h2>
			<p className="s1 e7 bPad">
				Because it can be a real hassle to organize your business cards, the hundreds and hundreds you will  get over the years.<br />
				With this no more, just scan the card and it will create a virtual copy of it – categorized, named and ready to save to your contacts – with all the information so you can filter and find the people and companies you need.
			</p>
			<div className="s9 e13 bg-l4 lRound flex FloatTrigger vFill Container" style={{ gridRowStart: 1, gridRowEnd: 5, marginTop: 8, marginBottom: 8, paddingLeft: 10 }}>
				<img className="abs hUnitPad tPad" src="./img/BusinessCard.svg" alt="Business Card" />
				<img className="More2 RightFloat hUnitPad tPad" style={{marginLeft: "30%", top: "15%"}} src="./img/Smartphone.svg" alt="Scan Business Cards with your Smartphone" />
			</div>
		</section>
	</main>;
}
