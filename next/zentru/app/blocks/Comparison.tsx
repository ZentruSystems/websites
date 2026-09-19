import style from "./blocks.module.css";

export type ComparisonRow = { key: string, before: string, after: string };

/**
 * Before and after, one row per pair, so each problem sits next to what replaces it.
 *
 * A table rather than two lists: the pairing is the point, and a screen reader announces each
 * cell with its column heading.
 */
export default function Comparison(props: { beforeLabel: string, afterLabel: string, rows: ComparisonRow[] }) {
	return <table className={style.comparison}>
		<thead>
			<tr>
				<th scope="col" className={style.before}>{props.beforeLabel}</th>
				<th scope="col" className={style.after}>{props.afterLabel}</th>
			</tr>
		</thead>
		<tbody>
			{props.rows.map(row => <tr key={row.key}>
				<td className={style.before}>
					<span className={style.marker}><span className={style.dash} aria-hidden />{row.before}</span>
				</td>
				<td className={style.after}>
					<span className={style.marker}><span className={style.check} aria-hidden />{row.after}</span>
				</td>
			</tr>)}
		</tbody>
	</table>;
}
