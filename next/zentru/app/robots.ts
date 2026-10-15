import { siteUrl } from "@/lib/seo";
import { MetadataRoute } from "next";

/**
 * Everything may be crawled, AI crawlers included – being found and cited by assistants is part of
 * the point (see public/llms.txt). Only the API is kept out; there is nothing in it to read.
 *
 * The pages that must stay out of results – /project-bootstrap/booked and
 * /products/speedswitch/welcome – say `noindex` themselves. Disallowing them here would stop
 * crawlers from ever fetching them, so they would never see that and could still list the URL.
 */
export default function robots(): MetadataRoute.Robots {
	return {
		rules: [{ userAgent: "*", allow: "/", disallow: "/api/" }],
		sitemap: `${siteUrl}/sitemap.xml`,
	};
}
