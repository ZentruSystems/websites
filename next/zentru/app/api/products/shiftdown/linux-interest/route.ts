import { mongoDbConnect } from "@/lib/mongodb";
import shiftDownLinuxInterest from "@/models/shiftDownLinuxInterest";
import { NextRequest, NextResponse } from "next/server";
import isEmail from "validator/lib/isEmail";

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
export async function PUT(request: NextRequest) {
	await mongoDbConnect();

	const json = await request.json();

	if (!isEmail(json.email)) {
		return NextResponse.json("invalid email", {
			status: 400,
		});
	}

	const src = sanitizeSource(json.src);
	const res = await shiftDownLinuxInterest.updateMany({
		email: json.email,
	}, {
		$set: { email: json.email, ...(src ? { src } : {}) },
		$inc: { 'count': 1 }
	}, { upsert: true });

	return NextResponse.json({
		alreadySignedUp: res.matchedCount > 0,
	}, {
		status: 200,
	});
}
