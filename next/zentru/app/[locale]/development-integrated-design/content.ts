/**
 * The structure of the page: which items exist and in which order.
 *
 * Every string lives in `messages/{en,de}.ts` under `Fields.designAgencies` – the keys here are
 * the message keys, so adding an item means adding it in both message files and listing it below.
 * The CRM case is the one exception: it is Project Management's, read from there unchanged.
 */

export type PackageKey = "setup" | "management";

export const proofKeys = ["finance", "funnel"] as const;

export const problemKeys = ["handoff", "process", "time"] as const;

export const outcomeKeys = ["revenue", "process", "noTeam", "time"] as const;

/** The outcome that only the Management upgrade delivers – tagged so nobody expects it from the Setup */
export const managementOutcomeKeys: readonly (typeof outcomeKeys)[number][] = ["time"];

/** Project Management's stages, in the same order. The last is the optional one, and never finishes. */
export const stageKeys = ["assess", "architecture", "tools", "onboarding", "manage"] as const;

/** `crm` is Project Management's case, `finance` this page's own */
export const caseKeys = ["finance", "crm"] as const;

export const stepKeys = ["call", "plan", "setup", "options"] as const;

/** The Setup is the offer; Management is the upgrade that can be added to it at any time */
export const packageKeys = ["setup", "management"] as const satisfies readonly PackageKey[];

/**
 * One row per line of the package table, and which packages include it. Implementation is not a
 * row: it is billed on its own, by the client's project, and the section's intro says so.
 */
export const packageRows = [
	{ key: "assessment", in: ["setup", "management"] },
	{ key: "architecture", in: ["setup", "management"] },
	{ key: "process", in: ["setup", "management"] },
	{ key: "tools", in: ["setup", "management"] },
	{ key: "onboarding", in: ["setup", "management"] },
	{ key: "consulting", in: ["setup", "management"] },
	{ key: "translation", in: ["setup", "management"] },
	{ key: "dayToDay", in: ["management"] },
	{ key: "meetings", in: ["management"] },
	{ key: "reports", in: ["management"] },
	{ key: "issues", in: ["management"] },
] as const satisfies readonly { key: string, in: readonly PackageKey[] }[];

/**
 * Where the rows only Management covers begin. A heading there says they are about running the
 * development, so nobody reads them as part of the setup.
 */
export const developmentRowsStart: (typeof packageRows)[number]["key"] = "dayToDay";

export const faqKeys = [
	"designProcess",
	"implementation",
	"management",
	"developers",
	"revenue",
	"software",
	"knowledge",
	"involvement",
	"pricing",
	"call",
] as const;

export const finalCtaKeys = ["assessment", "recommendations", "nextSteps"] as const;
