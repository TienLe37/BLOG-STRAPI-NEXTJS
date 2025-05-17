'use client';

import { useState } from 'react';
import { useAuthStore } from '@/store/authStore';
import toast from 'react-hot-toast';

export default function ChangePassword() {
  const { token } = useAuthStore();

  const [form, setForm] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (form.newPassword !== form.confirmPassword) {
      toast.error('Mật khẩu xác nhận không khớp');
      return;
    }

    setLoading(true);
    try {
      const res = await fetch('/api/user/change-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, token }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || 'Thay đổi mật khẩu thất bại');

      toast.success('Đổi mật khẩu thành công');
      setForm({ currentPassword: '', newPassword: '', confirmPassword: '' });
    } catch (err: any) {
      toast.error(err.message || 'Có lỗi xảy ra');
    } finally {
      setLoading(false);
    }
  };
  return (
    <form onSubmit={handleSubmit} className='max-w-md mx-auto space-y-4 p-4 bg-white rounded shadow'>
      <h2 className='text-lg font-semibold'>Đổi mật khẩu</h2>

      <div>
        <label className='block mb-1'>Mật khẩu hiện tại</label>
        <input
          type='password'
          name='currentPassword'
          value={form.currentPassword}
          onChange={handleChange}
          required
          className='w-full border rounded px-3 py-2'
        />
      </div>

      <div>
        <label className='block mb-1'>Mật khẩu mới</label>
        <input
          type='password'
          name='newPassword'
          value={form.newPassword}
          onChange={handleChange}
          required
          className='w-full border rounded px-3 py-2'
        />
      </div>

      <div>
        <label className='block mb-1'>Xác nhận mật khẩu mới</label>
        <input
          type='password'
          name='confirmPassword'
          value={form.confirmPassword}
          onChange={handleChange}
          required
          className='w-full border rounded px-3 py-2'
        />
      </div>

      <button
        type='submit'
        disabled={loading}
        className='bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-50'
      >
        {loading ? 'Đang xử lý...' : 'Lưu thay đổi'}
      </button>
    </form>
  );
}
