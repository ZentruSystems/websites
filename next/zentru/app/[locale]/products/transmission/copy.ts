import { transmission } from "./config";

/**
 * All page copy in one place.
 *
 * The rest of the site keeps its text in `messages/{en,de}.ts` (next-intl). This page is
 * English only for now and its copy is signed off verbatim, so it lives here in the same
 * nested shape – see README.md for how to lift it into the message files later.
 */
const copy = {
	hero: {
		headline: "Like zooming in. Without losing the bigger picture.",
		sub: "Hold a key. Your cursor drops into low gear — every hand movement covers a quarter of the distance. Land the exact clip, the exact handle, the exact snap point, with your whole timeline still on screen.",
		micro: `${transmission.trialDays} days, full version. No account, no card.`,
		demoLeft: "Left: zoom in, nudge, zoom back out. The round trip.",
		demoRight: "Right: hold the key, grab it, done.",
	},

	useCases: {
		title: "What are you working on?",
		intro: "The pain is the same everywhere: too many targets, too few pixels. What sits under the cursor changes.",
	},

	problem: {
		title: "You don't zoom in to be precise. You zoom in to tell your editor which thing you meant.",
		body: [
			"A timeline edge is stacked with targets a few pixels apart — move here, trim two pixels to the left, roll at the boundary, fade at the corner, a keyframe just above. Each one arms a different tool. CAD is the same story, with endpoint, midpoint, centre and intersection all fighting over the same cursor position.",
			"Snapping isn't the problem. Snapping is what you want — it's what makes the result land exactly on the frame. The problem is hitting the right few pixels of the right element so that the right tool arms and the right snap target wins.",
			"Miss by two pixels and you haven't been slightly imprecise. You've trimmed when you meant to move, or grabbed the clip next door. Undo, re-approach, try again.",
			"So you zoom in. Not for accuracy — for elbow room. Then you zoom back out to see what you did. Dozens of times an hour.",
		],
		demo: "The same edit twice: zoomed in and back out, versus done in one pass.",
	},

	howItWorks: {
		title: "A gearbox for your cursor.",
		body: [
			"Hold your clutch key and Transmission scales your movement down — four times finer by default, adjustable from a crawl to barely damped. The pixels don't move. Your hand just covers fewer of them. Every hover zone is effectively four times further apart, and your zoom level never changes.",
			"Let go, and you're back to full speed.",
		],
		modes: [
			{ name: "Hold", text: "Engaged while the key is down. The default." },
			{ name: "Toggle", text: "Press once to engage, again to release." },
			{ name: "Inverted", text: "Slow all the time, hold to go fast." },
		],
		keyLine: "Any key or combination you like. Left Shift out of the box.",
	},

	features: {
		title: "What it takes off your hands",
		items: [
			{
				title: "The zoom round trip",
				text: "Zooming in for elbow move and back out to check costs you the overview and dozens of interruptions an hour. Downshift instead and the view never moves.",
			},
			{
				title: "The wrong tool arming",
				text: "Hover zones a few pixels apart each arm a different tool. Four times finer movement puts real distance between them without changing a single pixel on screen.",
			},
			{
				title: "Undo as a workflow",
				text: "Missing isn't slightly off, it's wrong — trimmed instead of moved, the neighbour instead of the clip. Landing it first try means there is nothing to take back.",
			},
			{
				title: "Apps that never got a fine mode",
				text: "It works below the application layer, so it covers plugin windows, obscure tools and everything else your editor's own modifier keys never reached.",
			},
			{
				title: "Hardware you can't fix with hardware",
				text: "A trackpad has no DPI button and a pen tablet can't be made less direct. The gearing is in software, so it applies to whatever you already use.",
			},
			{
				title: "Remembering which mode you're in",
				text: "Hold is momentary — the clutch is engaged only while you hold it. Toggle and Inverted are there when a job wants them.",
			},
		],
	},

	pen: {
		title: "Especially good with a pen.",
		body: [
			"A pen is direct, not precise. It puts the cursor exactly where you point — but “where you point” is bounded by your hand, and by how much screen each millimetre of tablet covers. At 100% zoom, that isn't enough to land on the right pixel.",
			"Transmission trades the one thing you don't need in that moment — directness — for the one you do. And unlike a mouse user, you can't buy your way out of this with a DPI button.",
		],
		demo: "Pen on a tablet: the same small target, at full speed and in low gear.",
	},

	permission: {
		title: "Why it asks for Accessibility permission",
		body: [
			"Transmission works by watching mouse movement at the system level and scaling it while your clutch key is held. On macOS, that requires Accessibility permission — the same one any window manager or shortcut utility needs. You grant it once, in System Settings.",
			"Transmission does not read what you type, does not record your screen, and does not send your input anywhere.",
		],
		screenshot: "System Settings → Privacy & Security → Accessibility, with Transmission enabled.",
	},

	privacy: {
		title: "What we collect",
		// Split around the one link in the sentence
		bodyBeforeLink: "Anonymous product analytics, through ",
		linkLabel: "Aptabase",
		linkUrl: "https://aptabase.com",
		bodyAfterLink: " — app launches, whether the clutch actually got used, which settings people change. No account, no personal data, no device fingerprint, no tracking across sites. It tells us whether the app is working for people, and nothing else. You can turn it off in Settings.",
	},

	pricing: {
		title: `${transmission.price}. Once.`,
		items: [
			`${transmission.trialDays}-day trial — full version, no card, no account`,
			`${transmission.minMacOs}+ and ${transmission.minWindows}+ in a single licence`,
			`Up to ${transmission.machines} machines`,
			"Free updates",
			`${transmission.refundDays}-day refund, just email`,
		],
		note: `If you need this for a tremor or motor-control reason and ${transmission.price} is a barrier, email us and we'll send you a licence. No questions asked.`,
	},

	faq: {
		title: "Questions",
		items: [
			{
				question: "Doesn't my editor already have a fine-adjust modifier?",
				answer: "Modifier keys refine a value once you've already grabbed something. They don't help you grab the right thing in the first place. Transmission works before the click, in every app — including plugin interfaces that never implemented a fine mode at all.",
			},
			{
				question: "Isn't this what the DPI button on a gaming mouse does?",
				answer: "Same idea, but it's tied to one device, it's a mode you have to remember to switch back out of, and it does nothing for a trackpad or a pen tablet. Transmission is momentary, software-side, and works with whatever you already use.",
			},
			{
				question: "Does it work with a drawing tablet?",
				answer: "Yes. A pen is direct but not precise — Transmission is the missing half.",
			},
			{
				question: "Which apps does it work in?",
				answer: "All of them. It operates below the application layer, so it doesn't need to know anything about the software you're using.",
			},
			{
				question: "Can I use it in games?",
				answer: "We don't recommend it. Anti-cheat systems can flag low-level input software. Transmission is built for editing tools.",
			},
			{
				question: "Is it on the Mac App Store?",
				answer: "No. The Accessibility permission Transmission needs isn't available to sandboxed App Store apps, so it's sold directly.",
			},
			{
				question: "Linux?",
				answer: "Not yet.",
			},
		],
	},

	finalCta: {
		title: "Stop zooming in just to grab things.",
		micro: `${transmission.trialDays} days, full version. ${transmission.minMacOs}+ and ${transmission.minWindows}+.`,
	},

	/**
	 * Opened by the app itself on first launch. Its job is to explain the Accessibility
	 * prompt *before* macOS shows it – that prompt is where people who already installed
	 * the app give up.
	 */
	welcome: {
		title: "Transmission is installed.",
		intro: {
			macos: "One permission and you're set. Here's what macOS is about to ask you, and why.",
			windows: "You're set. Here's how to try it.",
			unknown: "You're set. Here's how to try it.",
		},
		steps: {
			macos: [
				{
					title: "macOS will ask for Accessibility permission",
					text: "Transmission scales mouse movement while your clutch key is held, which means watching that movement at the system level. macOS gates that behind Accessibility — the same permission any window manager or shortcut utility asks for.",
				},
				{
					title: "Grant it once, in System Settings",
					text: "System Settings → Privacy & Security → Accessibility, then switch Transmission on. Nothing else to configure.",
				},
				{
					title: "Hold Left Shift and move your mouse",
					text: "That's low gear: a quarter of the distance for the same hand movement. Let go and you're back to full speed.",
				},
			],
			windows: [
				{
					title: "Hold Left Shift and move your mouse",
					text: "That's low gear: a quarter of the distance for the same hand movement. Let go and you're back to full speed.",
				},
				{
					title: "Make it yours",
					text: "The clutch key, the speed factor and the mode — Hold, Toggle or Inverted — are all in Settings.",
				},
			],
		},
		reassurance: "Transmission does not read what you type, does not record your screen, and does not send your input anywhere.",
		trialNote: `Your ${transmission.trialDays}-day trial is running — full version, no account, no card.`,
		manualClaim: "Didn't the app come back to the front? Open Transmission",
	},
} as const;

