// components/TourCard.tsx
import Image from 'next/image';
import Link from 'next/link';
import Button from '../Button';
import { TourCardProps } from '@/types';


export default function TourCard({
  title,
  documentId,
  date,
  time,
  price,
  imageUrl,
}: TourCardProps) {
  return (
    <Link href={`/tour/${documentId}`} 
    >
      <div className='rounded-2xl shadow-lg overflow-hidden bg-white flex flex-col h-full'>
        {/* Image */}
        <div className='relative w-full h-[200px]'>
          <Image src={imageUrl} alt={title} fill className='object-cover' />
        </div>

        {/* Content */}
        <div className='flex flex-col flex-grow p-4'>
          <h2 className='font-semibold text-base mb-2 line-clamp-2'>{title}</h2>
          <p className='flex items-center text-sm text-gray-600 mb-1'>
            <span className='mr-1'>📅</span> Khởi hành:{' '}
            {new Date(date).toLocaleDateString('vi-VN')}
          </p>
          <p className='flex items-center text-sm text-gray-600 mb-1'>
            <span className='mr-1'>⏱</span> Thời gian: {time}
          </p>
          <p className='text-red-600 font-bold text-xl mt-auto'>
            {price != null
              ? `${price.toLocaleString('vi-VN')}₫`
              : 'Đang cập nhật'}
          </p>
        </div>

        {/* Button */}
        <div className='p-4 pt-0 '>
          <Button className='bg-blue-600 text-white rounded-lg px-4 py-2 hover:bg-blue-700 w-full cursor-pointer'>
            Đặt ngay
          </Button>
        </div>
      </div>
    </Link>
  );
}
