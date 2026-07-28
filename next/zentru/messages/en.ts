export default {
	"reallyGood": "Really Good",
	"Products": {
		"rec": {
			"sectionSummary": `Never forget another melody in your head.
			<br></br>
			Like your trusty voice-recorder, but supercharged.<br></br>
			Record your melody, add bass, drums and maybe some pads.<br></br>
			There – you got yourself a songstarter, now jump into the DAW, drag over the stems and you are ready to start the song.`,
			"headsection": {
				"whatItIs": "Music creation for you.",
				"reason": "Never miss a line in your head, while driving on the road or taking a walk in the park.",
			},
			"earlyAccess": {
				"getEarlyAccess": "Get early access to .rec",
				"signupEarlyAccess-action": "Sign up for the early access",
			},
			"section2": {
				"title": "Why .rec?",
				"content": `<maxWidth>So you never lose that melody or song you have in your head. You record it,
						only to realize later that you have no idea how you imagined the harmonies, the bass, the drums... to be.<br></br></maxWidth>
						<maxWidth>Believe us, this happens to everyone – all the time. We know this pain, and that's exactly why we built .rec.<br></br></maxWidth>
						<maxWidth>Who is .rec for? – Anyone! Everyone who thinks supercharged voice-memos sound pretty great!</maxWidth>`
			},
			"section3": {
				"title": "Features",
				"content": `<maxWidth>
					.rec is as fast and simple to use as your trusted voice-memos. Just hit record and start.<br></br>
					.rec is built for beginners, amateurs and professionals, housing features for everyone:
					</maxWidth>
					<ul>
					<li><maxWidth>You won't even recognize features that would otherwise just get into your way.</maxWidth></li>
					<li><maxWidth>MIDI and audio tracks can be exported individually to use them in your DAW.</maxWidth></li>
					<li><maxWidth>EQ and reverb, can be added with minimal options, to keep you in your creative flow.</maxWidth></li>
					</ul>`
			},
		},
		"transmission": {
			"meta": {
				// Always brand-paired: "Transmission" alone belongs to the BitTorrent client
				"title": "Transmission — mouse gearing",
			},
			"hero": {
				"headline": "Like zooming in. Without losing the bigger picture.",
				"sub": `Hold a key. Your cursor drops into low gear — every hand movement covers a quarter of the distance.
					Land the exact clip, the exact handle, the exact snap point, with your whole timeline still on screen.`,
				"micro": "{days} usage days, full version. No account, no card.",
				"demoLeft": "Left: zoom in, nudge, zoom back out. The round trip.",
				"demoRight": "Right: hold the key, grab it, done.",
			},
			"cta": {
				"download": "Download free trial",
				"downloadFor": "Download free trial — for {platform}",
				"buy": "Buy — {price, number, ::currency/EUR}, one-time",
				"alsoFor": "Also for {platform}",
			},
			// Placeholder labels, shown until the footage exists
			"media": {
				"clip": "Demo clip — coming soon",
				"still": "Still — coming soon",
				"screenshot": "Screenshot — coming soon",
			},
			"useCases": {
				"title": "What are you working on?",
				"intro": "The pain is the same everywhere: too many targets, too few pixels. What sits under the cursor changes.",
				"tabsLabel": "Use cases",
				"general": {
					"label": "General",
					"headline": "The two pixels every window has.",
					"body": `<p>A window edge, the divider between two panels, the corner of an image you're dragging into place
						in a document. The target is a couple of pixels wide, it only exists while you hover it, and there is
						nothing to zoom into.</p>
						<p>So you approach slowly, overshoot, come back, watch for the cursor to change shape, and try again.
						Hold the clutch and the same approach covers a quarter of the distance — the edge stops slipping past you.</p>`,
					"solves": `<ul>
						<li>Window and panel resize edges that the cursor skips over</li>
						<li>Nudging an image or text box into place in a document</li>
						<li>Small controls — sliders, scrollbar handles, close buttons on tabs</li>
						</ul>`,
					"demo": "Grabbing a window resize edge and a panel divider, at full speed and in low gear.",
					"still": "A panel divider under the cursor, hover state armed.",
				},
				"video-music": {
					"label": "Video & Music",
					"headline": "The right handle, first try.",
					"body": `<p>Trim, roll, slip and the fade handle all live within a few pixels of the same edge. Downshift and
						pick the one you meant without zooming into the cut and back out again.</p>
						<p>Audio stacks the same way: region edges, fade curves, automation nodes and warp markers all land on the
						same point of the timeline. Get the one you're after with the whole arrangement still in view.</p>`,
					"solves": `<ul>
						<li>Trim, roll and slip zones sharing one clip edge</li>
						<li>Automation nodes and keyframes sitting on top of the clip below them</li>
						<li>Region edges next to the neighbouring region's edge</li>
						</ul>`,
					"demo": "A tight cut in an NLE: the trim handle versus the move zone.",
					"still": "A timeline edge with the trim handle armed.",
				},
				"graphics": {
					"label": "Graphics",
					"headline": "The node, not the segment.",
					"body": `<p>A path point, its two Bézier handles and the segment between them occupy a handful of pixels.
						Click the wrong one and you've moved the curve instead of shaping it, or dragged the whole path instead
						of one point.</p>
						<p>Layer edges, mask corners and transform handles do the same thing. Low gear lets you place the cursor
						on the one you meant while the artboard stays where it is.</p>`,
					"solves": `<ul>
						<li>Path points versus their handles versus the segment</li>
						<li>Transform handles crowding the corner of a small selection</li>
						<li>Picking one object out of an overlapping stack</li>
						</ul>`,
					"demo": "A vector path: selecting a point instead of the segment next to it.",
					"still": "A Bézier point with both handles extended.",
				},
				"cad-3d": {
					"label": "CAD & 3D",
					"headline": "The snap point you meant.",
					"body": `<p>Endpoint, midpoint, centre and intersection cluster inside a handful of pixels. Slow the cursor
						and the right one arms — no orbiting and zooming just to disambiguate.</p>
						<p>Snapping isn't what's failing you here. Snapping is what makes the result exact. What's failing you is
						telling it which of the four candidates you meant.</p>`,
					"solves": `<ul>
						<li>Osnap candidates competing for one cursor position</li>
						<li>Gizmo axis handles that meet at the origin</li>
						<li>Selecting an edge instead of the face behind it</li>
						</ul>`,
					"demo": "A CAD sketch: arming the intended osnap among clustered candidates.",
					"still": "Four snap candidates inside a few pixels.",
				},
			},
			"problem": {
				"title": "You don't zoom in to be precise. You zoom in to tell your editor which thing you meant.",
				"body": `<p>A timeline edge is stacked with targets a few pixels apart — move here, trim two pixels to the left,
					roll at the boundary, fade at the corner, a keyframe just above. Each one arms a different tool. CAD is the
					same story, with endpoint, midpoint, centre and intersection all fighting over the same cursor position.</p>
					<p>Snapping isn't the problem. Snapping is what you want — it's what makes the result land exactly on the
					frame. The problem is hitting the right few pixels of the right element so that the right tool arms and the
					right snap target wins.</p>
					<p>Miss by two pixels and you haven't been slightly imprecise. You've trimmed when you meant to move, or
					grabbed the clip next door. Undo, re-approach, try again.</p>
					<p>So you zoom in. Not for accuracy — for elbow room. Then you zoom back out to see what you did. Dozens of
					times an hour.</p>`,
				"demo": "The same edit twice: zoomed in and back out, versus done in one pass.",
			},
			"howItWorks": {
				"title": "A gearbox for your cursor.",
				"body": `<p>Hold your clutch key and Transmission scales your movement down — four times finer by default,
					adjustable from a crawl to barely damped. The pixels don't move. Your hand just covers fewer of them. Every
					hover zone is effectively four times further apart, and your zoom level never changes.</p>
					<p>Let go, and you're back to full speed.</p>`,
				"keyLine": "Any key or combination you like. Left Shift out of the box.",
				"modes": {
					// Kept in English: these are the labels the app's own settings use
					"hold": { "name": "Hold", "text": "Engaged while the key is down. The default." },
					"toggle": { "name": "Toggle", "text": "Press once to engage, again to release." },
					"inverted": { "name": "Inverted", "text": "Slow all the time, hold to go fast." },
				},
			},
			"features": {
				"title": "What it takes off your hands",
				"items": {
					"zoomRoundTrip": {
						"title": "The zoom round trip",
						"text": `Zooming in for elbow room and back out to check costs you the overview and dozens of
							interruptions an hour. Downshift instead and the view never moves.`,
					},
					"wrongTool": {
						"title": "The wrong tool arming",
						"text": `Hover zones a few pixels apart each arm a different tool. Four times finer movement puts real
							distance between them without changing a single pixel on screen.`,
					},
					"undoWorkflow": {
						"title": "Undo as a workflow",
						"text": `Missing isn't slightly off, it's wrong — trimmed instead of moved, the neighbour instead of the
							clip. Landing it first try means there is nothing to take back.`,
					},
					"pluginUis": {
						"title": "Apps that never got a fine mode",
						"text": `It works below the application layer, so it covers plugin windows, obscure tools and everything
							else your editor's own modifier keys never reached.`,
					},
					"hardware": {
						"title": "Hardware you can't fix with hardware",
						"text": `A trackpad has no DPI button and a pen tablet can't be made less direct. The gearing is in
							software, so it applies to whatever you already use.`,
					},
					"modes": {
						"title": "Remembering which mode you're in",
						"text": `Hold is momentary — the clutch is engaged only while you hold it. Toggle and Inverted are there
							when a job wants them.`,
					},
				},
			},
			"pen": {
				"title": "Especially good with a pen.",
				"body": `<p>A pen is direct, not precise. It puts the cursor exactly where you point — but “where you point” is
					bounded by your hand, and by how much screen each millimetre of tablet covers. At 100% zoom, that isn't
					enough to land on the right pixel.</p>
					<p>Transmission trades the one thing you don't need in that moment — directness — for the one you do. And
					unlike a mouse user, you can't buy your way out of this with a DPI button.</p>`,
				"demo": "Pen on a tablet: the same small target, at full speed and in low gear.",
			},
			// Shown on /welcome, right before macOS puts the prompt in front of them
			"permission": {
				"title": "Why it asks for Accessibility permission",
				"body": `<p>Transmission works by watching mouse movement at the system level and scaling it while your clutch
					key is held. On macOS, that requires Accessibility permission — the same one any window manager or shortcut
					utility needs. You grant it once, in System Settings.</p>
					<p>Transmission does not read what you type, does not record your screen, and does not send your input
					anywhere.</p>`,
				"screenshot": "System Settings → Privacy & Security → Accessibility, with Transmission enabled.",
			},
			"privacy": {
				"title": "We value privacy — so we protect yours",
				"intro": `That is how every Zentru Systems product is built, and Transmission is no exception. It watches
					mouse movement to do its job and that is where it ends: it does not read what you type, does not record
					your screen, and does not send your input anywhere.`,
				// The two sentences that carry a link, split around it
				"analyticsBeforeLink": "What we do collect is anonymous product analytics, through ",
				"analyticsLinkLabel": "Aptabase",
				"analyticsAfterLink": ` — app launches, whether the clutch actually got used, which settings people change. No
					account, no personal data, no device fingerprint, no tracking across sites. It tells us whether the app is
					working for people, and nothing else.`,
				"controlBeforeLink": "You can turn it off completely in Settings. The full detail is in our ",
				"controlLinkLabel": "privacy policy",
				"controlAfterLink": ".",
			},
			"pricing": {
				"title": "{price, number, ::currency/EUR}. Once.",
				"items": {
					"trial": "{days} usage days — only the days you use it count, full version, no card, no account",
					"platforms": "{macOs}+ and {windows}+ in a single licence",
					"machines": "Up to {machines} machines",
					"updates": "Free updates",
					"refund": "{days}-day refund, just email",
				},
				"anchor": "Introductory price. The regular price is {regular, number, ::currency/EUR precision-integer}.",
				"note": `If you need this for a tremor or motor-control reason and {price, number, ::currency/EUR} is a barrier, email us and we'll send
					you a licence.`,
			},
			"faq": {
				"title": "Questions",
				"items": {
					"fineAdjust": {
						"question": "Doesn't my editor already have a fine-adjust modifier?",
						"answer": `Modifier keys refine a value once you've already grabbed something. They don't help you grab
							the right thing in the first place. Transmission works before the click, in every app — including
							plugin interfaces that never implemented a fine mode at all.`,
					},
					"dpiButton": {
						"question": "Isn't this what the DPI button on a gaming mouse does?",
						"answer": `Same idea, but it's tied to one device, it's a mode you have to remember to switch back out
							of, and it does nothing for a trackpad or a pen tablet. It also does nothing about mouse
							acceleration: your system still stretches a quick movement and compresses a slow one, so the same
							hand movement doesn't reliably cover the same distance no matter which DPI step you picked.
							Transmission is momentary, software-side, and works with whatever you already use.`,
					},
					"tablet": {
						"question": "Does it work with a drawing tablet?",
						"answer": "Yes. A pen is direct but not precise — Transmission is the missing half.",
					},
					"usageDays": {
						"question": "How does the trial count down?",
						"answer": `In usage days, not calendar days. A day only counts once you actually use it — leave it
							untouched for a week and the trial doesn't move. What you get is days of real work, not a countdown
							that runs out while you're busy with something else.`,
					},
					"apps": {
						"question": "Which apps does it work in?",
						"answer": `All of them. It operates below the application layer, so it doesn't need to know anything
							about the software you're using.`,
					},
					"games": {
						"question": "Can I use it in games?",
						"answer": `We don't recommend it. Anti-cheat systems can flag low-level input software. Transmission is
							built for editing tools.`,
					},
					"appStore": {
						"question": "Is it on the Mac App Store?",
						"answer": `No. The Accessibility permission Transmission needs isn't available to sandboxed App Store
							apps, so it's sold directly.`,
					},
					"linux": {
						"question": "Linux?",
						"answer": `Not yet — whether it happens depends on how many people want it. Put your name down and
							we'll let you know if it does.`,
					},
				},
			},
			// Signing up for a Linux version, inside the FAQ answer that says there isn't one
			"linuxInterest": {
				"pitch": "I'd be interested in a Linux version for {price, number, ::currency/EUR}",
				"action": "Put me down",
				"success": "Noted. We'll email you if a Linux version happens.",
				"alreadySignedUp": "You were already on the list — noted again anyway.",
				"error": "That didn't go through. Try again in a moment.",
			},
			"finalCta": {
				"title": "Stop zooming in just to grab things.",
				"micro": "{days} usage days, full version. {macOs}+ and {windows}+.",
			},
			// Opened by the app on first launch, before macOS shows the permission prompt
			"welcome": {
				"metaTitle": "Welcome to Transmission",
				"metaDescription": "Getting started with Transmission, and why it asks for Accessibility permission.",
				"title": "Transmission is installed.",
				"intro": {
					"macos": "One permission and you're set. Here's what macOS is about to ask you, and why.",
					"windows": "You're set. Here's how to try it.",
				},
				"steps": {
					"permission": {
						"title": "macOS will ask for Accessibility permission",
						"text": `Transmission scales mouse movement while your clutch key is held, which means watching that
							movement at the system level. macOS gates that behind Accessibility — the same permission any window
							manager or shortcut utility asks for.`,
					},
					"grant": {
						"title": "Grant it once, in System Settings",
						"text": `System Settings → Privacy & Security → Accessibility, then switch Transmission on. Nothing else
							to configure.`,
					},
					"tryIt": {
						"title": "Hold Left Shift and move your mouse",
						"text": `That's low gear: a quarter of the distance for the same hand movement. Let go and you're back to
							full speed.`,
					},
					"customise": {
						"title": "Make it yours",
						"text": "The clutch key, the speed factor and the mode — Hold, Toggle or Inverted — are all in Settings.",
					},
				},
				"reassurance": `Transmission does not read what you type, does not record your screen, and does not send your
					input anywhere.`,
				"trialNote": "Your trial is running — {days} usage days, full version, no account, no card.",
				"manualClaim": "Didn't the app come back to the front? Open Transmission",
			},
		},
		"DialApp": {
			"sectionSummary": `Get a hold of your windows on macOS.
			<br></br>
			Switch the windows like Tony.<br></br>
			Press the shortcut, move the mouse, let go, window switched!.`,
			// TODO: Get the gaming aspect in there, "Windowswitching like gaming", "switch windows with like Tony Stark"
			"headsection": {
				"whatItIs": "Window switching, productive with emotions",
				"reason": "No empty travels with your cursor, the menu is always where you are.",
			},
			"earlyAccess": {
				"getEarlyAccess": "Get early access to DialApp",
				"signupEarlyAccess-action": "Sign up for the early access",
			},
			"section2": {
				"title": "Why DialApp?",
				"content": `<maxWidth>Your cursor stays at the middle of the screen, ready for the next window, without having to move it to the edge or even another screen,
						only for the dock to stay hidden until it pops up for a second, before giving up on you again. Save your energy for what you really want to do.<br></br></maxWidth>
						<maxWidth>DialApp solves this issue by showing a radial menu, as seen in Sci-Fi and Games, showing all your open windows.<br></br></maxWidth>
						<maxWidth>"Ha I can do that with Cmd+Tab already!" you might say, but try switching between multiple Finder windows...DialApp can do that<br></br></maxWidth>
						<maxWidth>Who is DialApp for? – Anyone working with a Mac and wishing it had a better way to switch windows than to stack them.</maxWidth>`
				// TODO: Add gif/video of DialApp showing multiple Finder windows.
			},
			"section3": {
				"title": "Features",
				"content": `<maxWidth>
					DialApp is fast, it is simple and is set up in two minutes.<br></br>
					</maxWidth>
					<ul>
					<li><maxWidth>Customizable global keyboard shortcut.</maxWidth></li>
					<li><maxWidth>Resource efficient, it won't slow your Mac down, no matter how old.</maxWidth></li>
					<li><maxWidth>Satisfying to use, customizable to your liking.</maxWidth></li>
					</ul>`
			},
			"terms": {
				"headline": "Terms and Conditions",
				"lastUpdate": "Last updated: July 18, 2026",
				"terms": `<p>Welcome to DialApp. These Terms and Conditions ("Terms") govern your use of our macOS application (the "App") and our associated web checkout services (the "Service"), operated by <b>Zentru Systems e.U.</b> ("us", "we", or "our").</p>
					<p>By accessing or using our App and Service, you agree to be bound by these Terms. If you disagree with any part of the terms, you may not access the Service.</p>
					<hr></hr>
					<br></br>
					<h3>1. Eligibility and Account</h3>
					<p>To use our Service, you must be at least 16 years old (or the minimum age of digital consent in your jurisdiction). If you are under the legal age to form a binding contract, you represent that your parent or legal guardian has reviewed and agreed to these Terms on your behalf.</p>
					<p>You are responsible for maintaining the confidentiality of any account credentials used to access the Service and for restricting access to your macOS device.</p>
					<br></br>
					<h3>2. Subscriptions, Fees, and Payments</h3>
					<p>Our Service offers premium features via paid subscriptions or one-time purchases ("Paid Services").</p>
					<ul>
							<li><p><strong>Billing Engine:</strong> Payments are processed via our third-party billing provider, RevenueCat Billing (utilizing Stripe as the underlying gateway). By initiating a purchase, you agree to provide accurate payment information and authorize recurring charges if applicable.</p></li>
							<li><p><strong>Automatic Renewal:</strong> Subscription plans automatically renew at the end of each billing cycle unless cancelled before the renewal date through your customer portal.</p></li>
							<li><p><strong>Price Changes:</strong> We reserve the right to modify subscription fees. Any price changes will be communicated in advance, giving you the opportunity to cancel before the change takes effect.</p></li>
					</ul>
					<br></br>
					<h3>3. EU Right of Withdrawal (Compliance Statement)</h3>
					<p>If you are a consumer residing in the European Union or European Economic Area (EEA), you generally have the right to withdraw from a digital purchase within 14 days without giving a reason under EU consumer law.</p>
					<p><strong>Explicit Consent and Waiver:</strong> By purchasing a digital product or subscription through our Service and requesting immediate activation of the App’s premium features, you explicitly request the immediate performance of the contract. You acknowledge and agree that <strong>you lose your 14-day right of withdrawal</strong> once the digital content access is provisioned to your account via the RevenueCat system.</p>
					<br></br>
					<h3>4. License and Intellectual Property</h3>
					<p>We grant you a limited, non-exclusive, non-transferable, revocable license to download, install, and use the App on compatible macOS devices strictly in accordance with these Terms.</p>
					<p>All intellectual property rights in the App, including but not limited to source code, user interface designs, visual designs, assets, and logos, are the exclusive property of <b>Zentru Systems e.U.</b>. You may not reverse engineer, decompile, or modify the App.</p>
					<br></br>
					<h3>5. Acceptable Use</h3>
					<p>You agree not to use the App or Service for any unlawful purpose, to disrupt the security or performance of our systems, or to attempt unauthorized access to our billing data or other users' profiles.</p>
					<br></br>
					<h3>6. Privacy and Data Protection</h3>
					<p>Your privacy is important to us. Our collection and processing of your personal data—including transaction identifiers processed via RevenueCat Billing—are governed strictly by our <strong>Privacy Policy</strong>, which complies with the General Data Protection Regulation (GDPR). Please review our Privacy Policy to understand your rights regarding data access, erasure, and portability.</p>
					<br></br>
					<h3>7. Disclaimer of Warranties</h3>
					<p>The App and Service are provided on an "AS IS" and "AS AVAILABLE" basis without warranties of any kind, either express or implied, including but not limited to the implied warranties of merchantability, fitness for a particular purpose, or non-infringement. We do not warrant that the App will be completely error-free or uninterrupted.</p>
					<br></br>
					<h3>8. Limitation of Liability</h3>
					<p>To the maximum extent permitted by applicable law, <b>Zentru Systems e.U.</b> shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or goodwill, arising out of your use or inability to use the App.</p>
					<br></br>
					<h3>9. Termination</h3>
					<p>We reserve the right to terminate or suspend your access to the Paid Services or the App immediately, without prior notice or liability, if you breach these Terms.</p>
					<br></br>
					<h3>10. Governing Law and Jurisdiction</h3>
					<p>These Terms shall be governed and construed in accordance with the laws of Austria, without regard to its conflict of law provisions.</p>
					<p>Any disputes arising under or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts located in Klagenfurt, Austria.</p>
					<br></br>
					<h3>11. Contact Us</h3>
					<p>If you have any questions about these Terms, please contact us at:</p>
					<p>Email: <mailLink>service@zentru.systems</mailLink></p>`
			},
			"privacyPolicy": {
				"headline": "Privacy Policy",
				"lastUpdate": "July 18, 2026",
				"policy": `<p>This Privacy Policy explains how <b>Zentru Systems e.U.</b> ("we", "us", or "our") collects, uses, and protects your personal data when you use our macOS application (the "App") and our associated web checkout services (the "Service").</p>
					<p>We are committed to processing your data in compliance with the General Data Protection Regulation (GDPR) and other applicable data protection laws.</p>
					<hr></hr>
					<br></br>
					<h3>1. Data Controller</h3>
					<p>For the purpose of the GDPR, the data controller is:</p>
					<p>
							<b>Zentru Systems e.U.</b><br></br>
							Laurenzgasse 13/11<br></br>
							Austria<br></br>
							Email: <mailLink>service@zentru.systems</mailLink>
					</p>
					<br></br>
					<h3>2. Data Stored Locally on Your Device</h3>
					<p>We strongly believe in data minimization. Any data you knowingly create inside the App—including your application settings, preferences, and local configurations—is stored <b>strictly locally on your macOS device</b>.</p>
					<ul>
							<li><p>This data never leaves your machine.</p></li>
							<li><p>We do not operate external application servers, databases, or cloud syncing mechanisms to store your configuration data.</p></li>
					</ul>
					<br></br>
					<h3>3. Data Collected Externally (RevenueCat Billing & Analytics)</h3>
					<p>The only data collected externally is transaction and performance data managed by our third-party infrastructure partner, <b>RevenueCat, Inc.</b> (which utilizes <b>Stripe, Inc.</b> as the underlying payment gateway). This occurs when you interact with our web checkout or activate premium features.</p>
					<br></br>
					<h4>A. RevenueCat Billing (Transaction Data)</h4>
					<p>When you subscribe or make a purchase, the following information is processed:</p>
					<ul>
							<li><p><b>Identifiers:</b> Email address (required to generate your receipt and access your billing customer portal) and an alphanumeric App User ID generated by the App.</p></li>
							<li><p><b>Payment Data:</b> Subscription status, purchase history, transaction dates, and country/zip code. <em>Note: Full credit card numbers are handled directly by Stripe and are never visible to or stored by us.</em></p></li>
							<li><p><b>Legal Basis under GDPR:</b> Art. 6(1)(b) GDPR – Performance of a contract (necessary to process your payment and deliver the premium features you purchased).</p></li>
					</ul>
					<br></br>
					<h4>B. RevenueCat Analytics</h4>
					<p>To ensure system stability, analyze conversion flows, and prevent fraudulent subscription usage, we utilize RevenueCat's analytics tools.</p>
					<ul>
							<li><p><b>Data Processed:</b> Device characteristics (macOS version, hardware model), coarse geographic location derived from IP address (country level), and purchase lifecycle events (e.g., trial starts, renewals, cancellations).</p></li>
							<li><p><b>Legal Basis under GDPR:</b> Art. 6(1)(f) GDPR – Legitimate interests (our operational interest in optimizing our commercial service, debugging product failures, and maintaining app security).</p></li>
					</ul>
					<br></br>
					<h3>4. Third-Party Data Processors</h3>
					<p>We share the minimum required data with the following processors to operate our billing architecture:</p>
					<ul>
							<li><p><b>RevenueCat, Inc.</b> (Data infrastructure provider located in the USA). Data transfers to the US are secured via standard contractual clauses (SCCs) or verified frameworks approved by the European Commission.</p></li>
							<li><p><b>Stripe, Inc.</b> (Payment gateway provider). Handles direct financial processing under strict PCI-DSS security standards.</p></li>
					</ul>
					<br></br>
					<h3>5. Data Retention</h3>
					<ul>
							<li><p><b>Local Data:</b> Remains on your device until you delete the App or clean your local application support directories.</p></li>
							<li><p><b>Billing Data:</b> Transaction records stored by RevenueCat are retained as long as your subscription is active, and subsequently archived for the duration required to fulfill local statutory tax, accounting, and legal audit obligations (typically up to 7 years depending on jurisdiction).</p></li>
					</ul>
					<br></br>
					<h3>6. Your Rights Under the GDPR</h3>
					<p>If you are a resident of the EU/EEA, you possess the following rights regarding your personal data:</p>
					<ul>
							<li><p><b>Right of Access:</b> You can request a copy of the billing data linked to your account.</p></li>
							<li><p><b>Right to Rectification:</b> You can update your billing details via the self-service customer portal.</p></li>
							<li><p><b>Right to Erasure ("Right to be Forgotten"):</b> You can request the deletion of your billing profile, subject to statutory retention limits.</p></li>
							<li><p><b>Right to Data Portability:</b> You can request your transaction data in a structured, machine-readable format.</p></li>
							<li><p><b>Right to Object:</b> You can object to data processing executed under our legitimate interests.</p></li>
					</ul>
					<p>To exercise any of these rights, please contact us at <mailLink>service@zentru.systems</mailLink>. You also retain the right to lodge a formal complaint with your local Data Protection Authority.</p>
					<br></br>
					<h3>7. Changes to This Policy</h3>
					<p>We reserve the right to modify this Privacy Policy at any time. Any changes will be published directly on this page with an updated "Last Updated" timestamp.</p>`
			}
		},
	},
	"Main": {
		"because1": "Because we don’t like how Companies treat their Customers.",
		"because2": "Because we don’t like bad design.",
		"because3": "Because we <span>love</span> really good.",

		"weBelieve": `We believe that whatever we do, we should do it really good.<br></br>
			We believe this, because we strive for the thoughtfulness and sustainable design of the past.<br></br>
			<br></br>
			Just think of all the timeless designs we got – that’s what we love.<br></br>
			<span>As {quoteer} put it</span>`,
		"timelessStark": "Timeless design is the only design that can be sustainable and the only design we should focus on",
		"timelessWe": "No unnecessary features, no compromises—just well-executed systems that do exactly what they should, nothing more, nothing less.",

		"weFocusOn": `We focus on what you feel, not how we deliver that feeling, just making sure you get more of it.<br></br>
							<br></br>
							The undescribable feeling of using a product that is <i>really good</i>.`,

		"checkOutAllOther": "Check out all our Projects from all our Fields",
	},
	"Fields": {
		"digitalExperiences": {
			"name": "Digital Experiences",
			"subline": "Useful, beautiful, emotional – an experience",
			"headline-p1": "We can help you making your ",
			"headline-p2/1": "product",
			"headline-p2/2": "project",
			"headline-p3": "an <span>experience</span>.",
			"text1":
				`<p>To make customers feel what you mean.</p>
						<br></br>
						<br></br>
						<p>Our expertise contains: User interface design, Sonic design, Scoring and Music production</p>
						<br></br>
						<br></br>
						<p>Physical soul for the digital world.</p>
						<p>Many things we love are in the physical world, we want to provide that character and soul for digital things as well</p>`,
			"ui": {
				"headline": "User Interfaces",
				"text": `<p>Apps, Websites and Game interfaces, designed to solve problems, designed to be an experience.</p>`,
			},
			"sonicDesign": {
				"headline": "Sonic design",
				"text":
					`<p>We make sound effects, sweeping soundscapes and music in harmony to convey the right feelings.
						<br></br>
						<br></br>
						Video scores for film, animation and advertising
					</p>`,
			},
		},
		"evar": {
			"subline": "Games, space games",
		},
		"inTheFuture": "In the future you will see all our fields here.",
	},
	// always there, nav, footer general translations
	"Always": {
		// Nav
		"products": "Products",
		"fields": "Fields",
		// Footer
		"letsMeetAt": "Let's meet at",
		"weAre": "We are",
		"imprint": "Imprint",
		"privacyPolicy": "Privacy Policy",
		"email": "E-Mail",
		"valid": "valid",
		"invalid": "invalid",
	},
	//
	"Signup": {
		"share": "Share what you found?",
		"noticed": "You will hear back from us as soon as possible.",
		"multipleNotice": "We won't send you two emails, but we registered your eagerness!",
	},
	//
	"createdBy": "Designed and built by Zentru Systems 🫀 ❤️"
} as const