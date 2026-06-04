import mongoose, { Schema, models } from "mongoose";

const ProductSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    stock: {
      type: Number,
      required: true,
      min: 0,
    },
    image: {
      type: String, // Product image URL from Cloudinary
      required: false,
    },
  },
  { timestamps: true }
);

const Product =
  models.Product || mongoose.model("Product", ProductSchema);

export default Product;




