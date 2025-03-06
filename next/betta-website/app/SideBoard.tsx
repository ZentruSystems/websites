import styles from "./SideBoard.module.css";

export default function SideBoard(props: { src: string, alt?: string }) {
	return <div className={"s9 e13 ph-s4 ph-e6 bg-l4 lRound flex Container " + styles.SideBoard}>
		<img
			data-animated="true"
			className="More RightFloat ToUnitPad hUnitPad vCenter hFill ph-vUnitPad"
			src={props.src} alt={props.alt} />
	</div>;
}