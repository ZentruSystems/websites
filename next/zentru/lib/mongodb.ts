import { log } from "console";
import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
	log(`MONGODB_URI was falsy!!`);
}

const connectionString = new URL(MONGODB_URI!);
connectionString.pathname += process.env.VERCEL_TARGET_ENV;

log(`VERCEL_TARGET_ENV: '${process.env.VERCEL_TARGET_ENV}'`);
log(process.env);

export const mongoDbConnect = async () => await mongoose.connect(connectionString.toString());
await mongoose.connect(connectionString.toString())

const mongoDb = mongoose;
export default mongoDb;