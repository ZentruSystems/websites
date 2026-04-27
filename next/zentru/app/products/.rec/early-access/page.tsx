"use client";

import Section from "@/app/Section";
import { useState } from "react";
import isEmail from "validator/lib/isEmail";

interface RecEarlyAccessState {
	email: string;
	emailValid?: boolean;
}

export default function RecEarlyAccess() {
	const [state, setState] = useState<RecEarlyAccessState>({
		email: "",
	});

	const [result, setResult] = useState<{
		error?: Object | false,
		alreadySignedUp?: boolean,
	}>();

	if (result?.error == false) {
		if (result.alreadySignedUp) {
			return <section className="vFillView">
				<div className="vCenter hCenter">
					<p>We won't send you two emails, but we registered your eagerness!</p>
					<h2 className="light">You will hear back from us as soon as possible.</h2>
				</div>
			</section>;
		}
		return <section className="vFillView">
			<h2 className="vCenter hCenter light">You will hear back from us as soon as possible.</h2>
		</section>;
	}

	return <Section
		title="Get early access to .rec"
		link={null}
		inSectionStyle={{ maxWidth: 600 }}
	>
		<form style={{ display: "grid", gap: 15, justifySelf: "center" }} action="none">
			<div className="flex ph-block">
				<label style={{ minWidth: "fit-content", placeSelf: "center" }}>E-Mail</label>
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
				className={`${state.emailValid ? "valid" : "invalid"} primary hover`}
				onClick={async (e) => {
					e.preventDefault(); // we are inside a form, but we don't want the page to reload

					const res = await fetch("/api/products/.rec/early-access", {
						method: "PUT",
						body: JSON.stringify({
							email: state.email,
						}),
					});

					if (!res.ok) {
						// alert("Something went wrong, please try again later");
						setResult({ error: await res.json() });
						return;
					}

					setResult({ error: false, ...(await res.json()) });
				}}>Sign up for the early access</button>
		</form>
	</Section>;
}