import { buildLlmsTxt } from "@/app/[locale]/project-management/llms";

/**
 * /llms.txt – where AI tools look for it, so it is the English one. A static segment, so it wins
 * over `[locale]`; the dot keeps next-intl's proxy from redirecting it to a locale.
 */
export const dynamic = "force-static";

export async function GET() {
	return new Response(await buildLlmsTxt("en"), {
		headers: { "Content-Type": "text/plain; charset=utf-8" },
	});
}
