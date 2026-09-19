import { ReactNode } from "react";
import style from "./blocks.module.css";

/**
 * The last section before the footer: what the visitor gets, and the one action to take.
 *
 * Set apart by scale and space rather than colour – a contrasting band would need an inverted
 * button, and the call to action should look the same wherever it appears.
 */
export default function CtaBand(props: {
	title: string,
	intro?: string,
	items?: { key: string, text: string }[],
	cta: ReactNode,
	/** Qualifier and risk reducer, under the button */
	note?: string,
	id?: string,
}) {
	return <section id={props.id} className={`vhGrid bg-l5 ${style.block} ${style.tinted} ${style.ctaBand}`}>
		<div className={`s2 e11 ph-s1 ph-e5 ${style.ctaBandInner}`}>
			<h2 className={`light ${style.ctaBandTitle}`}>{props.title}</h2>
			{props.intro && <p>{props.intro}</p>}
			{props.items && <ul className={style.checkList}>
				{props.items.map(item => <li key={item.key}>
					<span className={style.marker}><span className={style.check} aria-hidden />{item.text}</span>
				</li>)}
			</ul>}
			{props.cta}
			{props.note && <p className={style.note}>{props.note}</p>}
		</div>
	</section>;
}
