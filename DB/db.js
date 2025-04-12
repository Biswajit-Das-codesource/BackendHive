import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config({});

export async function dbConnect() {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("MongoDb connected");
  } catch (error) {
    console.error("Database error", error);
    process.exit(1);
  }
}
