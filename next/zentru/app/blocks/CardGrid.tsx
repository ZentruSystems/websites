import { ReactNode } from "react";
import style from "./blocks.module.css";

export type CardItem = {
	key: string,
	title: string,
	/** A string, or rich content – a list, several paragraphs */
	text: ReactNode,
	tag?: { label: string, accent?: boolean },
};

/**
 * Title and text cards in a fixed number of columns, two on a tablet and one on a phone.
 *
 * Fixed rather than auto-fit so six items are two rows of three, not four and an orphan.
 */
export default function CardGrid(props: {
	items: CardItem[],
	columns: 2 | 3 | 4,
	/** h3 under a band's h2; h4 when the grid sits under a sub-heading of its own */
	headingLevel?: "h3" | "h4",
}) {
	const Heading = props.headingLevel ?? "h3";
	const columns = { 2: style.cols2, 3: style.cols3, 4: style.cols4 }[props.columns];

	return <ul className={`${style.cards} ${columns}`}>
		{props.items.map(item => <li key={item.key} className={style.card}>
			<Heading className={style.cardTitle}>{item.title}</Heading>
			{typeof item.text == "string"
				? <p>{item.text}</p>
				: <div className={style.cardText}>{item.text}</div>}
			{item.tag && <div className={style.cardFoot}>
				<p className={`${style.tag} ${item.tag.accent ? style.tagAccent : ""}`}>{item.tag.label}</p>
			</div>}
		</li>)}
	</ul>;
}
