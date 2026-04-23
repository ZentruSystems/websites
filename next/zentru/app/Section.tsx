import Link from "next/link";

/**
 * Section, that has a title, an aside on the left or right side, content and an associated link on it
 *
 * @param props
 * @returns
 */
export default function Section(
	props: {
		title: string,
		aside?: React.ReactNode
		isLeftSide?: boolean,
		children: React.ReactNode
		link?: string,
	}
) {
	const isLeftSide = props.isLeftSide || false;
	const titleSpan = isLeftSide ? "s6 e13 ph-s2 ph-e5 ph-lPad" : "s1 e5 ph-e4 ph-rPad";
	const contentSpan = isLeftSide ? "s6 e13 ph-s2 ph-e5 ph-lPad" : "s1 e7 ph-e4 ph-rPad";
	const link = props.link ?? props.title;

	console.log(props.link);

	const visualContent = <section className="vhGrid">
		<h2 className={`${titleSpan} tPad hover-fg-l2 decorationC-l3 hoverUnderlineAnimation`}>{props.title}</h2>
		<p className={`${contentSpan} bPad`}>
			{props.children}
		</p>
		{!isLeftSide && props.aside &&
			<div className="s9 e13 ph-s5 ph-e6 bg-l4 lRound flex FloatTrigger vFill Container"
				style={{height: "calc(100% - 8px - 8px)", gridRowStart: 1, gridRowEnd: 5, marginTop: 8, marginBottom: 8, paddingLeft: 10 }}
			>
				{props.aside}
			</div>
		}
		{isLeftSide && props.aside &&
			<div className="s0 e4 ph-e1 bg-l4 rRound flex FloatTrigger vFill Container"
				style={{height: "calc(100% - 8px - 8px)", gridRowStart: 1, gridRowEnd: 5, marginTop: 8, marginBottom: 8, paddingLeft: 10 }}
			>
				{props.aside}
			</div>
		}
	</section>

	if (link == null) return visualContent;

	return <Link href={link}>
		{visualContent}
	</Link>
}