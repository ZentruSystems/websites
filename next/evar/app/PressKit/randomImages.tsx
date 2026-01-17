import style from "./randomImages.module.css";

export default async function RandomImages(props: {
	className: string | undefined
}) {
	return <div className={props.className + " " + style.main}>
		<div className={"Container allRound bg-l1 liquidAll hoverZoom " + style.gridItem}>
			<img className="liquidAll hoverZoomMore" src="/PressKit/01_Screenshot.png" style={{ height: "100%", width: "100%", objectFit: "cover" }} />
		</div>
		<div className={"Container allRound bg-l1 liquidAll hoverZoom " + style.gridItem}>
			<img className="liquidAll hoverZoomMore" src="/PressKit/02_Screenshot.png" style={{ height: "100%", width: "100%", objectFit: "cover" }} />
		</div>
		<div className={"Container allRound bg-l1 liquidAll hoverZoom " + style.gridItem}>
			<img className="liquidAll hoverZoomMore" src="/PressKit/03_Screenshot.png" style={{ height: "100%", width: "100%", objectFit: "cover" }} />
		</div>
		<div className={"Container allRound bg-d4-fixed liquidAll hoverZoom " + style.gridItem}>
			<img className="liquidAll hoverZoomMore" src="/PressKit/Debris Sign 2.png" style={{ width: "90%", margin: "5%", objectFit: "cover" }} />
		</div>
		<div className={"Container allRound bg-d4-fixed liquidAll hoverZoom " + style.gridItem}>
			<img className="liquidAll hoverZoomMore" src="/PressKit/orb transparent.png" style={{ width: "90%", margin: "5%", objectFit: "cover" }} />
		</div>
	</div>
}
