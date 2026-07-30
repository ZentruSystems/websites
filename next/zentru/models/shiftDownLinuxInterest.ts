import mongoose from "mongoose";
import isEmail from 'validator/lib/isEmail';

const shiftDownLinuxInterestSchema = new mongoose.Schema({
	email: {
		type: String,
		trim: true,
		lowercase: true,
		unique: true,
		required: true,
		validate: [isEmail, 'Please fill a valid email address'],
	},
	count: {
		type: Number,
		required: true,
	},
	/** Acquisition token of the page they signed up from, if there was one */
	src: {
		type: String,
		trim: true,
	},
},
	{
		timestamps: true,
		strict: true,
	},
);

export default mongoose.models.shiftDownLinuxInterest
	|| mongoose.model("shiftDownLinuxInterest", shiftDownLinuxInterestSchema);
