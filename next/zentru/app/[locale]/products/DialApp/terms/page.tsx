import { defaultHtml } from "@/lib/localization";
import { useTranslations } from "next-intl";

export default function DialAppTermsAndConditions() {
	const t = useTranslations("Products.DialApp.terms");

	return <div className="Pad">
		<h2>{t("headline")}</h2>
		<p>{t("lastUpdate")}</p>
		<div>
			{t.rich("terms", {
				...defaultHtml,
				mailLink: (chunks) => <a href={`mailto:${chunks}`}>{chunks}</a>
			})}
		</div>
	</div>
}