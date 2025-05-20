"use client";

import { useState } from "react";

export default function CreatePost({ userId }: { userId: number }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("date", date);
    if (image) formData.append("image", image);
    formData.append("userId", userId.toString());

    try {
      const res = await fetch("/api/user/create-blog", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.error || "Lỗi không xác định");

      alert("🎉 Bài viết đã được tạo!");
      setTitle("");
      setDescription("");
      setDate("");
      setImage(null);
    } catch (err: any) {
      console.error("❌ Lỗi khi đăng bài:", err);
      alert("❌ Lỗi khi đăng bài: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4 bg-white rounded shadow max-w-xl mx-auto">
      <h2 className="text-xl font-semibold">Tạo bài viết mới</h2>
      <input
        type="text"
        placeholder="Tiêu đề"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full border px-3 py-2 rounded"
        required
      />
      <textarea
        placeholder="Mô tả"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-full border px-3 py-2 rounded"
        required
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="w-full border px-3 py-2 rounded"
        required
      />
      <input
        type="file"
        accept="image/*"
        onChange={(e) => setImage(e.target.files?.[0] || null)}
        className="w-full"
      />
      <button
        type="submit"
        disabled={loading}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        {loading ? "Đang đăng..." : "Đăng bài"}
      </button>
    </form>
  );
}
