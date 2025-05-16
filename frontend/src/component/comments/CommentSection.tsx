// 'use client';

// import { useEffect, useState } from 'react';
// import CommentForm from './CommentForm';
// import CommentList from './CommentList';
// import { Comment } from '@/types';


// export default function CommentSection({ blogId }: { blogId: number }) {
//   const [comments, setComments] = useState<Comment[]>([]);

//   const fetchComments = async () => {
//     const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/commments?filters[blog][id][$eq]=${blogId}`)
//     const data = await res.json();
//     console.log(data);
//     setComments(data.data);
//   };

//   useEffect(() => {
//     fetchComments();
//   }, [blogId]);

//   return (
//     <div className="mt-10">
//       <CommentForm blogId={blogId} onCommentPosted={() => fetchComments()} />

//       <div className="mt-10 space-y-4 mx-auto">
//         <CommentList comments={comments} />
//       </div>
//     </div>
//   );
// }

'use client';

import { useEffect, useState } from 'react';
import CommentForm from './CommentForm';
import CommentList from './CommentList';
import { Comment } from '@/types';
import Pagination from '../paginations/Pagination'; // Import Pagination

interface CommentSectionProps {
  blogId: number;
}

export default function CommentSection({ blogId }: CommentSectionProps) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(5); // Số lượng bình luận trên mỗi trang
  const [totalComments, setTotalComments] = useState(0); // Tổng số bình luận
  const [totalPages, setTotalPages] = useState(1); // Tổng số trang
  const [loading, setLoading] = useState(false); // Trạng thái loading

  const fetchComments = async () => {
    setLoading(true); // Bắt đầu loading
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/commments?filters[blog][id][$eq]=${blogId}&pagination[page]=${currentPage}&pagination[pageSize]=${pageSize}`
      );
      const data = await res.json();
      console.log(data);
      setComments(data.data);
      setTotalComments(data.meta.pagination.total);
      setTotalPages(data.meta.pagination.pageCount);
    } catch (error) {
      console.error("Lỗi khi lấy bình luận:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchComments();
  }, [blogId, currentPage, pageSize]);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="mt-10">
      <CommentForm blogId={blogId} onCommentPosted={() => fetchComments()} />

      {loading ? (
        <p>Đang tải bình luận...</p>
      ) : (
        <>
          <div className="mt-10 space-y-4 mx-auto">
            <CommentList comments={comments} />
          </div>
          {totalPages > 1 && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          )}
        </>
      )}
    </div>
  );
}