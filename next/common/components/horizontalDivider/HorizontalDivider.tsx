import styles from "./HorizontalDivider.module.css";

export default function HorizontalDivider(props: {
	className?: string | undefined,
	color?: string | undefined
}) {
	return <div
		className={styles.Separator + " HorizontalDivider Divider " + props.className}
	>
		<div className="bg-bg hFill vFill" style={{backgroundColor: props.color}}/>
	</div>;
}