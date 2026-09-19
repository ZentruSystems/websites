import mongoose from "mongoose";
import BaseSignupSchema from "./baseSignup";

const recEarlyAccessSignupSchema = BaseSignupSchema

export default mongoose.models.recEarlyAccessSignup || mongoose.model("recEarlyAccessSignup", recEarlyAccessSignupSchema);