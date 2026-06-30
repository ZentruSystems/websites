import { useTranslations } from "next-intl";
import Signup from "../../baseSignup";

export default function RecEarlyAccess() {
	const tRec = useTranslations("Products.rec.earlyAccess");
	return <Signup
		apiPath="/api/products/.rec/early-access"
		headline={tRec("getEarlyAccess")}
		signupButtonText={tRec("signupEarlyAccess-action")}
	/>;
}