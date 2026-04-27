import Link from "next/link";
import { CSSProperties } from "react";

/**
 * Section, that has a title, an aside on the left or right side, content and an associated link on it
 *
 * @param props
 * @returns
 */
export default function Section(
	props: {
		asideContainerStyle?: CSSProperties,
		inSectionStyle?: CSSProperties,
		style?: CSSProperties,
		title: string,
		aside?: React.ReactNode
		isLeftSide?: boolean,
		children: React.ReactNode
		link?: string | null,
	}
) {
	const isLeftSide = props.isLeftSide || false;
	const titleSpan = props.aside ? isLeftSide ? "s6 e13 ph-s1 ph-e5 ph-lNoPad" : "s1 e5 ph-e5 ph-rNoPad" : "s1 e10 ph-e5 ph-rNoPad";
	const contentSpan = props.aside ? isLeftSide ? "s6 e13 ph-s1 ph-e5 ph-lNoPad" : "s1 e7 ph-e5 ph-rNoPad" : "s1 e12 ph-e5";
	const link = props.link == null ? null : props.link ?? props.title;
	const hasLink = props.link != null;

	const OptionalLink = (props: {className: string, children: React.ReactElement, href: String | null, style?: CSSProperties}) => {
		if (hasLink) return <Link {...props as any} />
		return props.children;
	}

	const val = (props.children as any)[0];
	const isStringAsChild = typeof(val) == typeof ("");
	// console.log(typeof (props.children[0]) == typeof (""))

	const visualContent = <section className="flex" style={{ justifyContent: "center", ...props.style }}>
		<div className="vhGrid hFill" style={props.inSectionStyle}>
			{
				link ?
					<OptionalLink className={`${titleSpan}`} href={link}>
						<h2 className={`${titleSpan} hover-fg-l2 tPad decorationC-l4 hoverUnderlineAnimation`}>{props.title}</h2>
					</OptionalLink>
					: <h2 className={`${titleSpan} tPad decorationC-l4}`}>{props.title}</h2>
			}
			{isStringAsChild ?
				<p className={`${contentSpan} bPad`}>
					{props.children}
				</p> :
				<div className={`${contentSpan} bPad`}>
					{props.children}
				</div>}
			{!isLeftSide && props.aside &&
				<OptionalLink
					className="s9 e13 ph-s1 ph-e6 bg-l5 gr-s1 gr-e4 ph-gr-s3 lRound" href={link}
					style={{ height: "calc(100% - 8px - 8px)", marginTop: 8, marginBottom: 8, paddingLeft: 10, ...props.asideContainerStyle }}
				>
					<div className="flex FloatTrigger vFill Container" style={props.asideContainerStyle}>
						{props.aside}
					</div>
				</OptionalLink>
			}
			{isLeftSide && props.aside &&
				<OptionalLink className="s0 e4 ph-e5 bg-l5 gr-s1 gr-e4 ph-gr-s3 rRound" href={link}
					style={{ height: "calc(100% - 8px - 8px)", marginTop: 8, marginBottom: 8, paddingLeft: 10, ...props.asideContainerStyle }}
				>
					<div className="flex FloatTrigger vFill Container" style={props.asideContainerStyle}>
						{props.aside}
					</div>
				</OptionalLink>
			}
		</div>
	</section>

	return visualContent;
}