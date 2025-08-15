import { PropsWithChildren } from "react";

export default function HiddenButton(props: PropsWithChildren & {
	download?: string | undefined,
	href?: string | undefined,
	className?: string | undefined,
	style?: React.CSSProperties | undefined,
}) {
	const classAdditions = props.className ?? "";

	return <a
		style={{ display: "block", overflow: "visible", ...props.style }}
		className={'allRound ph-allRoundBigRespunded bg-accentColor liquidAll hiddenButton ' + classAdditions}
		download={props.download} href={props.href}
	>
		{props.children}
	</a>
}