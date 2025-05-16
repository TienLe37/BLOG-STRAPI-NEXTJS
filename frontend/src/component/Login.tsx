'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ email, password });
    // Gọi API đăng nhập tại đây
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
              type='email'
              placeholder='Email'
              className='w-full border px-4 py-2 rounded'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type='password'
              placeholder='Mật khẩu'
              className='w-full border px-4 py-2 rounded'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
