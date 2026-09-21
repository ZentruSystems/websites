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

/** What the setup is worth, in money and in hours – the first thing after the problem */
export const outcomeKeys = ["tools", "structure", "decisions", "meetings"] as const;

/** The outcome that only the Management upgrade delivers – tagged so nobody expects it from the Setup */
export const managementOutcomeKeys: readonly (typeof outcomeKeys)[number][] = ["meetings"];

/** The framework. The last stage is the one that never finishes, and the one the upgrade covers. */
export const stageKeys = ["assess", "architecture", "tools", "onboarding", "manage"] as const;

export const caseKeys = ["forecasting", "jobs", "crm"] as const;

/** Built, not managed – tagged, so the page doesn't claim more involvement than there was */
export const implementationCaseKeys: readonly (typeof caseKeys)[number][] = ["crm"];

export const stepKeys = ["call", "plan", "implement"] as const;

/** The Setup is the default, so it comes first; the upgrade includes everything it does */
export const packageKeys = ["setup", "management"] as const satisfies readonly PackageKey[];

/**
 * One row per line of the package table, and which packages include it. This is the only list of
 * what the work delivers – the rows name the outcome, not just the artefact.
 */
export const packageRows = [
	{ key: "assessment", in: ["setup", "management"] },
	{ key: "architecture", in: ["setup", "management"] },
	{ key: "timeline", in: ["setup", "management"] },
	{ key: "tools", in: ["setup", "management"] },
	{ key: "onboarding", in: ["setup", "management"] },
	{ key: "consulting", in: ["setup", "management"] },
	{ key: "translation", in: ["setup", "management"] },
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
