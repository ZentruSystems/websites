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
				"title": "What we collect",
				// Split around the one link in the sentence
				"bodyBeforeLink": "Anonymous product analytics, through ",
				"linkLabel": "Aptabase",
				"bodyAfterLink": ` — app launches, whether the clutch actually got used, which settings people change. No
					account, no personal data, no device fingerprint, no tracking across sites. It tells us whether the app is
					working for people, and nothing else. You can turn it off in Settings.`,
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
				"note": `If you need this for a tremor or motor-control reason and {price, number, ::currency/EUR} is a barrier, email us and we'll send
					you a licence. No questions asked.`,
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
							of, and it does nothing for a trackpad or a pen tablet. Transmission is momentary, software-side,
							and works with whatever you already use.`,
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
						"answer": "Not yet.",
					},
				},
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
	},
	//
	"createdBy": "Designed and built by Zentru Systems 🫀 ❤️"
} as const