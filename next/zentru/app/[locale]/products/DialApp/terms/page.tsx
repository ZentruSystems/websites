import { useTranslations } from "next-intl";

export default function DialAppTermsAndConditions() {
	const t = useTranslations("Products.DialApp.terms");

	return <div className="Pad">
		<h2>{t("headline")}</h2>
		<p>{t("lastUpdate")}</p>
		{/* <div>{t.rich("terms", defaultHtml)}</div> */}
		<p>Welcome to DialApp. These Terms and Conditions ("Terms") govern your use of my macOS application (the "App") and my associated web checkout services (the "Service"), operated by <b>Zentru Systems e.U.</b> ("me", "I", or "my").</p>

		<p>By accessing or using my App and Service, you agree to be bound by these Terms. If you disagree with any part of the terms, you may not access the Service.</p>

		<hr/>

		<br/>
		<h3>1. Eligibility and Account</h3>
		<p>To use my Service, you must be at least 16 years old (or the minimum age of digital consent in your jurisdiction). If you are under the legal age to form a binding contract, you represent that your parent or legal guardian has reviewed and agreed to these Terms on your behalf.</p>
		<p>You are responsible for maintaining the confidentiality of any account credentials used to access the Service and for restricting access to your macOS device.</p>

		<br/>
		<h3>2. Subscriptions, Fees, and Payments</h3>
		<p>My Service offers premium features via paid subscriptions or one-time purchases ("Paid Services").</p>
		<ul>
			<li><p><strong>Billing Engine:</strong> Payments are processed via my third-party billing provider, RevenueCat Billing (utilizing Stripe as the underlying gateway). By initiating a purchase, you agree to provide accurate payment information and authorize recurring charges if applicable.</p></li>
			<li><p><strong>Automatic Renewal:</strong> Subscription plans automatically renew at the end of each billing cycle unless cancelled before the renewal date through your customer portal.</p></li>
			<li><p><strong>Price Changes:</strong> I reserve the right to modify subscription fees. Any price changes will be communicated in advance, giving you the opportunity to cancel before the change takes effect.</p></li>
		</ul>

		<br/>
		<h3>3. EU Right of Withdrawal (Compliance Statement)</h3>
		<p>If you are a consumer residing in the European Union or European Economic Area (EEA), you generally have the right to withdraw from a digital purchase within 14 days without giving a reason under EU consumer law.</p>
		<p><strong>Explicit Consent and Waiver:</strong> By purchasing a digital product or subscription through my Service and requesting immediate activation of the App’s premium features, you explicitly request the immediate performance of the contract. You acknowledge and agree that <strong>you lose your 14-day right of withdrawal</strong> once the digital content access is provisioned to your account via the RevenueCat system.</p>

		<br/>
		<h3>4. License and Intellectual Property</h3>
		<p>I grant you a limited, non-exclusive, non-transferable, revocable license to download, install, and use the App on compatible macOS devices strictly in accordance with these Terms.</p>
		<p>All intellectual property rights in the App, including but not limited to source code, user interface designs, visual designs, assets, and logos, are the exclusive property of <b>Zentru Systems e.U.</b>. You may not reverse engineer, decompile, or modify the App.</p>

		<br/>
		<h3>5. Acceptable Use</h3>
		<p>You agree not to use the App or Service for any unlawful purpose, to disrupt the security or performance of my systems, or to attempt unauthorized access to my billing data or other users' profiles.</p>

		<br/>
		<h3>6. Privacy and Data Protection</h3>
		<p>Your privacy is important to me. My collection and processing of your personal data—including transaction identifiers processed via RevenueCat Billing—are governed strictly by my <strong>Privacy Policy</strong>, which complies with the General Data Protection Regulation (GDPR). Please review my Privacy Policy to understand your rights regarding data access, erasure, and portability.</p>

		<br/>
		<h3>7. Disclaimer of Warranties</h3>
		<p>The App and Service are provided on an "AS IS" and "AS AVAILABLE" basis without warranties of any kind, either express or implied, including but not limited to the implied warranties of merchantability, fitness for a particular purpose, or non-infringement. I do not warrant that the App will be completely error-free or uninterrupted.</p>

		<br/>
		<h3>8. Limitation of Liability</h3>
		<p>To the maximum extent permitted by applicable law, <b>Zentru Systems e.U.</b> shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or goodwill, arising out of your use or inability to use the App.</p>

		<br/>
		<h3>9. Termination</h3>
		<p>I reserve the right to terminate or suspend your access to the Paid Services or the App immediately, without prior notice or liability, if you breach these Terms.</p>

		<br/>
		<h3>10. Governing Law and Jurisdiction</h3>
		<p>These Terms shall be governed and construed in accordance with the laws of Austria, without regard to its conflict of law provisions.</p>
		<p>Any disputes arising under or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts located in Klagenfurt, Austria.</p>

		<br/>
		<h3>11. Contact Me</h3>
		<p>If you have any questions about these Terms, please contact me at:</p>
		<p>Email: <a href="mailto:service@zentru.systems">service@zentru.systems</a></p>
	</div>
}