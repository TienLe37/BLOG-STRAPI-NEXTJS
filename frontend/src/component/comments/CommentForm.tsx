'use client';

import { useState } from 'react';
import toast from 'react-hot-toast';

export default function CommentForm({
  blogId,
  onCommentPosted,
}: {
  blogId: number;
  onCommentPosted: () => void;
}) {
  const [content, setContent] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!content || !name || !email) {
      alert('Vui lòng điền đầy đủ thông tin');
      return;
    }

    setLoading(true);
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/commments`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          data: {
            content,
            author_name: name,
            email,
            blog: blogId,
          },
        }),
      });

      if (res.ok) {
        toast.success('Gửi bình luận thành công!');
        setContent('');
        setName('');
        setEmail('');
        onCommentPosted();
      }
    } catch (err) {
      toast.error('Gửi bình luận thất bại!');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='w-full flex justify-center mt-10'>
      <form
        onSubmit={handleSubmit}
        className='w-full max-w-xl space-y-4 border p-6 rounded shadow-md bg-white'
      >
        <h2 className='text-xl font-semibold'>Trả lời</h2>
        <p className='text-sm text-gray-600'>
          Email của bạn sẽ không được hiển thị công khai. Các trường bắt buộc
          được đánh dấu *
        </p>

        <div>
          <label className='block text-sm font-medium mb-1'>Bình luận *</label>
          <textarea
            className='w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-400'
            rows={4}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </div>

        <div>
          <label className='block text-sm font-medium mb-1'>Tên *</label>
          <input
            className='w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-400'
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div>
          <label className='block text-sm font-medium mb-1'>Email *</label>
          <input
            className='w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-400'
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <button
          type='submit'
          disabled={loading}
          className='bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition'
        >
          {loading ? 'Đang gửi...' : 'Gửi bình luận'}
        </button>
      </form>
    </div>
  );
}
