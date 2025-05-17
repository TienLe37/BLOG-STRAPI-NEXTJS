'use client';

import { BlogProps } from '@/types';
import React, { useEffect, useState } from 'react';

interface User {
  user: {
    id: number;
    username: string;
  };
}

export default function MyPosts({ user }: User) {
  const [blogs, setBlogs] = useState<BlogProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [editingBlog, setEditingBlog] = useState<BlogProps | null>(null);

  const fetchPosts = async () => {
    try {
      setLoading(true);
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/blogs?filters[user][id][$eq]=${user.id}&populate=*`
      );
      const data = await res.json();
      setBlogs(data.data);
    } catch (err) {
      setError('Không thể tải bài viết');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleDelete = async (documentId: string) => {
    const confirmDelete = confirm(
      'Bạn có chắc chắn muốn xoá bài viết này không?'
    );
    if (!confirmDelete) return;

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/blogs/${documentId}`,
        {
          method: 'DELETE',
        }
      );
      if (!res.ok) throw new Error('Xoá thất bại');

      alert('Xoá thành công!');
      fetchPosts();
    } catch (err) {
      alert('Đã có lỗi khi xoá bài viết.');
    }
  };

  const EditBlog = ({
    blog,
    onCancel,
    onSaveSuccess,
  }: {
    blog: BlogProps;
    onCancel: () => void;
    onSaveSuccess: () => void;
  }) => {
    const [title, setTitle] = useState(blog.title);
    const [date, setDate] = useState(blog.date);
    const [description, setDescription] = useState(blog.description);
    const [imageFile, setImageFile] = useState<File | null>(null);
    const [previewImage, setPreviewImage] = useState(blog.imageUrl || '');
    const [loading, setLoading] = useState(false);

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files?.[0]) {
        setImageFile(e.target.files[0]);
        setPreviewImage(URL.createObjectURL(e.target.files[0]));
      }
    };

    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      setLoading(true);
      try {
        const formData = new FormData();
        formData.append('data', JSON.stringify({ title, date, description }));

        if (imageFile) {
          formData.append('files.image', imageFile);
        }
        console.log(formData);
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/blogs/${blog.documentId}`,
          {
            method: 'PUT',
            body: formData,
          } 
        );
        const data = await res.json();

        if (!res.ok)
          throw new Error(data.error?.message || 'Cập nhật thất bại');

        alert('Cập nhật thành công!');
        onSaveSuccess();
      } catch (error: any) {
        alert('Lỗi: ' + error.message);
      } finally {
        setLoading(false);
      }
    };

    return (
      <div className='max-w-3xl mx-auto p-6 bg-white rounded-xl shadow-lg'>
        <h1 className='text-2xl font-semibold mb-4'>Chỉnh sửa bài viết</h1>
        <form onSubmit={handleSubmit} className='space-y-4'>
          <div>
            <label className='block font-medium mb-1'>Tiêu đề</label>
            <input
              className='w-full border border-gray-300 px-4 py-2 rounded'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div>
            <label className='block font-medium mb-1'>Ngày đăng</label>
            <input
              type='date'
              className='w-full border border-gray-300 px-4 py-2 rounded'
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </div>
          <div>
            <label className='block font-medium mb-1'>Mô tả</label>
            <textarea
              rows={6}
              className='w-full border border-gray-300 px-4 py-2 rounded'
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>
          <div>
            <label className='block font-medium mb-1'>Ảnh đại diện</label>
            {previewImage && (
              <img
                src={
                  previewImage.startsWith('http') ||
                  previewImage.startsWith('/')
                    ? `${process.env.NEXT_PUBLIC_API_URL}${previewImage}`
                    : previewImage
                }
                alt='Preview'
                className='mb-2 w-full max-h-60 object-cover rounded'
              />
            )}
            <input type='file' accept='image/*' onChange={handleImageChange} />
          </div>
          <div className='flex gap-3 mt-4'>
            <button
              type='submit'
              disabled={loading}
              className='bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700'
            >
              {loading ? 'Đang lưu...' : 'Lưu thay đổi'}
            </button>
            <button
              type='button'
              onClick={onCancel}
              className='px-6 py-2 rounded border border-gray-300'
            >
              Huỷ
            </button>
          </div>
        </form>
      </div>
    );
  };

  if (loading) return <p>Đang tải bài viết...</p>;
  if (error) return <p className='text-red-500'>Lỗi: {error}</p>;
  if (editingBlog) {
    return (
      <EditBlog
        blog={{
          id: editingBlog.id,
          documentId: editingBlog.documentId,
          title: editingBlog.title,
          date: editingBlog.date,
          description: editingBlog.description,
          imageUrl: editingBlog.imageUrl,
        }}
        onCancel={() => setEditingBlog(null)}
        onSaveSuccess={() => {
          setEditingBlog(null);
          fetchPosts();
        }}
      />
    );
  }

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
      {blogs.map((blog) => (
        <div key={blog.id} className='bg-white rounded-xl p-4 shadow-md'>
          {blog.imageUrl && (
            <img
              src={`${process.env.NEXT_PUBLIC_API_URL}${blog.imageUrl}`}
              alt='Blog Image'
              className='w-full h-40 object-cover rounded mb-2'
            />
          )}
          <h2 className='text-lg font-semibold mb-2'>{blog.title}</h2>
          <p className='text-sm text-gray-600 mb-2'>
            Ngày đăng: {new Date(blog.date).toLocaleDateString()}
          </p>
          <p className='text-gray-800 line-clamp-3'>{blog.description}</p>
          <div className='mt-4 flex gap-2'>
            <button
              onClick={() => setEditingBlog(blog)}
              className='px-4 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 cursor-pointer'
            >
              Sửa
            </button>
            <button
              onClick={() => blog.documentId && handleDelete(blog.documentId)}
              className='px-4 py-1 bg-red-600 text-white rounded hover:bg-red-700 cursor-pointer'
              disabled={!blog.documentId}
            >
              Xoá
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
