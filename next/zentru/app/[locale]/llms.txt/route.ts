import { buildLlmsTxt } from "@/app/[locale]/project-management/llms";
import { routing } from "@/i18n/routing";
import { hasLocale } from "next-intl";

/** /de/llms.txt, next to the German pages. /en/llms.txt is the same as /llms.txt. */
export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
	return routing.locales.map(locale => ({ locale }));
}

export async function GET(_request: Request, { params }: { params: Promise<{ locale: string }> }) {
	const { locale } = await params;
	if (!hasLocale(routing.locales, locale)) return new Response(null, { status: 404 });

	return new Response(await buildLlmsTxt(locale), {
		headers: { "Content-Type": "text/plain; charset=utf-8" },
	});
}
