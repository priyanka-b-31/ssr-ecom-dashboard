import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI as string;

if (!MONGODB_URI) {
  throw new Error("❌ MONGODB_URI not defined in .env.local");
}

export async function connectDB() {
  try {
    if (mongoose.connection.readyState >= 1) {
      console.log("✅ MongoDB already connected");
      return;
    }

    await mongoose.connect(MONGODB_URI);
    console.log("CONNECTED DB:", mongoose.connection.name);

    console.log("✅ MongoDB connected successfully");
  } catch (error) {
    console.error("❌ MongoDB connection failed:", error);
  }
}
