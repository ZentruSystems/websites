import mongoose from "mongoose";
import BaseSignupSchema from "./baseSignup";

/**
 * `.clone()`, not the shared instance: `.add()` mutates the schema it is called on, and
 * `BaseSignupSchema` is the very same object `recEarlyAccessSignup` and
 * `dialAppEarlyAccessSignup` build on. Adding `src` to it directly would put the field on
 * their collections too.
 */
const shiftDownLinuxInterestSchema = BaseSignupSchema.clone().add({
	/** Acquisition token of the page they signed up from, if there was one */
	src: {
		type: String,
		trim: true,
	},
});

export default mongoose.models.shiftDownLinuxInterest
	|| mongoose.model("shiftDownLinuxInterest", shiftDownLinuxInterestSchema);
