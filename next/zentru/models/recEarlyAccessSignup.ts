import mongoose from "mongoose";
import isEmail from 'validator/lib/isEmail';

const recEarlyAccessSignupSchema = new mongoose.Schema({
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

export default mongoose.models.recEarlyAccessSignup || mongoose.model("recEarlyAccessSignup", recEarlyAccessSignupSchema);