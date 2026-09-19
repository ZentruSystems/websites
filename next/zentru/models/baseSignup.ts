import mongoose from "mongoose";
import isEmail from 'validator/lib/isEmail';

/** A basis for any kind of Signup */
const BaseSignupSchema = new mongoose.Schema(
	{
		email: {
			type: String,
			trim: true,
			lowercase: true,
			unique: true,
			required: 'Email address is required',
			validate: [isEmail, 'Please fill a valid email address'],
		},
		count: {
			type: Number,
			required: true,
		}
	} as any,
	{
		timestamps: true,
		strict: true,
	},
);

export default BaseSignupSchema;