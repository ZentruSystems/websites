import { ReactNode } from "react";
import style from "./blocks.module.css";

/**
 * The page's one `h1`, with who it is for above it and the call to action below it.
 *
 * Tinted, so the proof bar that follows can sit on the same band.
 */
export default function Hero(props: {
	/** Rich, so part of it can be left out on a phone (`notOnPhone`) */
	eyebrow?: ReactNode,
	title: string,
	/** One paragraph */
	children: ReactNode,
	cta?: ReactNode,
	/** The risk reducer under the button */
	note?: string,
	id?: string,
}) {
	return <section id={props.id} className={`vhGrid bg-l5 ${style.block} ${style.tinted} ${style.hero}`}>
		<div className="s1 e10 ph-s1 ph-e5">
			{props.eyebrow && <p className={style.eyebrow}>{props.eyebrow}</p>}
			<h1 className={`light ${style.heroTitle}`}>{props.title}</h1>
			<p className={style.lead}>{props.children}</p>
			{props.cta}
			{props.note && <p className={style.note}>{props.note}</p>}
		</div>
	</section>;
}
