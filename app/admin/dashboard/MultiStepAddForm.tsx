"use client";

import { useState } from "react";

export default function MultiStepAddForm({
  addProduct,
}: {
  addProduct: (formData: FormData) => void;
}) {
  const [step, setStep] = useState(1);

  // ✅ STORE FORM VALUES IN STATE
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  async function handleImageUpload(file: File) {
    const formData = new FormData();
    formData.append("file", file);

    const res = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    console.log("UPLOAD RESPONSE:", data);

    setImageUrl(data.url);
  }

  return (
    <form action={addProduct} style={{ marginBottom: 30 }}>
      {/* STEP 1 */}
      {step === 1 && (
        <>
          <h3>Step 1: Product Info</h3>

          <input
            placeholder="Product name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <br /><br />

          <button type="button" onClick={() => setStep(2)}>
            Next →
          </button>
        </>
      )}

      {/* STEP 2 */}
      {step === 2 && (
        <>
          <h3>Step 2: Image</h3>

          <input
            type="file"
            accept="image/*"
            onChange={(e) => {
              if (e.target.files) {
                handleImageUpload(e.target.files[0]);
              }
            }}
          />

          {imageUrl && (
            <p style={{ color: "green" }}>✅ Image uploaded</p>
          )}

          <br />

          <button type="button" onClick={() => setStep(3)}>
            Next →
          </button>
        </>
      )}

      {/* STEP 3 */}
      {step === 3 && (
        <>
          <h3>Step 3: Price & Stock</h3>

          <input name="price" type="number" placeholder="Price" required />
          <input name="stock" type="number" placeholder="Stock" required />

          {/* 🔑 REQUIRED HIDDEN FIELDS */}
          <input type="hidden" name="name" value={name} />
          <input type="hidden" name="image" value={imageUrl} />

          <br /><br />

          <button type="submit">✅ Submit</button>
        </>
      )}
    </form>
  );
}









