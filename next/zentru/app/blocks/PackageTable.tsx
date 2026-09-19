import style from "./blocks.module.css";

export type PackageColumn = {
	key: string,
	/** "The default", "Upgrade" – what makes the relationship between the packages obvious */
	tag: string,
	name: string,
	summary: string,
	/** "Choose this if …" – the line that lets a visitor pick without reading the table */
	fit: string,
	price: string,
	isUpgrade?: boolean,
};

/** `included` has one entry per package, in the order of `packages` */
export type PackageRow = { key: string, label: string, included: boolean[] };

/**
 * The packages side by side: a card each saying who it is for, then what each one includes.
 *
 * No button per package – choosing happens on the call, and a second action here would compete
 * with the one the page is built around.
 */
export default function PackageTable(props: {
	caption: string,
	featureLabel: string,
	includedLabel: string,
	notIncludedLabel: string,
	priceLabel: string,
	packages: PackageColumn[],
	rows: PackageRow[],
}) {
	return <>
		<div className={style.packageCards}>
			{props.packages.map(pkg => <div key={pkg.key} className={`${style.packageCard} ${pkg.isUpgrade ? style.packageUpgrade : ""}`}>
				<p className={`${style.tag} ${pkg.isUpgrade ? style.tagAccent : ""}`}>{pkg.tag}</p>
				<h3 className={style.packageName}>{pkg.name}</h3>
				<p className={style.packageSummary}>{pkg.summary}</p>
				<p className={style.packageFit}>{pkg.fit}</p>
			</div>)}
		</div>
		<table className={style.packageTable}>
			<caption className={style.visuallyHidden}>{props.caption}</caption>
			<colgroup>
				<col />
				{props.packages.map(pkg => <col key={pkg.key} />)}
			</colgroup>
			<thead>
				<tr>
					<th scope="col">{props.featureLabel}</th>
					{props.packages.map(pkg => <th key={pkg.key} scope="col">{pkg.name}</th>)}
				</tr>
			</thead>
			<tbody>
				{props.rows.map(row => <tr key={row.key}>
					<th scope="row">{row.label}</th>
					{props.packages.map((pkg, index) => <td key={pkg.key}>
						{row.included[index]
							? <span className={style.check} role="img" aria-label={props.includedLabel} />
							: <span className={style.dash} role="img" aria-label={props.notIncludedLabel} />}
					</td>)}
				</tr>)}
			</tbody>
			<tfoot>
				<tr>
					<th scope="row">{props.priceLabel}</th>
					{props.packages.map(pkg => <td key={pkg.key}>{pkg.price}</td>)}
				</tr>
			</tfoot>
		</table>
	</>;
}
