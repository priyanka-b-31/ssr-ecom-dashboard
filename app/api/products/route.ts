import { connectDB } from "@/app/lib/db";
import Product from "@/models/Product";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

/* ---------- GET: ALL PRODUCTS ---------- */
export async function GET() {
  try {
    await connectDB();
    const products = await Product.find().sort({ createdAt: -1 });
    return NextResponse.json(products);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch products" },
      { status: 500 }
    );
  }
}

/* ---------- POST: ADD PRODUCT ---------- */
export async function POST(req: Request) {
  try {
    await connectDB();
    const { name, price, stock } = await req.json();

    if (!name || price == null || stock == null) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    const product = await Product.create({ name, price, stock });
    return NextResponse.json(product, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create product" },
      { status: 500 }
    );
  }
}

/* ---------- PUT: UPDATE PRODUCT ---------- */
export async function PUT(req: Request) {
  try {
    await connectDB();
    const { id, name, price, stock } = await req.json();

    if (!id) {
      return NextResponse.json(
        { error: "Product ID is required" },
        { status: 400 }
      );
    }

    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      { name, price, stock },
      { new: true }
    );

    if (!updatedProduct) {
      return NextResponse.json(
        { error: "Product not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(updatedProduct);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to update product" },
      { status: 500 }
    );
  }
}

/* ---------- DELETE: REMOVE PRODUCT ---------- */
export async function DELETE(req: Request) {
  try {
    await connectDB();
    const { id } = await req.json();

    if (!id) {
      return NextResponse.json(
        { error: "Product ID is required" },
        { status: 400 }
      );
    }

    const deletedProduct = await Product.findByIdAndDelete(id);

    if (!deletedProduct) {
      return NextResponse.json(
        { error: "Product not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ message: "Product deleted successfully" });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to delete product" },
      { status: 500 }
    );
  }
}


