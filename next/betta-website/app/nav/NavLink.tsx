'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

/**
 * Renders a single link for use inside the nav-bar, that indicates if the current page is where this is going.
 */
export default function NavLink({
	props,
	children,
}: {
	props: { name: string, href?: string}
	children: string
}): ReactComponent {
	const pathname = usePathname();
	const [currentPage, setCurrentPage] = useState();

	useEffect(() => {
		setCurrentPage(pathname);
		console.log(pathname);
	}, [pathname])

	const isCurrentPage = currentPage == (props?.name ?? children).toLowerCase();

	const linkUrl = (props?.href ?? props?.name ?? children).toLowerCase();

	return <Link className={`${isCurrentPage && "current"}`} href={linkUrl}>{children}</Link>
}