// import { recEarlyAccessSignups } from "@/lib/mongodb";
import recEarlyAccessSignup from "@/models/recEarlyAccessSignup";
import { NextRequest } from "next/server";
import buildSignupHandler from "../../baseSignup";

const signupHandler = buildSignupHandler(recEarlyAccessSignup);

export async function PUT(request: NextRequest) {
	return await signupHandler(request);
}