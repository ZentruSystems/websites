export default function CatalogItem(
	props: {
		title: string,
		aside?: React.ReactNode
		isLeftSide?: boolean,
		children: React.ReactNode
	}
) {
	const isLeftSide = props.isLeftSide || false;
	const titleSpan = isLeftSide ? "s6 e10" : "s1 e5";
	const contentSpan = isLeftSide ? "s6 e13" : "s1 e7";

	return <section className="vhGrid">
		<h2 className={`${titleSpan} tPad`}>{props.title}</h2>
		<p className={`${contentSpan} bPad`}>
			{props.children}
		</p>
		{!isLeftSide && props.aside &&
			<div className="s9 e13 bg-l4 lRound flex FloatTrigger vFill Container"
				style={{height: "calc(100% - 8px - 8px)", gridRowStart: 1, gridRowEnd: 5, marginTop: 8, marginBottom: 8, paddingLeft: 10 }}
			>
				{props.aside}
			</div>
		}
		{isLeftSide && props.aside &&
			<div className="s0 e4 bg-l4 rRound flex FloatTrigger vFill Container"
				style={{height: "calc(100% - 8px - 8px)", gridRowStart: 1, gridRowEnd: 5, marginTop: 8, marginBottom: 8, paddingLeft: 10 }}
			>
				{props.aside}
			</div>
		}
	</section>
}