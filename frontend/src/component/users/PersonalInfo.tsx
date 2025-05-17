'use client';

import { useEffect, useRef, useState } from 'react';
import { useAuthStore } from '@/store/authStore';
import Image from 'next/image';
import toast from 'react-hot-toast';

export default function PersonalInfo() {
  const { user, updateUser } = useAuthStore();
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({
    phone: '',
    address: '',
  });
  const [avatarFile, setAvatarFile] = useState<File | null>(null);
  const inputFileRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (user) {
      setFormData({
        phone: user.phone || '',
        address: user.address || '',
      });
    }
  }, [user]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setAvatarFile(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Ngăn reload trang mặc định

    try {
      const res = await fetch('/api/user/update', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: user?.id, ...formData }),
      });

      if (!res.ok) throw new Error('Cập nhật thông tin thất bại');
      const result = await res.json();

      // Nếu có avatar mới, upload lên
      if (avatarFile) {
        const uploadData = new FormData();
        uploadData.append('files', avatarFile);
        uploadData.append('ref', 'plugin::users-permissions.user');
        uploadData.append('refId', String(user?.id));
        uploadData.append('field', 'avatar');

        const uploadRes = await fetch('/api/user/upload-avatar', {
          method: 'POST',
          body: uploadData,
        });

        if (!uploadRes.ok) throw new Error('Upload ảnh đại diện thất bại');
      }

      // Cập nhật vào store
      updateUser({
        ...user,
        ...formData,
        avatar: result.data.avatar,
      });

      toast.success('Cập nhật thành công!');
      setEditMode(false);
      setAvatarFile(null);
    } catch (err) {
      console.error(err);
      toast.error('Đã có lỗi xảy ra');
    }
  };

  const avatarUrl =
    (avatarFile && URL.createObjectURL(avatarFile)) ||
    (user?.avatar?.url &&
      `${process.env.NEXT_PUBLIC_API_URL}${user.avatar.url}`) ||
    '/default-avatar.png';

  return (
    <div className='max-w-2xl mx-auto p-4 bg-white rounded shadow'>
      <h2 className='text-xl font-bold mb-4'>Thông tin cá nhân</h2>

      <form onSubmit={handleSubmit} className='space-y-4'>
        <div className='flex items-center gap-4 mb-6'>
          <div className='relative w-24 h-24 rounded-full overflow-hidden'>
            <Image src={avatarUrl} alt='avatar' layout='fill' objectFit='cover' />
          </div>
          {editMode && (
            <div>
              <input
                type='file'
                accept='image/*'
                ref={inputFileRef}
                onChange={handleAvatarChange}
                className='block text-sm text-gray-500'
              />
            </div>
          )}
        </div>

        <div>
          <label className='block font-medium'>Họ và tên:</label>
          <input
            type='text'
            value={user?.username}
            disabled
            className='w-full border rounded px-3 py-2 bg-gray-100'
          />
        </div>

        <div>
          <label className='block font-medium'>Email:</label>
          <input
            type='email'
            value={user?.email}
            disabled
            className='w-full border rounded px-3 py-2 bg-gray-100'
          />
        </div>

        <div>
          <label className='block font-medium'>Số điện thoại:</label>
          <input
            name='phone'
            value={formData.phone}
            onChange={handleChange}
            disabled={!editMode}
            className='w-full border rounded px-3 py-2'
          />
        </div>

        <div>
          <label className='block font-medium'>Địa chỉ:</label>
          <input
            name='address'
            value={formData.address}
            onChange={handleChange}
            disabled={!editMode}
            className='w-full border rounded px-3 py-2'
          />
        </div>

        <div className='flex justify-end gap-3'>
          {!editMode ? (
            <button
              type='button'
              onClick={() => setEditMode(true)}
              className='px-4 py-2 bg-blue-500 text-white rounded'
            >
              Sửa
            </button>
          ) : (
            <>
              <button
                type='button'
                onClick={() => {
                  setEditMode(false);
                  setAvatarFile(null);
                }}
                className='px-4 py-2 bg-gray-400 text-white rounded'
              >
                Hủy
              </button>
              <button
                type='submit'
                className='px-4 py-2 bg-green-600 text-white rounded'
              >
                Lưu thay đổi
              </button>
            </>
          )}
        </div>
      </form>
    </div>
  );
}
