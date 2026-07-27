import { CSSProperties } from "react";
import style from "./transmission.module.css";

/**
 * A section with its text on one side and a clip or still on the other.
 *
 * `app/Section.tsx` drops the placement classes of its aside when no link is given, and
 * every section on this page is part of one long page rather than a link to somewhere else –
 * so this keeps the same 12 column layout without the link.
 */
export default function MediaSection(props: {
	title: string,
	media: React.ReactNode,
	isMediaLeft?: boolean,
	className?: string,
	style?: CSSProperties,
	children: React.ReactNode,
}) {
	const textSpan = props.isMediaLeft ? "s7 e12" : "s1 e6";
	const mediaSpan = props.isMediaLeft ? "s1 e6" : "s7 e12";

	return <section className={`vhGrid vPad ${style.mediaSectionGrid} ${props.className ?? ""}`} style={props.style}>
		<h2 className={`${textSpan} ph-s1 ph-e5 gr-s1`}>{props.title}</h2>
		<div className={`${textSpan} ph-s1 ph-e5 gr-s2 paragraphSpaceLarger`}>
			{props.children}
		</div>
		<div className={`${mediaSpan} ph-s1 ph-e5 gr-s1 gr-e3 ph-gr-s3 ${style.sectionMedia}`}>
			{props.media}
		</div>
	</section>;
}
