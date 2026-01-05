import mongoose from "mongoose";

const AdminSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

// IMPORTANT:
// Model name MUST be "Admin"
// MongoDB will automatically use "admins" collection
const Admin =
  mongoose.models.Admin || mongoose.model("Admin", AdminSchema);

export default Admin;

