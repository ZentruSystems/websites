// import { recEarlyAccessSignups } from "@/lib/mongodb";
import dialAppEarlyAccessSignup from "@/models/dialAppEarlyAccessSignup";
import { NextRequest } from "next/server";
import buildSignupHandler from "../../baseSignup";

const signupHandler = buildSignupHandler(dialAppEarlyAccessSignup);

export async function PUT(request: NextRequest) {
	return await signupHandler(request);
}