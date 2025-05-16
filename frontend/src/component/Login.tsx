'use client';

import { useAuthStore } from '@/store/authStore';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import toast from 'react-hot-toast';

export default function Login() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    identifier: '',
    password: '',
  });

   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };
   const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.error || 'Đăng nhập thất bại');
        return;
      }

      // Lưu token và user vào localStorage (hoặc cookie nếu muốn an toàn hơn)
      localStorage.setItem('token', data.jwt);
      localStorage.setItem('user', JSON.stringify(data.user));
      useAuthStore.getState().setAuth(data.user, data.jwt);
      toast.success('Đăng nhập thành công!');
      router.push('/'); // Redirect về trang chủ hoặc trang cá nhân
    } catch (error) {
      toast.error('Lỗi hệ thống khi đăng nhập');
      console.error(error);
    }
  };

  return (
    <div className='container max-w-screen-xl mx-auto '>
      {/* Breadcrumb */}
      <div className=' px-4 py-3 mt-[100px] text-gray-600'>
        <a href='/' className='text-blue-600 text-[16px] '>
          Trang chủ
        </a>{' '}
        &gt; <span className='text-[14px]'>Đăng nhập tài khoản</span>
      </div>

      {/* Login Form */}
      <div className='flex justify-center items-center pb-10'>
        <div className='w-full max-w-md bg-white p-8 rounded-xl shadow'>
          <h2 className='text-2xl font-bold text-center mb-2'>ĐĂNG NHẬP</h2>
          <p className='text-center text-sm mb-4'>
            Nếu bạn chưa có tài khoản,{' '}
            <Link href='/signup' className='text-blue-600 hover:underline'>
              đăng ký tại đây
            </Link>
          </p>

          <form onSubmit={handleLogin} className='space-y-4'>
           <input
              name='identifier'
              type='text'
              placeholder='Email hoặc tên đăng nhập'
              className='w-full px-4 py-3 border border-gray-300 rounded outline-none'
              value={formData.identifier}
              onChange={handleChange}
              required
            />
            <input
              name='password'
              type='password'
              placeholder='Mật khẩu'
              className='w-full px-4 py-3 border border-gray-300 rounded outline-none'
              value={formData.password}
              onChange={handleChange}
              required
            />
            <button
              type='submit'
              className='w-full bg-blue-600 text-white py-2 rounded font-medium hover:bg-blue-700'
            >
              Đăng nhập
            </button>
          </form>

          <div className='text-center mt-4 text-sm text-gray-500'>
            <Link href='#' className='hover:underline'>
              Quên mật khẩu
            </Link>
          </div>

          <div className='text-center mt-4 text-sm'>Hoặc đăng nhập bằng</div>

          <div className='flex justify-center gap-4 mt-3'>
            <a href='/auth/facebook'>
              <Image
                src='https://bizweb.dktcdn.net/assets/admin/images/login/fb-btn.svg'
                alt='Đăng nhập Facebook'
                width={100}
                height={60}
                priority
                style={{ objectFit: 'cover' }}
              />
            </a>
            <a href='/auth/google'>
              <Image
                src='https://bizweb.dktcdn.net/assets/admin/images/login/gp-btn.svg'
                alt='Đăng nhập Google'
                width={100}
                height={60}
                priority
                style={{ objectFit: 'cover' }}
              />
            </a>
          </div>
        </div>
      </div>

    </div>
  );
}