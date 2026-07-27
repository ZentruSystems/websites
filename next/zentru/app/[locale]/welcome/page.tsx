import { Metadata } from "next";
import { Platform, transmission } from "../products/transmission/config";
import WelcomeClient from "./WelcomeClient";

/**
 * Opened by the app on first launch as `/welcome?p=<macos|windows>&v=<app_version>`.
 *
 * Both parameters come from outside the site, so neither is trusted: the platform is
 * matched against the two we know and the version against a conservative pattern.
 */
export const metadata: Metadata = {
	title: `Welcome — ${transmission.brandPair}`,
	description: "Getting started with Transmission, and why it asks for Accessibility permission.",
	// The app links here, nobody should reach it from a search result
	robots: { index: false, follow: false },
};

function firstValue(value: string | string[] | undefined): string | undefined {
	return Array.isArray(value) ? value[0] : value;
}

function parsePlatform(value: string | undefined): Platform | null {
	return value == "macos" || value == "windows" ? value : null;
}

function parseAppVersion(value: string | undefined): string | null {
	return value && /^[\w.-]{1,32}$/.test(value) ? value : null;
}

export default async function WelcomePage({ searchParams }: {
	searchParams: Promise<Record<string, string | string[] | undefined>>,
}) {
	const params = await searchParams;

	return <WelcomeClient
		platform={parsePlatform(firstValue(params.p))}
		appVersion={parseAppVersion(firstValue(params.v))}
	/>;
}
