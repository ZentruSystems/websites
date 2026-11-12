import { CSSProperties } from "react";
import style from "./blocks.module.css";
import MediaCarousel, { MediaItem } from "./MediaCarousel";

export type CaseStudy = {
	key: string,
	title: string,
	challenge: string,
	work: string,
	result: string,
	/** Qualifies the case – what kind of involvement it was – just under its title */
	tag?: { label: string, accent?: boolean },
	/** Images or videos of the work, as a carousel at the top of the case */
	media?: MediaItem[],
};

/**
 * Situation, work, result – the result set apart, since it is what a visitor is looking for.
 */
export default function CaseStudies(props: {
	/** `previous` and `next` name the carousel's buttons – needed only when a case has media */
	labels: { challenge: string, work: string, result: string, previous?: string, next?: string },
	items: CaseStudy[],
}) {
	return <div className={style.cases} style={{ "--count": props.items.length } as CSSProperties}>
		{props.items.map(item => <article key={item.key} className={style.case} data-lift>
			{item.media && item.media.length > 0 && <MediaCarousel
				items={item.media}
				label={item.title}
				previousLabel={props.labels.previous ?? ""}
				nextLabel={props.labels.next ?? ""}
			/>}
			<h3 className={style.cardTitle}>{item.title}</h3>
			{item.tag && <p className={`${style.tag} ${item.tag.accent ? style.tagAccent : ""}`}>
				{item.tag.label}
			</p>}
			<dl className={style.caseFacts}>
				<dt>{props.labels.challenge}</dt>
				<dd><p>{item.challenge}</p></dd>
				<dt>{props.labels.work}</dt>
				<dd><p>{item.work}</p></dd>
				<dt>{props.labels.result}</dt>
				<dd className={style.result}><p>{item.result}</p></dd>
			</dl>
		</article>)}
	</div>;
}
