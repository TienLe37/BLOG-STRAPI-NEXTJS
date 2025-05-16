import { Comment } from '@/types';
import { MessageSquare } from 'lucide-react'; 

export default function CommentList({ comments }: { comments: Comment[] }) {
  return (
    <div className="w-full max-w-screen-lg mx-auto mt-10 space-y-6">
      <div className="flex items-center space-x-2 text-blue-600 mb-6">
        <MessageSquare className="w-6 h-6" />
        <h2 className="text-2xl font-bold">Bình luận</h2>
      </div>

      {comments.length === 0 ? (
        <p className="text-gray-500 italic">Chưa có bình luận nào.</p>
      ) : (
        comments.map((comment) => (
          <div
            key={comment.id}
            className="border border-gray-200 rounded-xl p-5 bg-gray-50 shadow-sm"
          >
            <div className="flex justify-between items-center mb-2">
              <span className="font-semibold text-lg text-gray-800">
                {comment?.author_name}
              </span>
              <span className="text-sm text-gray-500">
                {new Date(comment?.createdAt).toLocaleTimeString()}{" "}
                {new Date(comment?.createdAt).toLocaleDateString()}
              </span>
            </div>
            <p className="text-gray-700 text-base">{comment?.content}</p>
          </div>
        ))
      )}
    </div>
  );
}
