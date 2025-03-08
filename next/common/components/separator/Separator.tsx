import styles from "./Separator.module.css";

export default function Separator() {
	return <div
		className={"vAltMarg rGap " + styles.Separator}
	>
		<div className="bg-bg hFill vFill" />
	</div>;
}