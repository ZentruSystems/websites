
export const defaultHtml = {
	br: () => <br />,
	span: (chunks) => <span>{chunks}</span>,
	i: (chunks) => <i>{chunks}</i>,
	p: (chunks) => <p>{chunks}</p>,
	maxWidth: (chunks) => <p style={{maxWidth: "min(max(800px, 50%), 1200px)", width: "100%", placeSelf: "center", }}>{chunks}</p>,
	ul: (chunks) => <ul>{chunks}</ul>,
	li: (chunks) => <li>{chunks}</li>,
}