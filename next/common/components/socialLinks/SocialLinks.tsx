import style from "./SocialLinks.module.css";

type AdditionalProps = {
	/** if truthy shows linkedin */
	linkedIn?: boolean,

	/** if truthy shows instagram */
	instagram?: boolean,

	/** if truthy shows reddit */
	reddit?: boolean,

	/** if truthy it will show icons in monochrome */
	monochrome?: boolean,

	/** If truthy it will only show smaller icons in a row */
	onlyIcons?: boolean,
}

export type SocialLinksProps = AdditionalProps &  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>

export default function SocialLinks(props: SocialLinksProps) {
	// const linkedIn = <

	const linkedInSvg = (
		<svg viewBox="0 0 24 24" fill="currentColor">
			<path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
		</svg>
	);

	const instagramSvg = (
		<svg viewBox="0 0 24 24" fill="currentColor">
			<path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.322a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z"/>
		</svg>
	);

	const redditSvg = (
		<svg viewBox="0 0 24 24" fill="currentColor">
			<path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.385 4.859-7.181 4.859-3.796 0-7.182-2.165-7.182-4.859a3.5 3.5 0 0 1 .476-1.465 1.752 1.752 0 0 1-1.032-1.61c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.53l.531-2.484-1.776.358a1.25 1.25 0 0 0-1.486.999 1.25 1.25 0 1 0 2.426-1.094l4.024-.816c.11-.024.21.072.21.191v.11a1.25 1.25 0 1 0 1.24-1.25zm-5.092 5.769c-.588 0-1.063.475-1.063 1.063s.475 1.063 1.063 1.063 1.063-.475 1.063-1.063-.475-1.063-1.063-1.063zm3.144 0c-.588 0-1.063.475-1.063 1.063s.475 1.063 1.063 1.063 1.063-.475 1.063-1.063-.475-1.063-1.063-1.063z"/>
		</svg>
	);

	const links = [
		props.linkedIn && { icon: linkedInSvg, label: "LinkedIn", url: "https://www.linkedin.com/company/zentru-systems" },
		props.instagram && { icon: instagramSvg, label: "Instagram", url: "https://www.instagram.com/zentru.systems/" },
		props.reddit && { icon: redditSvg, label: "Reddit", url: "https://reddit.com/u/zentrusystems" },
	].filter(link => !!link);

	return (
		<div className={style.SocialLinks} {...props}>
			{links && links.map(link => (
				<a key={link.label} href={link.url} title={link.label} className={style.Link}>
					{link.icon}
				</a>
			))}
		</div>
	);
}