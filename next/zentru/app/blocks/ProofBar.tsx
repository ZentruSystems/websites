import style from "./blocks.module.css";

export type ProofItem = { key: string, title: string, text: string };

/**
 * A compact row of evidence directly under the hero, on the same band.
 *
 * Only what can be backed up belongs here – kinds of work done, not logos or numbers nobody supplied.
 */
export default function ProofBar(props: { label: string, items: ProofItem[] }) {
	return <section className={`vhGrid bg-l5 ${style.block} ${style.tinted} ${style.proofBar}`}>
		<div className={`s1 e12 ph-s1 ph-e5 ${style.proofInner}`}>
			<h2 className={style.eyebrow}>{props.label}</h2>
			<ul className={style.proofList}>
				{props.items.map(item => <li key={item.key}>
					<p className={style.proofTitle}>{item.title}</p>
					<p className={style.proofText}>{item.text}</p>
				</li>)}
			</ul>
		</div>
	</section>;
}
