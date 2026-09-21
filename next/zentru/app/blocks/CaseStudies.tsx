import { CSSProperties } from "react";
import style from "./blocks.module.css";

export type CaseStudy = {
	key: string,
	title: string,
	challenge: string,
	work: string,
	result: string,
	/** Qualifies the case – what kind of involvement it was – just under its title */
	tag?: { label: string, accent?: boolean },
};

/**
 * Situation, work, result – the result set apart, since it is what a visitor is looking for.
 */
export default function CaseStudies(props: {
	labels: { challenge: string, work: string, result: string },
	items: CaseStudy[],
}) {
	return <div className={style.cases} style={{ "--count": props.items.length } as CSSProperties}>
		{props.items.map(item => <article key={item.key} className={style.case} data-lift>
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
