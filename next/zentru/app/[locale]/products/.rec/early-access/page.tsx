"use client";

import SocialLinks from "common/components/socialLinks/SocialLinks";
import Spinner from "common/components/spinner/Spinner";
import { useTranslations } from "next-intl";
import { useRef, useState } from "react";
import isEmail from "validator/lib/isEmail";
interface RecEarlyAccessState {
	email: string;
	emailValid?: boolean;
}

export default function RecEarlyAccess() {
	const tRec = useTranslations("Products.rec");
	const tAlways = useTranslations("Always");

	const [state, setState] = useState<RecEarlyAccessState>({
		email: "",
	});
	const [sending, setSending] = useState<boolean>(false);
	const [result, setResult] = useState<{
		error?: Object | false,
		alreadySignedUp?: boolean,
	}>();
	const formRef = useRef<HTMLFormElement>(undefined as any);

	if (result?.error == false) {
		const socialLinks = <SocialLinks linkedIn instagram reddit monochrome onlyIcons />
		const base = <>
			<h2 className="light">You will hear back from us as soon as possible.</h2>
			<p style={{ textAlign: "center" }}>Share what you found?</p>
			{socialLinks}
		</>

		if (result.alreadySignedUp) {
			return <section className="vFillView">
				<div className="vCenter hCenter">
					<p style={{ textAlign: "center" }}>We won't send you two emails, but we registered your eagerness!</p>
					{base}
				</div>
			</section>;
		}
		return <section className="vFillView">
			{base}
		</section>;
	}

	return <section
		className="vFillView hGrid"
	>
		<div className="s1 e12 ph-e5 hCenter vCenter" style={{ maxWidth: 600 }}>
			<h2 className="hCenter">{tRec("getEarlyAccess")}</h2>
			<form ref={formRef} style={{ display: "grid", gap: 15, justifySelf: "center" }} action="none">
				<div className="ph-block">
					<label style={{ minWidth: "fit-content", placeSelf: "center" }}>{tAlways("email")}</label>
					{/* <label className={`${state.emailValid ? "" : "fg-error"}`} style={{ minWidth: "fit-content", placeSelf: "center", fontWeight: 400, float: "right", margin: 0 }}>Please enter a valid email address.</label> */}
					<input
						id="email"
						name="email"
						required
						type="email"
						value={state.email}
						className={`hFill ${state.emailValid ? "" : "border-errory"}`}
						onChange={e => setState({ ...state, email: e.currentTarget.value, emailValid: isEmail(e.currentTarget.value) })} />
				</div>
				<button
					type="submit"
					className={`${state.emailValid ? "valid" : "invalid"} primary hover hCenter hFill`}
					onClick={async (e) => {

						if (!formRef.current?.checkValidity()) return;
						if (!state.emailValid) return;

						// only prevent after validation:
						//	if it's wrong it will show the default browser warnings
						e.preventDefault(); // we are inside a form, but we don't want the page to reload
						e.preventDefault();
						e.preventDefault();
						e.preventDefault();
						e.preventDefault();
						e.preventDefault();

						try {


							setSending(true);
							const res = await fetch("/api/products/.rec/early-access", {
								method: "PUT",
								body: JSON.stringify({
									email: state.email,
								}),
							});
							setSending(false);

							if (!res.ok) {
								// alert("Something went wrong, please try again later");
								setResult({ error: await res.json() });
								return;
							}

							setResult({ error: false, ...(await res.json()) });
						} catch (err) {
							console.error(err);
						}
					}}>
					<div style={{ position: "relative", height: "80%", display: "inline-block" }}>
						{sending && <Spinner style={{ position: "absolute", right: 10 }} />}
					</div>
					{tRec("signupEarlyAccess-action")}
				</button>
			</form>
		</div>
	</section>;
}