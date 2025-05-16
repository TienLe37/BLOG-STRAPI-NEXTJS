// src/app/blog/page.tsx
import BlogList from "@/component/blogs/BlogList";
import { getPosts } from "@/lib/blogApi/api";

export default async function BlogPage() {
  const { posts,pagination } = await getPosts();
  return (
    <main className="max-w-screen-xl container mx-auto px-4 py-8 text-gray-800 mt-[100px]">
      <nav className="text-xl text-gray-700 mb-4">
        <a href="/" className="hover:text-blue-500">Trang chủ</a> &gt; Tin tức
      </nav>
      <h1 className="text-xl font-bold mb-6">Tin tức</h1>
      <BlogList initialPosts={posts} initialPagination={pagination} />
    </main>
  );
}
