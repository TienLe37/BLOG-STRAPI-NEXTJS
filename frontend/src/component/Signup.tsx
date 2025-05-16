'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

export default function SignUp() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch(`/api/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        toast.success('Đăng ký thành công!');
        router.push('/login');
      } else {
        const data = await res.json();
        toast.error(data.error || 'Đăng ký thất bại');
      }
    } catch (err) {
      console.error('Lỗi khi gửi form:', err);
    }
  };

  return (
    <div className='container max-w-screen-xl mx-auto mt-[100px]'>
      <div className='px-4 py-3 mt-[100px] text-gray-600'>
        <a href='/' className='text-blue-600 text-[16px]'>
          Trang chủ
        </a>{' '}
        &gt; <span className='text-[14px]'>Đăng kí tài khoản</span>
      </div>
      <div className='flex justify-center items-center pb-10'>
        <div className='w-full max-w-md bg-white p-8 rounded-xl shadow'>
          <h2 className='text-2xl font-bold text-center mb-2'>ĐĂNG KÝ</h2>
          <p className='text-center text-sm mb-6'>
            Đã có tài khoản, đăng nhập{' '}
            <Link href='/login' className='text-blue-600 font-medium'>
              tại đây
            </Link>
          </p>
          <form onSubmit={handleSubmit} className='space-y-4'>
            <input
              name='username'
              placeholder='Họ Và Tên'
              className='w-full px-4 py-3 border border-gray-300 rounded outline-none'
              value={formData.username}
              onChange={handleChange}
              required
            />  
            <input
              name='email'
              type='email'
              placeholder='Email'
              className='w-full px-4 py-3 border border-gray-300 rounded outline-none'
              value={formData.email}
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
              className='w-full bg-blue-600 text-white py-3 rounded font-semibold hover:bg-blue-700 transition'
            >
              Đăng ký
            </button>
          </form>
          <div className='text-center mt-6 text-sm text-gray-600'>
            Hoặc đăng nhập bằng
          </div>
          <div className='flex justify-center gap-4 mt-3'>
            <a href='#' className='inline-block'>
              <Image
                src='https://bizweb.dktcdn.net/assets/admin/images/login/fb-btn.svg'
                alt='Facebook Login'
                width={140}
                height={40}
              />
            </a>
            <a href='#' className='inline-block'>
              <Image
                src='https://bizweb.dktcdn.net/assets/admin/images/login/gp-btn.svg'
                alt='Google Login'
                width={140}
                height={40}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
