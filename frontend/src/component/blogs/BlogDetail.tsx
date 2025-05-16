"use client";

import Image from "next/image";
import { BlogDetailProps } from "@/types";
import ReactMarkdown from "react-markdown";
import CommentSection from "../comments/CommentSection";

export default function BlogDetail({
  id,
  title,
  description,
  documentId,
  imageUrl,
  date,
  author,
}: BlogDetailProps) {
  return (
    <div className="min-h-screen bg-gray-100 pb-[100px]">
      {/* Hình ảnh bài viết */}
      <div className="relative w-full h-[400px] mb-[30px]">
        <Image
          src={imageUrl}
          alt={title}
          fill
          priority 
          className="object-cover "
        />
      </div>

      <div className="max-w-screen-lg mx-auto  px-4">
        {/* Tiêu đề và metadata */}
          <h2 className="text-2xl font-semibold text-gray-800">{title}</h2>
       <div className="text-sm text-gray-500 mt-1 flex items-center space-x-2">
            <span>🕒 {new Date(date).toLocaleDateString("vi-VN")}</span>
            <span>•Tác giả : </span>
            <span>{author?.name}</span>
          </div>
        {/* Nội dung mô tả chi tiết */}
        <ReactMarkdown>{description}</ReactMarkdown>

      </div>

      {/* comments */}
      <div className="max-w-screen-lg mx-auto px-4 mt-10 border border-gray-300 rounded-lg shadow-md bg-white py-5">
        <CommentSection blogId={id} />
      </div>

    </div>
    

  );
}
