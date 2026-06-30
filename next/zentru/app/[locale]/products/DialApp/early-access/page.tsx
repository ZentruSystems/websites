import { useTranslations } from "next-intl";
import Signup from "../../baseSignup";

export default function DialAppEarlyAccess() {
	const tDialApp = useTranslations("Products.DialApp.earlyAccess");
	return <Signup
		apiPath="/api/products/DialApp/early-access"
		headline={tDialApp("getEarlyAccess")}
		signupButtonText={tDialApp("signupEarlyAccess-action")}
	/>;
}