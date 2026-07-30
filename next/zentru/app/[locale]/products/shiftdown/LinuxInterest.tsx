"use client";

import Spinner from "common/components/spinner/Spinner";
import { useTranslations } from "next-intl";
import { useSignup } from "../baseSignup";
import { readSource } from "./acquisitionSource";
import { shiftDown } from "./config";
import style from "./shiftdown.module.css";

/**
 * Interest in a Linux version, which is how the demand for one gets measured.
 * Lives inside the FAQ answer that says there isn't one yet.
 *
 * Shares `useSignup` with the early access pages but not their layout: those are a whole
 * centred viewport, and this has to fit inside an open FAQ answer.
 */
export default function LinuxInterest() {
	const t = useTranslations("Products.shiftdown.linuxInterest");
	const tAlways = useTranslations("Always");

	const { email, setEmail, isEmailValid, sending, result, submit } = useSignup({
		apiPath: "/api/products/shiftdown/linux-interest",
		// Read at submit time: the token is only in localStorage, not in this component's state
		extraFields: () => ({ src: readSource() }),
	});

	if (result?.error == false) {
		return <p className={style.interestDone}>
			{t(result.alreadySignedUp ? "alreadySignedUp" : "success")}
		</p>;
	}

	return <div className={style.interest}>
		<p>{t("pitch", { price: shiftDown.price })}</p>
		<form
			className={style.interestForm}
			onSubmit={event => {
				event.preventDefault();
				submit();
			}}
		>
			<label htmlFor="linux-interest-email">{tAlways("email")}</label>
			<input
				id="linux-interest-email"
				name="email"
				type="email"
				required
				value={email}
				onChange={event => setEmail(event.currentTarget.value)}
			/>
			<button type="submit" className={`primary hover ${isEmailValid ? "" : "invalid"}`}>
				{sending && <Spinner style={{ marginRight: 8 }} />}
				{t("action")}
			</button>
		</form>
		{result?.error && <p className="fg-error">{t("error")}</p>}
	</div>;
}
