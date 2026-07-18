import { defaultHtml } from "@/lib/localization";
import { useTranslations } from "next-intl";

export default function DialAppPrivacyPolicy() {
	const t = useTranslations("Products.DialApp.privacyPolicy");

	return <div className="Pad">
		<h2>{t("headline")}</h2>
		<p>{t("lastUpdate")}</p>
		<div>
			{t.rich("policy", defaultHtml)}
		</div>
	</div>
}