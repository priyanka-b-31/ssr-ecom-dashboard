import { connectDB } from "../../../lib/db";
import Admin from "../../../../models/Admin";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export async function POST(req: Request) {
  try {
    await connectDB();

    const { email, password } = await req.json();

    const admin = await Admin.findOne({ email });
    if (!admin) {
      return Response.json(
        { error: "Invalid credentials" },
        { status: 401 }
      );
    }

    const match = await bcrypt.compare(password, admin.password);
    if (!match) {
      return Response.json(
        { error: "Invalid credentials" },
        { status: 401 }
      );
    }

    const token = jwt.sign(
      { id: admin._id },
      process.env.JWT_SECRET as string,
      { expiresIn: "1d" }
    );

    return Response.json({ token });
  } catch (error) {
    console.error("LOGIN ERROR:", error);
    return Response.json(
      { error: "Server error" },
      { status: 500 }
    );
  }
}

