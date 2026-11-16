import { buildLlmsTxt } from "@/app/[locale]/development-integrated-design/llms";

/**
 * /development-integrated-design/llms.txt – the English one, beside the address the page is linked by. A static
 * segment, so it wins over `[locale]`; the dot keeps next-intl's proxy from redirecting it to a locale.
 */
export const dynamic = "force-static";

export async function GET() {
	return new Response(await buildLlmsTxt("en"), {
		headers: { "Content-Type": "text/plain; charset=utf-8" },
	});
}
