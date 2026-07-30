import shiftDownLinuxInterest from "@/models/shiftDownLinuxInterest";
import { NextRequest } from "next/server";
import buildSignupHandler from "../../baseSignup";

/** Same token rules as the landing page: lowercase [a-z0-9_-], 64 characters at most */
function sanitizeSource(raw: unknown): string | undefined {
	if (typeof raw != "string") return undefined;

	const token = raw.toLowerCase().slice(0, 64);
	return /^[a-z0-9_-]+$/.test(token) ? token : undefined;
}

/**
 * "I would use a Linux version" – how the demand for one gets measured.
 * Signing up twice is not an error, it just counts again.
 */
const signupHandler = buildSignupHandler(shiftDownLinuxInterest, json => {
	const src = sanitizeSource(json.src);
	return src ? { src } : {};
});

export async function PUT(request: NextRequest) {
	return await signupHandler(request);
}
