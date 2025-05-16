// src/app/blog/[slug]/page.tsx

import BlogDetail from "@/component/blogs/BlogDetail";
import { getPost } from "@/lib/blogApi/api";
import { notFound } from "next/navigation";

export default async function BlogDetailPage({ params }: { params: { documentId: string } }) {
  const post = await getPost(params.documentId);
  if (!post) return notFound();

  const { title, description, date,id, imageUrl, slug ,author,documentId} = post;
  
  return (
    <div className=" container mt-[90px]">
        <BlogDetail
          id={id}
          documentId={documentId}
          title={title}
          description={description}
          date={date}
          imageUrl={imageUrl}
          slug={slug}
          author={author}
        />
    </div>
  );
}
