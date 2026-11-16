import { buildLlmsTxt } from "@/app/[locale]/development-integrated-design/llms";
import { routing } from "@/i18n/routing";
import { hasLocale } from "next-intl";

/** /de/development-integrated-design/llms.txt, next to the German page. The English one is the same as /development-integrated-design/llms.txt. */
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
