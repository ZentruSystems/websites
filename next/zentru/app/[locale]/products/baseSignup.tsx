"use client";

import SocialLinks from "common/components/socialLinks/SocialLinks";
import Spinner from "common/components/spinner/Spinner";
import { useTranslations } from "next-intl";
import { ReactNode, useRef, useState } from "react";
import isEmail from "validator/lib/isEmail";

export interface SignupState {
	email: string;
	emailValid?: boolean;
}

export interface BaseSignupProps {
	headline: ReactNode;
	signupButtonText: ReactNode;

	/** where to send the payload */
	apiPath: string;
	//
	notice?: ReactNode | undefined;
	multipleNotice?: ReactNode | undefined;
	share?: ReactNode | undefined;
	//
	onSuccess?: () => void;

	/** Visible on success, CTAs, like download or additionals */
	successActions?: ReactNode | undefined;
}

export default function Signup({
	headline,
	notice,
	multipleNotice,
	signupButtonText,
	share,
	apiPath,
	onSuccess,
	successActions
}: BaseSignupProps) {
	// TODO: USE
	const tSignup = useTranslations("Signup");
	const tAlways = useTranslations("Always");

	const [state, setState] = useState<SignupState>({
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
			<h2 className="light">{notice ?? tSignup("noticed")}</h2>
			{successActions && <div style={{marginBlock: 35}}>{successActions}</div>}
			<p style={{ textAlign: "center" }}>{share ?? tSignup("share")}</p>
			{socialLinks}
		</>

		if (result.alreadySignedUp) {
			return <section className="vFillView">
				<div className="vCenter hCenter">
					<p style={{ textAlign: "center" }}>{multipleNotice ?? tSignup("multipleNotice")}</p>
					{base}
				</div>
			</section>;
		}
		return <section className="vFillView">
			<div className="vCenter hCenter">
				{base}
			</div>
		</section>;
	}
	const _handleSubmit = async (e: { preventDefault: () => void | Promise<void> }) => {

		if (!formRef.current?.checkValidity()) return;
		if (!state.emailValid) return;

		// only prevent after validation:
		//	if it's wrong it will show the default browser warnings
		await e.preventDefault(); // we are inside a form, but we don't want the page to reload
		e.preventDefault();
		e.preventDefault();
		e.preventDefault();
		e.preventDefault();
		e.preventDefault();

		try {


			setSending(true);
			const res = await fetch(apiPath, {
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
			if (onSuccess) {
				onSuccess();
			}
		} catch (err) {
			console.error(err);
		}
	}

	return <section
		className="vFillView hGrid"
	>
		<div className="s1 e12 ph-e5 hCenter vCenter" style={{ maxWidth: 600 }}>
			<h2 className="hCenter">{headline}</h2>
			<form ref={formRef} style={{ display: "grid", gap: 15, justifySelf: "center" }} action="" onSubmit={_handleSubmit}>
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
					className={`${state.emailValid ? tAlways("valid") : tAlways("invalid")} primary hover hCenter hFill`}
					onClick={_handleSubmit}>
					<div style={{ position: "relative", height: "80%", display: "inline-block" }}>
						{sending && <Spinner style={{ position: "absolute", right: 10, bottom: -4, "--thickness": "2px", "--size": "20px" } as any} />}
					</div>
					{signupButtonText}
				</button>
			</form>
		</div>
	</section>;
}