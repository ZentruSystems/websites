// import { recEarlyAccessSignups } from "@/lib/mongodb";
import { mongoDbConnect } from "@/lib/mongodb";

import { log } from "console";
import mongoose from "mongoose";
import { NextRequest, NextResponse } from "next/server";
import isEmail from "validator/lib/isEmail";

export default function buildSignupHandler(
	model: mongoose.Model<any>,
	/**
	 * Fields to store besides the email, for signups that carry more than one.
	 * Whatever this returns is what gets written – anything else in the body is dropped,
	 * so a caller cannot set a field just by naming it in the request.
	 */
	extraFields?: (json: Record<string, unknown>) => Record<string, unknown>,
) {
	return async function PUT(request: NextRequest) {
		await mongoDbConnect();

		const json = await request.json();
		log(json);

		if (!isEmail(json.email)) {
			return NextResponse.json("invalid email", {
				status: 400,
			});
		}

		const res = await model.updateMany({
			email: json.email,
			// count: { $exists: true }
		}, {
			$set: { email: json.email, ...(extraFields?.(json) ?? {}) },
			$inc: { 'count': 1 }
		}, { upsert: true });

		return NextResponse.json({
			alreadySignedUp: res.matchedCount > 0,
		}, {
			status: 200,
		});
	};
}