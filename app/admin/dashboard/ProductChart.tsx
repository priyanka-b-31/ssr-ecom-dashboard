"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function ProductChart({
  products,
}: {
  products: { name: string; stock: number }[];
}) {
  return (
    <div style={{ margin: "40px 0" }}>
      <h2>📦 Stock Overview</h2>

      {/* IMPORTANT: fixed height container */}
      <div style={{ width: "100%", height: "300px" }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={products}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="stock" fill="#2563eb" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

