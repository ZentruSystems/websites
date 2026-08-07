/**
 * The structure of the page: which items exist and in which order.
 *
 * Every string lives in `messages/{en,de}.ts` under `Products.shiftdown` – the keys here
 * are the message keys, so adding an item means adding it in both message files and listing
 * it below. Ids that are not text (media slots, tab and panel ids) are derived from these.
 */

export const useCaseIds = ["general", "video-music", "graphics", "cad-3d"] as const;

export const modeKeys = ["hold", "toggle", "inverted"] as const;

export const featureKeys = [
	"zoomRoundTrip",
	"wrongTool",
	"undoWorkflow",
	"pluginUis",
	"hardware",
	"modes",
] as const;

export const faqKeys = [
	"fineAdjust",
	"dpiButton",
	"tablet",
	"usageDays",
	"apps",
	"games",
	"appStore",
	"linux",
] as const;

export type WelcomeStepKey = "permission" | "grant" | "tryIt" | "customise";

/** Same steps, different order and selection per platform – `tryIt` is shared. */
export const welcomeStepKeys: Record<"macos" | "windows", readonly WelcomeStepKey[]> = {
	macos: ["permission", "grant", "tryIt"],
	windows: ["tryIt", "customise"],
};
