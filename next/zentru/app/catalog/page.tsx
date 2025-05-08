import CatalogItem from "./CatalogItem";

export default function Catalog() {
	return <main>
		<CatalogItem
			title="Calendar + Todos"
			aside={<>
				<img
					className="More2 RightFloat hUnitPad tPad"
					style={{ marginLeft: "30%", top: "15%" }}
					src="./img/Smartphone.svg" alt="Scan Business Cards with your Smartphone" />
			</>}
		>
			Because it can be a real hassle to organize your tasks, deadlines and events.<br />
			You probably use multiple apps already.<br />
			It shouldn't be this hard, we combine a really good calendar with a really good tasks manager.
			For both your projects as well as your personal tasks. For your meetings and birthdays.
		</CatalogItem>
	</main>;
}
