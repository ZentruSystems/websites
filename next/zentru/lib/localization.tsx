
export const defaultHtml = {
	br: () => <br />,
	span: (chunks) => <span>{chunks}</span>,
	i: (chunks) => <i>{chunks}</i>,
	p: (chunks) => <p>{chunks}</p>
}