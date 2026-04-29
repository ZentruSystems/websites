'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

/**
 * Renders a single link for use inside the nav-bar, that indicates if the current page is where this is going.
 */
export default function NavLink(props: {
	href: string,
	children: string
}) {
	const pathname = usePathname();
	const [currentPage, setCurrentPage] = useState<string>("");

	useEffect(() => {
		const converted = pathname.replace("/", "");
		setCurrentPage(converted);
	}, [pathname]);

	const isCurrentPage = currentPage == props.href.toLowerCase();
	// console.log(isCurrentPage);

	const linkUrl = props.href.toLowerCase();
	// console.log(`NavLink: ${linkUrl}`);

	return <Link className={`${isCurrentPage ? "Current" : null}`} href={linkUrl}>{props.children}</Link>
}