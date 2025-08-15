import style from "./randomImages.module.css";

export default async function RandomImages(props: {
	className: string | undefined
}) {
	return <div className={props.className + " " + style.main}>
		<div className={"Container allRound bg-l1 liquidAll hoverZoom " + style.gridItem}>
			<img className="liquidAll hoverZoomMore" src="./PressKit/main.png" style={{ height: "100%", width: "100%", objectFit: "cover" }} />
		</div>
		<div className={"Container allRound bg-l1 liquidAll hoverZoom " + style.gridItem}>
			<img className="liquidAll hoverZoomMore" src="./PressKit/content_1.png" style={{ height: "100%", width: "100%", objectFit: "cover" }} />
		</div>
		<div className={"Container allRound bg-l1 liquidAll hoverZoom " + style.gridItem}>
			<img className="liquidAll hoverZoomMore" src="./PressKit/Frame 7.png" style={{ height: "100%", width: "100%", objectFit: "cover" }} />
		</div>
		<div className={"Container allRound bg-l1 liquidAll hoverZoom " + style.gridItem}>
			<img className="liquidAll hoverZoomMore" src="./PressKit/Debris Sign.png" style={{ width: "90%", margin: "5%", objectFit: "cover" }} />
		</div>
		<div className={"Container allRound bg-l1 liquidAll hoverZoom " + style.gridItem}>
			<img className="liquidAll hoverZoomMore" src="./PressKit/orb transparent.png" style={{ width: "90%", margin: "5%", objectFit: "cover" }} />
		</div>
	</div>
}
