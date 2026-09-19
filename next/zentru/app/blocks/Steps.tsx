import { CSSProperties } from "react";
import style from "./blocks.module.css";

export type StepItem = { key: string, title: string, text: string };

/**
 * A numbered sequence: across the page on a wide screen, a line down the side on a narrow one.
 */
export default function Steps(props: {
	items: StepItem[],
	/** Marks the last step as one that doesn't finish, and says so under it */
	ongoingLabel?: string,
	headingLevel?: "h3" | "h4",
}) {
	const Heading = props.headingLevel ?? "h3";
	const lastIndex = props.items.length - 1;

	return <ol className={style.steps} style={{ "--count": props.items.length } as CSSProperties}>
		{props.items.map((item, index) => {
			const isOngoing = props.ongoingLabel != null && index == lastIndex;

			return <li key={item.key} className={`${style.step} ${isOngoing ? style.stepOngoing : ""}`}>
				{/* The list is ordered, so assistive tech already announces the position */}
				<span className={style.stepNumber} aria-hidden>{String(index + 1).padStart(2, "0")}</span>
				<Heading className={style.cardTitle}>{item.title}</Heading>
				<p>{item.text}</p>
				{isOngoing && <p className={`${style.tag} ${style.tagAccent}`}>{props.ongoingLabel}</p>}
			</li>;
		})}
	</ol>;
}
