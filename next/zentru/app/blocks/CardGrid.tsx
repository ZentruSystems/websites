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
	/**
	 * Where a tag sits. At the foot it lines up across a row however long each card's text is,
	 * which reads as a footnote; beside the title it reads as a label on the card itself.
	 */
	tagPosition?: "foot" | "topRight",
}) {
	const Heading = props.headingLevel ?? "h3";
	const columns = { 2: style.cols2, 3: style.cols3, 4: style.cols4 }[props.columns];
	const onTop = props.tagPosition == "topRight";

	return <ul className={`${style.cards} ${columns}`}>
		{props.items.map(item => {
			const tag = item.tag
				&& <p className={`${style.tag} ${item.tag.accent ? style.tagAccent : ""}`}>{item.tag.label}</p>;
			const heading = <Heading className={style.cardTitle}>{item.title}</Heading>;

			return <li key={item.key} className={style.card} data-lift>
				{/* Title and tag share a row, so the tag can't cover the title however long it is */}
				{onTop ? <div className={style.cardHead}>{heading}{tag}</div> : heading}
				{typeof item.text == "string"
					? <p>{item.text}</p>
					: <div className={style.cardText}>{item.text}</div>}
				{tag && !onTop && <div className={style.cardFoot}>{tag}</div>}
			</li>;
		})}
	</ul>;
}
