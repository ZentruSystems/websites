"use client";

import Spinner from "common/components/spinner/Spinner";
import { useTranslations } from "next-intl";
import { useState } from "react";
import isEmail from "validator/lib/isEmail";
import { readSource } from "./acquisitionSource";
import { transmission } from "./config";
import style from "./transmission.module.css";

type SignupState = "idle" | "sending" | "signedUp" | "alreadySignedUp" | "failed";

/**
 * Interest in a Linux version, which is how the demand for one gets measured.
 * Lives inside the FAQ answer that says there isn't one yet.
 */
export default function LinuxInterest() {
	const t = useTranslations("Products.transmission.linuxInterest");
	const tAlways = useTranslations("Always");

	const [email, setEmail] = useState("");
	const [state, setState] = useState<SignupState>("idle");

	const isValid = isEmail(email);

	async function signUp() {
		if (!isValid || state == "sending") return;

		setState("sending");
		try {
			const response = await fetch("/api/products/transmission/linux-interest", {
				method: "PUT",
				body: JSON.stringify({ email, src: readSource() }),
			});

			if (!response.ok) {
				setState("failed");
				return;
			}

			const { alreadySignedUp } = await response.json();
			setState(alreadySignedUp ? "alreadySignedUp" : "signedUp");
		} catch {
			setState("failed");
		}
	}

	if (state == "signedUp" || state == "alreadySignedUp") {
		return <p className={style.interestDone}>
			{t(state == "signedUp" ? "success" : "alreadySignedUp")}
		</p>;
	}

	return <div className={style.interest}>
		<p>{t("pitch", { price: transmission.price })}</p>
		<form
			className={style.interestForm}
			onSubmit={event => {
				event.preventDefault();
				signUp();
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
			<button type="submit" className={`primary hover ${isValid ? "" : "invalid"}`}>
				{state == "sending" && <Spinner style={{ marginRight: 8 }} />}
				{t("action")}
			</button>
		</form>
		{state == "failed" && <p className="fg-error">{t("error")}</p>}
	</div>;
}
