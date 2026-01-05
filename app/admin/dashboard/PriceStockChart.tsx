"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function PriceStockChart({
  products,
}: {
  products: { name: string; price: number; stock: number }[];
}) {
  return (
    <div style={{ marginTop: "40px" }}>
      <h2>💰 Price vs 📦 Stock</h2>

      <div style={{ width: "100%", height: "320px" }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={products}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />

            <Bar dataKey="price" fill="#16a34a" name="Price (₹)" />
            <Bar dataKey="stock" fill="#2563eb" name="Stock" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
