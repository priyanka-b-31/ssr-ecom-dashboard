"use client";

import { useState } from "react";

export default function ImageUpload({
  onUpload,
}: {
  onUpload: (url: string) => void;
}) {
  const [uploading, setUploading] = useState(false);

  async function handleUpload(file: File) {
    setUploading(true);

    const data = new FormData();
    data.append("file", file);

    const res = await fetch("/api/upload", {
      method: "POST",
      body: data,
    });

    const json = await res.json();
    onUpload(json.url);

    setUploading(false);
  }

  return (
    <div>
      <input
        type="file"
        accept="image/*"
        onChange={(e) => {
          if (!e.target.files) return;
          handleUpload(e.target.files[0]);
        }}
      />

      {uploading && <p>Uploading image...</p>}
    </div>
  );
}
