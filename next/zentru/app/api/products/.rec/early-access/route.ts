// import { recEarlyAccessSignups } from "@/lib/mongodb";
import { mongoDbConnect } from "@/lib/mongodb";
import recEarlyAccessSignup from "@/models/recEarlyAccessSignup";
import { log } from "console";
import { NextRequest, NextResponse } from "next/server";
import isEmail from "validator/lib/isEmail";

export async function PUT(request: NextRequest) {
	await mongoDbConnect();

	const json = await request.json();
	log(json);

	if (!isEmail(json.email)) {
		return NextResponse.json("invalid email", {
			status: 400,
		});
	}

	const res = await recEarlyAccessSignup.updateMany({
		email: json.email,
		// count: { $exists: true }
	}, {
		$set: { ...json, },
		$inc: { 'count': 1 }
	}, { upsert: true });

	return NextResponse.json({
		alreadySignedUp: res.matchedCount > 0,
	}, {
		status: 200,
	});
}