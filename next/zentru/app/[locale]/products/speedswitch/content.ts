/**
 * The structure of the page: which items exist and in which order.
 *
 * Every string lives in `messages/{en,de}.ts` under `Products.speedswitch` – the keys here
 * are the message keys, so adding an item means adding it in both message files and listing
 * it below. Ids that are not text (media slots, tab and panel ids) are derived from these.
 */

/**
 * The professions, in the order the tabs show them. The laptop and trackpad case that used
 * to be "general" is now its own section above these – it is the case the product leads on,
 * and a tab would have buried it.
 */
export const useCaseIds = ["video-music", "graphics", "3d"] as const;

export const modeKeys = ["hold", "toggle", "inverted"] as const;

/** What people do instead today, one card each, and why each one falls short. */
export const workaroundKeys = [
	"zoomCycle",
	"arrowNudge",
	"lowerSensitivity",
	"buyHardware",
] as const;

/** Said plainly on the page rather than left for someone to find out. */
export const limitKeys = ["games", "tremor", "permission"] as const;

export const faqKeys = [
	"trackpad",
	"fineAdjust",
	"dpiButton",
	"tablet",
	"usageDays",
	"apps",
	"appStore",
	"linux",
] as const;

export type WelcomeStepKey = "permission" | "grant" | "tryIt" | "customise";

/** Same steps, different order and selection per platform – `tryIt` is shared. */
export const welcomeStepKeys: Record<"macos" | "windows", readonly WelcomeStepKey[]> = {
	macos: ["permission", "grant", "tryIt"],
	windows: ["tryIt", "customise"],
};
