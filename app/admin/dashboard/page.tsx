import { connectDB } from "@/app/lib/db";
import Product from "@/models/Product";
import { revalidatePath } from "next/cache";
import MultiStepAddForm from "./MultiStepAddForm";
import ProductChart from "./ProductChart";
import PriceStockChart from "./PriceStockChart";

export const dynamic = "force-dynamic";

/* ---------- SERVER ACTIONS ---------- */
async function addProduct(formData: FormData) {
  "use server";

  await connectDB();

  await Product.create({
    name: formData.get("name"),
    price: Number(formData.get("price")),
    stock: Number(formData.get("stock")),
    image: formData.get("image"), // ✅ image saved
  });

  revalidatePath("/admin/dashboard");
}

async function updateProduct(formData: FormData) {
  "use server";

  await connectDB();

  await Product.findByIdAndUpdate(formData.get("id"), {
    price: Number(formData.get("price")),
    stock: Number(formData.get("stock")),
  });

  revalidatePath("/admin/dashboard");
}

async function deleteProduct(formData: FormData) {
  "use server";

  await connectDB();
  await Product.findByIdAndDelete(formData.get("id"));

  revalidatePath("/admin/dashboard");
}

/* ---------- DASHBOARD ---------- */
export default async function Dashboard() {
  await connectDB();
  const products = await Product.find();

  return (
    <div style={{ padding: 20 }}>
      <h1>Admin Dashboard</h1>

      {/* MULTI STEP ADD FORM */}
      <MultiStepAddForm addProduct={addProduct} />

      {/* STOCK CHART */}
      <ProductChart
        products={products.map((p: any) => ({
          name: p.name,
          stock: p.stock,
        }))}
      />

      {/* PRICE vs STOCK CHART */}
      <PriceStockChart
        products={products.map((p: any) => ({
          name: p.name,
          price: p.price,
          stock: p.stock,
        }))}
      />

      {/* PRODUCT TABLE */}
      <table
        border={1}
        cellPadding={8}
        style={{ width: "100%", marginTop: 20, borderCollapse: "collapse" }}
      >
        <thead style={{ background: "#f1f5f9" }}>
          <tr>
            <th>Name</th>
            <th>Price (₹)</th>
            <th>Stock</th>
            <th>Actions</th>
            <th>Image</th>
          </tr>
        </thead>

        <tbody>
          {products.map((p: any) => (
            <tr key={p._id}>
              {/* NAME */}
              <td>{p.name}</td>

              {/* PRICE */}
              <td>
                <input
                  name="price"
                  type="number"
                  defaultValue={p.price}
                  form={`update-${p._id}`}
                  style={{ width: 80 }}
                />
              </td>

              {/* STOCK */}
              <td>
                <input
                  name="stock"
                  type="number"
                  defaultValue={p.stock}
                  form={`update-${p._id}`}
                  style={{ width: 80 }}
                />
              </td>

              {/* ACTIONS */}
              <td>
                {/* UPDATE */}
                <form
                  id={`update-${p._id}`}
                  action={updateProduct}
                  style={{ display: "inline-block", marginRight: 8 }}
                >
                  <input type="hidden" name="id" value={p._id.toString()} />
                  <button
                    style={{
                      background: "green",
                      color: "white",
                      padding: "4px 10px",
                      borderRadius: 4,
                      border: "none",
                      cursor: "pointer",
                    }}
                  >
                    Update
                  </button>
                </form>

                {/* DELETE */}
                <form action={deleteProduct} style={{ display: "inline-block" }}>
                  <input type="hidden" name="id" value={p._id.toString()} />
                  <button
                    style={{
                      background: "red",
                      color: "white",
                      padding: "4px 10px",
                      borderRadius: 4,
                      border: "none",
                      cursor: "pointer",
                    }}
                  >
                    Delete
                  </button>
                </form>
              </td>

              {/* IMAGE */}
              <td>
                {p.image && (
                  <img
                    src={p.image}
                    alt={p.name}
                    style={{
                      width: 60,
                      height: 60,
                      objectFit: "cover",
                      borderRadius: 6,
                    }}
                  />
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}















