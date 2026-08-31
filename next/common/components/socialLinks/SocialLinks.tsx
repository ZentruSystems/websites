import style from "./SocialLinks.module.css";

export type Account = "zentru" | "personal";

type Network = "linkedIn" | "instagram" | "reddit" | "github";

/** TODO: the entries still reading [PLACEHOLDER] are the accounts nobody has handed over yet. */
const addresses: Record<Account, Partial<Record<Network, string>>> = {
	zentru: {
		linkedIn: "https://www.linkedin.com/company/zentru-systems",
		instagram: "https://www.instagram.com/zentru.systems/",
		reddit: "https://reddit.com/u/zentrusystems",
	},
	personal: {
		linkedIn: "[PLACEHOLDER]",
		instagram: "[PLACEHOLDER]",
		github: "[PLACEHOLDER]",
	},
};

type AdditionalProps = {
	/** if truthy shows linkedin */
	linkedIn?: boolean,

	/** if truthy shows instagram */
	instagram?: boolean,

	/** if truthy shows reddit */
	reddit?: boolean,

	/** if truthy shows github */
	github?: boolean,

	/**
	 * Whose accounts to link to. Defaults to the company, so callers that predate this
	 * prop keep pointing where they always did.
	 */
	account?: Account,

	/** if truthy it will show icons in monochrome */
	monochrome?: boolean,

	/** If truthy it will only show smaller icons in a row */
	onlyIcons?: boolean,
}

export type SocialLinksProps = AdditionalProps & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>

export default function SocialLinks(props: SocialLinksProps) {
	// const linkedIn = <

	const linkedInSvg = (
		<svg viewBox="0 0 24 24" fill="currentColor">
			<path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
		</svg>
	);

	const instagramSvg = (
		<svg viewBox="0 0 24 24" fill="currentColor">
			<path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.322a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z" />
		</svg>
	);

	const redditSvg = (
		<svg viewBox="0 0 24 24" fill="currentColor">
			<path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.385 4.859-7.181 4.859-3.796 0-7.182-2.165-7.182-4.859a3.5 3.5 0 0 1 .476-1.465 1.752 1.752 0 0 1-1.032-1.61c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.53l.531-2.484-1.776.358a1.25 1.25 0 0 0-1.486.999 1.25 1.25 0 1 0 2.426-1.094l4.024-.816c.11-.024.21.072.21.191v.11a1.25 1.25 0 1 0 1.24-1.25zm-5.092 5.769c-.588 0-1.063.475-1.063 1.063s.475 1.063 1.063 1.063 1.063-.475 1.063-1.063-.475-1.063-1.063-1.063zm3.144 0c-.588 0-1.063.475-1.063 1.063s.475 1.063 1.063 1.063 1.063-.475 1.063-1.063-.475-1.063-1.063-1.063z" />
		</svg>
	);

	const githubSvg = (
		<svg viewBox="0 0 24 24" fill="currentColor">
			<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
		</svg>
	);

	const url = addresses[props.account ?? "zentru"];

	const links = [
		props.linkedIn && url.linkedIn && { icon: linkedInSvg, label: "LinkedIn", url: url.linkedIn },
		props.instagram && url.instagram && { icon: instagramSvg, label: "Instagram", url: url.instagram },
		props.reddit && url.reddit && { icon: redditSvg, label: "Reddit", url: url.reddit },
		props.github && url.github && { icon: githubSvg, label: "GitHub", url: url.github },
	].filter(link => !!link);

	return (
		<div className={style.SocialLinks} style={props.style} id={props.id}>
			{links && links.map(link => (
				<a key={link.label} href={link.url} title={link.label} className={style.Link}>
					{link.icon}
				</a>
			))}
		</div>
	);
}