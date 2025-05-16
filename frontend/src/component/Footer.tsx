'use client';

import React from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="relative max-x-screen-xl text-[#f8f3f3]">
      {/* Background image */}
      <div className="absolute inset-0 z-0 opacity-1000">
        <Image
          src="/footer-bg.jpg"
          alt="Footer background"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
        <div className="absolute inset-0 bg-black-dark bg-opacity-1000"></div>
      </div>

      {/* Content */}
      <div className="max-w-screen-xl relative z-10 container mx-auto px-4 py-12">
        {/* Title & Form */}
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold mb-2">Tiết kiệm thời gian và tiền bạc!</h2>
          <p className="mb-6">Hãy đăng ký và chúng tôi sẽ gửi những ưu đãi tốt nhất cho bạn</p>
          <form className="max-w-lg mx-auto flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Nhập địa chỉ email"
              className="flex-1 px-4 py-2 rounded border-none border outline-none text-white"
            />
            <button className="bg-gradient-to-r from-blue-500 to-indigo-600 px-6 py-2 rounded text-white font-semibold hover:opacity-90">
              Nhận ưu đãi
            </button>
          </form>
        </div>

        {/* Footer Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-sm">
          <div>
            <h4 className="font-bold mb-2">THÔNG TIN LIÊN HỆ</h4>
            <p>CÔNG TY CỔ PHẦN OH!TRAVEL</p>
            <p>Tầng 6, Tòa Ladeco, 266 Đội Cấn, Ba Đình, Hà Nội</p>
            <p>Hỗ trợ: 1900.6750</p>
            <p>GCN ĐKDN: 79-234/2014/TCDL-GP LHQT</p>
          </div>

          <div>
            <h4 className="font-bold mb-2">CHĂM SÓC KHÁCH HÀNG</h4>
            <p>8H - 22H Hàng ngày</p>
            <p>Hotline: 1900 1839</p>
          </div>

          <div>
            <h4 className="font-bold mb-2">THÔNG TIN</h4>
            <ul className="space-y-1">
              <li>Tạp chí du lịch</li>
              <li>Cẩm nang du lịch</li>
              <li>Tin tức</li>
              <li>Chính sách quyền riêng tư</li>
              <li>Thoả thuận sử dụng</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-2">KẾT NỐI</h4>
            <div className="flex gap-3 mb-3">
              <i className="fab fa-twitter"></i>
              <i className="fab fa-facebook-f"></i>
              <i className="fab fa-instagram"></i>
              <i className="fab fa-google-plus-g"></i>
              <i className="fab fa-youtube"></i>
            </div>
            <div className="mb-2">
              <Image src="/google-play.png" alt="Google Play" width={120} height={36} />
              <Image src="/app-store.png" alt="App Store" width={120} height={36} />
            </div>
            <div className="flex gap-2">
              <Image src="/payment.png" alt="payment" width={200} height={80} />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
