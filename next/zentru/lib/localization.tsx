
export const defaultHtml = {
	br: (chunks) => <br />,
	hr: (chunks) => <hr />,
	span: (chunks) => <span>{chunks}</span>,
	i: (chunks) => <i>{chunks}</i>,
	p: (chunks) => <p>{chunks}</p>,
	b: (chunks) => <b>{chunks}</b>,
	strong: (chunks) => <strong>{chunks}</strong>,
	maxWidth: (chunks) => <p style={{maxWidth: "min(max(800px, 50%), 1200px)", width: "100%", placeSelf: "center", }}>{chunks}</p>,
	ul: (chunks) => <ul>{chunks}</ul>,
	li: (chunks) => <li>{chunks}</li>,
	h2: (chunks) => <h2>{chunks}</h2>,
	h3: (chunks) => <h3>{chunks}</h3>,
	h4: (chunks) => <h4>{chunks}</h4>,
}