"use client";
import Link from "next/link";
import BlogCard from "./BlogCard";
import { BlogCardProps } from "@/types";
import { useEffect, useState } from "react";
import { getPosts } from "@/lib/blogApi/api";
import Pagination from "../paginations/Pagination";

interface BlogListProps {
  initialPosts: any[];
  initialPagination: any;
}

const BlogList: React.FC<BlogListProps> = ({ initialPosts, initialPagination }) => {
  const [posts, setPosts] = useState(initialPosts);
  const [pagination, setPagination] = useState(initialPagination);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchPosts = async () => {
      const { posts, pagination } = await getPosts({ page: currentPage });
      setPosts(posts);
      setPagination(pagination);
    };

    fetchPosts();
  }, [currentPage]);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div> {/* Thêm div bao ngoài */}
      <div className="flex gap-4 flex-col md:flex-row flex-wrap">
        {posts?.map((post) => (
          <div key={post.id} className="">
            <Link href={`/blog/${post.documentId}`}>
              <BlogCard
                id={post.id}
                documentId={post.documentId}
                title={post.title}
                date={post.date}
                imageUrl={post.imageUrl}
                description={post.description}
                author={post.author}
                slug={post.slug}
              />
            </Link>
          </div>
        ))}
      </div>
      {pagination && (
        <Pagination 
          currentPage={currentPage}
          totalPages={pagination.pageCount}
          onPageChange={handlePageChange}
        />
      )}
    </div>
  );
};

export default BlogList;