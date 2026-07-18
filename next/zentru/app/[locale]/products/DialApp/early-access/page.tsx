"use client";

import { useTranslations } from "next-intl";
import Signup from "../../baseSignup";

export default function DialAppEarlyAccess() {
	const tDialApp = useTranslations("Products.DialApp.earlyAccess");

	return <>
		<Signup
			apiPath="/api/products/DialApp/early-access"
			headline={tDialApp("getEarlyAccess")}
			signupButtonText={tDialApp("signupEarlyAccess-action")}
			successActions={<div style={{ display: "flex", placeContent: "center", marginTop: 10 }}>
				<button className="primary hover hCenter"><a href="/download/DialApp.zip">Download DialApp</a></button>
			</div>}
		/>
	</>;
}