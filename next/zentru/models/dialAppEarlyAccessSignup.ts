import mongoose from "mongoose";
import BaseSignupSchema from "./baseSignup";

const dialAppEarlyAccessSignupSchema = BaseSignupSchema

export default mongoose.models.dialAppEarlyAccessSignup || mongoose.model("dialAppEarlyAccessSignup", dialAppEarlyAccessSignupSchema);