import styles from "./VerticalDivider.module.css";

export default function VerticalDivider(props: {
	className?: string,
	color?: string
}) {
	return <div
		className={styles.Separator + " VerticalDivider Divider " + props.className}
	>
		<div className="bg-bg hFill vFill" style={{color: props.color}}/>
	</div>;
}