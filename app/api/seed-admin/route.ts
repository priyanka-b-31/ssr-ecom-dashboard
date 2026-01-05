import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { connectDB } from "@/app/lib/db";
import Admin from "@/models/Admin";

export async function GET() {
  try {
    await connectDB();

    const existing = await Admin.findOne({ email: "admin@example.com" });

    if (existing) {
      return NextResponse.json({ message: "Admin already exists" });
    }

    const hashedPassword = await bcrypt.hash("admin123", 10);

    await Admin.create({
      email: "admin@example.com",
      password: hashedPassword,
    });

    return NextResponse.json({ message: "Admin created" });
  } catch (error) {
    console.error("SEED ADMIN ERROR:", error);
    return NextResponse.json(
      { error: "Failed to seed admin" },
      { status: 500 }
    );
  }
}



