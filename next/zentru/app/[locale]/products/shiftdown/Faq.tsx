import { getTranslations } from "next-intl/server";
import LinuxInterest from "./LinuxInterest";
import { faqKeys } from "./content";
import style from "./shiftdown.module.css";

export default async function Faq() {
	const t = await getTranslations("Products.shiftdown.faq.items");

	return <>
		{faqKeys.map(key => <details key={key} className={style.faqItem}>
			<summary className={style.faqQuestion}>{t(`${key}.question`)}</summary>
			<p className={style.faqAnswer}>{t(`${key}.answer`)}</p>
			{/* The one answer that can do something about itself */}
			{key == "linux" && <LinuxInterest />}
		</details>)}
	</>;
}
