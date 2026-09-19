/**
 * The structure of the page: which items exist and in which order.
 *
 * Every string lives in `messages/{en,de}.ts` under `Fields.projectBootstrap` – the keys here
 * are the message keys, so adding an item means adding it in both message files and listing
 * it below.
 */

export type PackageKey = "setup" | "management";

export const proofKeys = ["forecasting", "marketData", "documents", "jobs"] as const;

export const problemKeys = ["tools", "outsourcing", "plan"] as const;

export const outcomeKeys = ["tools", "structure", "plan", "onboarding", "decisions", "meetings"] as const;

/** The outcome that only the Management upgrade delivers – tagged so nobody expects it from the Setup */
export const managementOutcomeKeys: readonly (typeof outcomeKeys)[number][] = ["meetings"];

/** The framework. The last stage is the one that never finishes, and the one the upgrade covers. */
export const stageKeys = ["assess", "architecture", "tools", "onboarding", "manage"] as const;

/** Each deliverable, and the package that brings it */
export const deliverables = [
	{ key: "assessment", from: "setup" },
	{ key: "timeline", from: "setup" },
	{ key: "workPackages", from: "setup" },
	{ key: "architecture", from: "setup" },
	{ key: "tools", from: "setup" },
	{ key: "onboarding", from: "setup" },
	{ key: "consulting", from: "setup" },
	{ key: "management", from: "management" },
] as const satisfies readonly { key: string, from: PackageKey }[];

/** Before and after, paired row by row */
export const comparisonKeys = [
	"guessing",
	"disconnected",
	"expensive",
	"plan",
	"budget",
	"hires",
	"meetings",
] as const;

export const caseKeys = ["forecasting", "jobs"] as const;

export const stepKeys = ["call", "plan", "implement"] as const;

/** The Setup is the default, so it comes first; the upgrade includes everything it does */
export const packageKeys = ["setup", "management"] as const satisfies readonly PackageKey[];

/** One row per line of the package table, and which packages include it */
export const packageRows = [
	{ key: "assessment", in: ["setup", "management"] },
	{ key: "architecture", in: ["setup", "management"] },
	{ key: "timeline", in: ["setup", "management"] },
	{ key: "tools", in: ["setup", "management"] },
	{ key: "onboarding", in: ["setup", "management"] },
	{ key: "consulting", in: ["setup", "management"] },
	{ key: "dayToDay", in: ["management"] },
	{ key: "meetings", in: ["management"] },
	{ key: "reports", in: ["management"] },
	{ key: "issues", in: ["management"] },
] as const satisfies readonly { key: string, in: readonly PackageKey[] }[];

export const faqKeys = [
	"software",
	"knowledge",
	"duration",
	"consulting",
	"handover",
	"breaks",
	"smallBusiness",
	"involvement",
	"pricing",
	"call",
] as const;

export const finalCtaKeys = ["assessment", "recommendations", "nextSteps"] as const;
