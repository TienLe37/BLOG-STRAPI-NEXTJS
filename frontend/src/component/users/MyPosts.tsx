import { useEffect, useState } from "react";

type Props = {
  userId: number;
};

export default function MyPosts({ userId }: Props) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch(`http://localhost:1337/api/posts?filters[user][id][$eq]=${userId}&populate=*`);
      const data = await res.json();
      setPosts(data.data);
    };
    fetchPosts();
  }, [userId]);

  return (
    <div>
      <h3 className="text-2xl font-bold mb-6">Bài viết đã đăng</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts?.map((post: any) => (
          <div
            key={post.id}
            className="bg-white p-4 rounded-xl border hover:shadow-lg transition"
          >
            <h4 className="text-lg font-semibold text-blue-700 mb-1">
              {post.attributes.title}
            </h4>
            <p className="text-sm text-gray-600 line-clamp-3">
              {post.attributes.summary || "Không có mô tả..."}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
