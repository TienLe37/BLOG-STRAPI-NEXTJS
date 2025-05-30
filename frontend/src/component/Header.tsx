'use client';
import Link from 'next/link';
import { FaUser } from 'react-icons/fa';
import { IoIosArrowDown, IoMdCall } from 'react-icons/io';
import { useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import SubNav from './SubNav';
import { useAuthStore } from '@/store/authStore';
import toast from 'react-hot-toast';

const Header = () => {
  // Lấy thông tin người dùng và hàm đăng xuất từ auth store
  const { user, logout } = useAuthStore();
  const router = useRouter();
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [showSubNav, setShowSubNav] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const handleLogout = () => {
    logout();
    toast.success('Đăng xuất thành công!');
    router.push('/login');
  };

  const isHomePage = pathname === '/';
  const headerClassName = isHomePage
    ? isScrolled
      ? 'fixed top-0 left-0 w-full z-50 shadow-md bg-white text-black'
      : 'fixed top-0 left-0 w-full z-50 shadow-md bg-transparent text-white'
    : 'fixed top-0 left-0 w-full z-50 shadow-md bg-white text-black';

  return (
    <header className={headerClassName}>
      <div className='max-w-screen-xl mx-auto px-4 py-[10px] flex justify-between items-center'>
        {/* Logo */}
        <Link href='/' className='flex items-center space-x-2'>
          <img src='/logo.png' alt='OH!Travel' className='w-[166px] h-[70px]' />
        </Link>
        {/* Menu */}
        <nav className='text-[16px] hidden md:flex space-x-8'>
          <Link
            href='/'
            className={` hover:text-blue-400 ${
              pathname === '/' ? 'text-blue-500  border-blue-500' : ''
            }`}
          >
            Trang chủ
          </Link>
          <Link
            href='/about'
            className={` hover:text-blue-400 ${
              pathname === '/about'
                ? 'text-blue-500 border-b-2 border-blue-500'
                : ''
            }`}
          >
            Giới thiệu
          </Link>
          <Link
            href='/blog'
            className={` hover:text-blue-400 ${
              pathname === '/blog'
                ? 'text-blue-500 border-b-2 border-blue-500'
                : ''
            }`}
          >
            Tin tức
          </Link>

          <div
            className='relative'
            onMouseEnter={() => setShowSubNav(true)}
            onMouseLeave={() => setShowSubNav(false)}
          >
            <Link
              href='/tour'
              className={` hover:text-blue-400  font-medium flex items-center gap-0.5 cursor-pointer ${
                pathname === '/tour'
                  ? 'text-blue-500 border-b-2 border-blue-500'
                  : ''
              }`}
            >
              Du lịch{' '}
              <span>
                <IoIosArrowDown size={16} />
              </span>
            </Link>
            {/* SubNav hiện khi hover */}
            {showSubNav && (
              <div className='absolute left-0 top-full pt-2 z-10'>
                <SubNav />
              </div>
            )}
          </div>
          <Link
            href='/lien-he'
            className={` hover:text-blue-400 ${
              pathname === '/lien-he'
                ? 'text-blue-500 border-b-2 border-blue-500'
                : ''
            }`}
          >
            Liên hệ
          </Link>
          <Link
            href='/he-thong'
            className={` hover:text-blue-400 ${
              pathname === '/he-thong'
                ? 'text-blue-500 border-b-2 border-blue-500'
                : ''
            }`}
          >
            Hệ thống
          </Link>
        </nav>

        {/* Tài khoản và số điện thoại */}

        <div className='flex text-[16px] items-center space-x-6'>
          {user ? (
            <div
              className='relative cursor-pointer'
              onMouseEnter={() => setShowUserMenu(true)}
              onMouseLeave={() => setShowUserMenu(false)}
            >
              <div className='flex items-center gap-2'>
                <FaUser size={30}/>
                <span>{user.username}</span>
                <IoIosArrowDown size={16} />
              </div>
              {showUserMenu && (
                <div className='absolute left-0 top-full pt-3 z-10  w-40 bg-[#f7f7f7] rounded-lg shadow-md text-black'>
                  <Link
                    href='/profile'
                    className='block px-4 py-2 hover:text-blue-500'
                  >
                    Trang cá nhân
                  </Link>
                  <Link
                    href='/change-password'
                    className='block px-4 py-2 hover:text-blue-500'
                  >
                    Đổi mật khẩu
                  </Link>
                  <button
                    onClick={handleLogout}
                    className=' w-full text-left px-4 py-2  hover:text-red-500 cursor-pointer rounded-b-lg'
                  >
                    Đăng xuất
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link
              href='/login'
              className='hover:text-blue-400 flex items-center'
            >
              <FaUser />
              <span className='ml-1'>Đăng nhập</span>
            </Link>
          )}

          <div className='flex flex-col px-2 gap-2'>
            <span className='flex items-center gap-1 text-[#f79321]'>
              <IoMdCall size={30} />
              <span className='font-semibold text-[22px]'>0344207017</span>
            </span>
            <p className='text-base'>7h30 - 21h</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
