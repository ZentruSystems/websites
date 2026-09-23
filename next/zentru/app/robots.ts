import { projectBootstrap } from "@/app/[locale]/project-management/config";
import { MetadataRoute } from "next";

/**
 * Everything but the API is open – including to AI crawlers (GPTBot, ClaudeBot, PerplexityBot,
 * Google-Extended), which `*` covers, so none is named. Pages that shouldn't be in search say so
 * themselves with `noindex`; blocking them here would stop crawlers from ever reading that.
 */
export default function robots(): MetadataRoute.Robots {
	return {
		rules: { userAgent: "*", allow: "/", disallow: "/api/" },
		sitemap: `${projectBootstrap.siteUrl}/sitemap.xml`,
	};
}
