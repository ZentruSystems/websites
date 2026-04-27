import HorizontalDivider from "common/components/horizontalDivider/HorizontalDivider";
import HoverText from "../HoverText";

/**
 * This page should show, tell and showcase that we do design consultation for
 * UI (App, Web, Game), Audio and Music
 */
export default function DigitalExperiences() {
	return <>
		<section className="vFillView vBigPad hBigPad" style={{ display: "unset" }}>
			<h2 className="normal foreground">We can help you making your <HoverText
				default="product"
				onHover="project" /> an <span className="bold decorationC-fg hoverUnderlineAnimation">experience</span>.</h2>
			<p>To make customers feel what you mean.</p>
			<br />
			<br />
			<p>Our expertise contains: User interface design, Sonic design, Scoring and Music production</p>
			<br />
			<br />
			<p>Physical soul for the digital world.</p>
			<p>Many things we love are in the physical world, we want to provide that character and sould we all love in digital things as well</p>
		</section>
		<HorizontalDivider color="var(--l4)" />
		<section className="vBigPad hBigPad">
			<h2 className="normal foreground">User interfaces</h2>
			<p>Apps, Websites and Game interfaces, designed to solve problems, designed to be an experience.</p>
		</section>
		<section className="vBigPad hBigPad">
			<h2 className="normal foreground">Sonic design</h2>
			<p>We make sound effects, sweeping soundscapes and music in harmony to convey the right feelings.
				<br />
				<br />
				Video scores for film, animation and advertising
			</p>
		</section>
	</>;
}