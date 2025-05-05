import CatalogItem from "./CatalogItem";

export default function Catalog() {
	return <main>
		<CatalogItem
			title="Calendar + Todos"
			aside={<>
				<img className="abs hUnitPad tPad" src="./img/BusinessCard.svg" alt="Business Card" />
				<img
					className="More2 RightFloat hUnitPad tPad"
					style={{ marginLeft: "30%", top: "15%" }}
					src="./img/Smartphone.svg" alt="Scan Business Cards with your Smartphone" />
			</>}
		>
			Because it can be a real hassle to organize your business cards, the hundreds and hundreds you will  get over the years.<br />
			With this no more, just scan the card and it will create a virtual copy of it – categorized, named and ready to save to your contacts – with all the information so you can filter and find the people and companies you need.
		</CatalogItem>
	</main>;
}