export type UseCase = {
	id: string;
	/** Tab label */
	label: string;
	headline: string;
	body: string[];
	/** The concrete misses this group makes, three at most – the tab is not the whole page */
	solves: string[];
	/** What the clip for this tab shows, until the clip exists */
	demo: string;
	/** What the still for this tab shows, until the still exists */
	still: string;
};

/**
 * "General" comes first and is the default: everyone recognises a window edge that won't
 * be grabbed, so nobody has to identify as a professional to understand the product.
 */
export const useCases: UseCase[] = [
	{
		id: "general",
		label: "General",
		headline: "The two pixels every window has.",
		body: [
			"A window edge, the divider between two panels, the corner of an image you're dragging into place in a document. The target is a couple of pixels wide, it only exists while you hover it, and there is nothing to zoom into.",
			"So you approach slowly, overshoot, come back, watch for the cursor to change shape, and try again. Hold the clutch and the same approach covers a quarter of the distance — the edge stops slipping past you.",
		],
		solves: [
			"Window and panel resize edges that the cursor skips over",
			"Nudging an image or text box into place in a document",
			"Small controls — sliders, scrollbar handles, close buttons on tabs",
		],
		demo: "Grabbing a window resize edge and a panel divider, at full speed and in low gear.",
		still: "A panel divider under the cursor, hover state armed.",
	},
	{
		id: "video-music",
		label: "Video & Music",
		headline: "The right handle, first try.",
		body: [
			"Trim, roll, slip and the fade handle all live within a few pixels of the same edge. Downshift and pick the one you meant without zooming into the cut and back out again.",
			"Audio stacks the same way: region edges, fade curves, automation nodes and warp markers all land on the same point of the timeline. Get the one you're after with the whole arrangement still in view.",
		],
		solves: [
			"Trim, roll and slip zones sharing one clip edge",
			"Automation nodes and keyframes sitting on top of the clip below them",
			"Region edges next to the neighbouring region's edge",
		],
		demo: "A tight cut in an NLE: the trim handle versus the move zone.",
		still: "A timeline edge with the trim handle armed.",
	},
	{
		id: "graphics",
		label: "Graphics",
		headline: "The node, not the segment.",
		body: [
			"A path point, its two Bézier handles and the segment between them occupy a handful of pixels. Click the wrong one and you've moved the curve instead of shaping it, or dragged the whole path instead of one point.",
			"Layer edges, mask corners and transform handles do the same thing. Low gear lets you place the cursor on the one you meant while the artboard stays where it is.",
		],
		solves: [
			"Path points versus their handles versus the segment",
			"Transform handles crowding the corner of a small selection",
			"Picking one object out of an overlapping stack",
		],
		demo: "A vector path: selecting a point instead of the segment next to it.",
		still: "A Bézier point with both handles extended.",
	},
	{
		id: "cad-3d",
		label: "CAD & 3D",
		headline: "The snap point you meant.",
		body: [
			"Endpoint, midpoint, centre and intersection cluster inside a handful of pixels. Slow the cursor and the right one arms — no orbiting and zooming just to disambiguate.",
			"Snapping isn't what's failing you here. Snapping is what makes the result exact. What's failing you is telling it which of the four candidates you meant.",
		],
		solves: [
			"Osnap candidates competing for one cursor position",
			"Gizmo axis handles that meet at the origin",
			"Selecting an edge instead of the face behind it",
		],
		demo: "A CAD sketch: arming the intended osnap among clustered candidates.",
		still: "Four snap candidates inside a few pixels.",
	},
];

export default copy;
