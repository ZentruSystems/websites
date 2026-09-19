"use client";

import SocialLinks from "common/components/socialLinks/SocialLinks";
import Spinner from "common/components/spinner/Spinner";
import { useTranslations } from "next-intl";
import { ReactNode, useRef, useState } from "react";
import isEmail from "validator/lib/isEmail";

export interface SignupResult {
	error?: Object | false;
	alreadySignedUp?: boolean;
}

/**
 * The submit half of a signup: the email, whether it is valid, and what came back.
 *
 * Split out of the component below so a signup that cannot use that full page layout –
 * SpeedSwitch's Linux interest form sits inside a FAQ answer – still shares one definition
 * of how a signup is sent and what "already signed up" means.
 */
export function useSignup({ apiPath, extraFields, onSuccess }: {
	apiPath: string,
	/** Anything to send besides the email. Read at submit time, not at render time. */
	extraFields?: () => Record<string, unknown>,
	onSuccess?: () => void,
}) {
	const [email, setEmail] = useState("");
	const [sending, setSending] = useState(false);
	const [result, setResult] = useState<SignupResult>();

	const isEmailValid = isEmail(email);

	async function submit() {
		if (!isEmailValid || sending) return;

		setSending(true);
		try {
			const res = await fetch(apiPath, {
				method: "PUT",
				body: JSON.stringify({ email, ...(extraFields?.() ?? {}) }),
			});

			if (!res.ok) {
				setResult({ error: await res.json().catch(() => ({})) });
				return;
			}

			setResult({ error: false, ...(await res.json()) });
			onSuccess?.();
		} catch (err) {
			console.error(err);
			setResult({ error: {} });
		} finally {
			// In a finally: a network error used to leave the spinner running for good
			setSending(false);
		}
	}

	return { email, setEmail, isEmailValid, sending, result, submit };
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

	const { email, setEmail, isEmailValid, sending, result, submit } = useSignup({ apiPath, onSuccess });
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
		if (!isEmailValid) return;

		// only prevent after validation:
		//	if it's wrong it will show the default browser warnings
		e.preventDefault(); // we are inside a form, but we don't want the page to reload

		await submit();
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
						value={email}
						className={`hFill ${isEmailValid ? "" : "border-errory"}`}
						onChange={e => setEmail(e.currentTarget.value)} />
				</div>
				<button
					type="submit"
					className={`${isEmailValid ? tAlways("valid") : tAlways("invalid")} primary hover hCenter hFill`}
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