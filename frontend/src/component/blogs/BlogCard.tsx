// components/BlogCard.tsx
import { BlogCardProps } from "@/types";
import Image from "next/image";
import Link from "next/link";


export default function BlogCard({
  id,
  title,
  documentId,
  date,
  imageUrl,
  description,
  author,
  slug,
}: BlogCardProps) {
   

  return (
    <Link
      href={`/blog/${documentId}`}
      className="flex flex-col md:flex-row bg-white rounded-lg shadow hover:shadow-md transition overflow-hidden"
    >
      <div className="relative w-full md:w-[400px] h-[260px] shrink-0">
        <Image
          src={imageUrl}
          alt={title}
          layout="fill"
          objectFit="cover"
          priority
          className="rounded-t-lg md:rounded-lg  "
        />
      </div>

      <div className="p-4 pt-0 flex flex-col justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-gray-800">{title}</h2>
          <div className="text-sm text-gray-500 mt-1 flex items-center space-x-2">
            <span>🕒 {new Date(date).toLocaleDateString("vi-VN")}</span>
            <span>•Tác giả : </span>
            <span>{author?.name}</span>
          </div>
          <p className="mt-2 text-gray-700 line-clamp-4">{description}</p>
        </div>
      </div>
    </Link>
  );
}