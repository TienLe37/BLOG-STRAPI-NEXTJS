import React from 'react'
import Image from 'next/image';

const AboutSection = () => {
  return (
       <div className='max-w-screen-xl mx-auto px-4 py-16 flex flex-col lg:flex-row items-center gap-12'>
        {/* Nội dung chữ bên trái */}
        <div className='w-1/2'>
          <h4 className='text-blue-600 font-semibold text-lg mb-2'>
            Về chúng tôi
          </h4>
          <h2 className='text-3xl font-bold text-gray-900 mb-4'>
            Công ty cổ phần OH!Travel
          </h2>
          <p className='text-gray-700 mb-6'>
            Chúng tôi luôn luôn lắng nghe và chia sẻ mong muốn của từng Quý
            khách hàng, mang lại cho Quý khách sự hài lòng về dịch vụ cũng như
            thái độ phục vụ của từng nhân viên trong chuyến đi, sao cho mỗi dịch
            vụ đơn lẻ là một mắt xích kết nối hoàn hảo giá trị chuyến đi của Quý
            khách. Mỗi tình cảm, hạnh phúc hay mức độ hài lòng của Quý khách là
            một viên gạch xây dựng lên thành công và giá trị của Công ty.
          </p>

          {/* Thống kê */}
          <div className='grid grid-cols-2 gap-6 text-blue-600 font-bold text-3xl'>
            <div className='flex justify-center  gap-2'>
              <p>27</p>
              <p className='text-sm text-gray-700 font-medium'>
                Năm hình thành và phát triển
              </p>
            </div>
            <div className='flex justify-center  gap-2'>
              <p>06</p>
              <p className='text-sm text-gray-700 font-medium'>
                Văn phòng nước ngoài
              </p>
            </div>
            <div className='flex justify-center  gap-2'>
              <p>43</p>
              <p className='text-sm text-gray-700 font-medium'>
                Trung tâm, chi nhánh và văn phòng giao dịch
              </p>
            </div>
            <div className='flex justify-center  gap-2'>
              <p>15</p>
              <p className='text-sm text-gray-700 font-medium'>
                Công ty thành viên
              </p>
            </div>
          </div>
        </div>

        {/* Hình ảnh bên phải */}
        <div className='w-1/2 relative flex justify-center items-center'>
          <div className='relative w-full '>
            <Image
              src='/banner-1.jpg'
              width={900}
              height={800}
              alt='View'
              className='rounded-xl shadow-lg absolute bottom-[-220px] right-[40px] w-2/3 object-cover rotate-[15deg]'
            />
          </div>
        </div>
      </div>

  )
}

export default AboutSection