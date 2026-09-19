import { ReactNode } from "react";
import style from "./blocks.module.css";

/**
 * A full-width section: heading, optional intro, optional aside, and a body the other blocks go in.
 *
 * Bands alternate between tinted (`bg-l5`) and plain, the way the product pages do – the page
 * decides which, since only it knows what comes before and after.
 */
export default function Band(props: {
	title: string,
	intro?: ReactNode,
	/** Placed to the right of the heading and intro; below them on a phone */
	aside?: ReactNode,
	tinted?: boolean,
	id?: string,
	children?: ReactNode,
}) {
	const headSpan = props.aside ? "s1 e7" : "s1 e12";

	return <section
		id={props.id}
		className={`vhGrid vPad ${style.block} ${props.tinted ? `bg-l5 ${style.tinted}` : ""}`}
	>
		{/*
			Heading and intro share one cell. As two rows next to a taller aside, the aside's height
			would be split between them and open a gap under the heading.
		*/}
		<div className={`${headSpan} ph-s1 ph-e5 gr-s1 ${style.bandHead}`}>
			<h2>{props.title}</h2>
			{props.intro && <div className={`paragraphSpaceLarger ${style.intro}`}>{props.intro}</div>}
		</div>
		{props.aside && <div className={`s9 e12 ph-s1 ph-e5 gr-s1 ph-gr-s2 ${style.aside}`}>
			{props.aside}
		</div>}
		{props.children && <div className={`s1 e12 ph-s1 ph-e5 ${style.bandBody}`}>
			{props.children}
		</div>}
	</section>;
}
