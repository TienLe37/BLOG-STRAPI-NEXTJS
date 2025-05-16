// components/SubNav.tsx
'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Category } from '@/types/category';


export default function SubNav() {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch('http://localhost:1337/api/categories');
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();
        if (data && data.data && Array.isArray(data.data)) {
          setCategories(
            data.data.map((item: any) => ({
              id: item.id,
              name: item.name,
              slug: item.slug, // Assuming your API returns a 'slug' field
              type: item.type, // Assuming your API returns a 'type' field
            }))
          );
        } else {
          console.error('Invalid data structure from API:', data);
        }
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);

  // Group categories by type (domestic or international)
  const domesticCategories = categories.filter((cat) => cat.type === 'domestic');
  const internationalCategories = categories.filter((cat) => cat.type === 'international');

  return (
    <div className='flex gap-6 bg-white p-4 rounded-xl shadow-blue-200 border border-blue-500 w-max z-20'>
      {/* Trong nước */}
      <div>
        <div className='relative w-40 h-24 rounded-md overflow-hidden'>
          <Image
            src='https://bizweb.dktcdn.net/thumb/medium/100/489/447/collections/2.jpg?v=1689690723767'
            alt='Du lịch trong nước'
            fill
            className='object-cover'
            style={{ objectFit: 'cover' }}
          />
          <div className='absolute inset-0 bg-black/40 flex items-center justify-center'>
            <span className='text-white font-bold text-sm'>
              Du lịch trong nước
            </span>
          </div>
        </div>
        <div className='mt-2 space-y-1 text-sm text-gray-700'>
          {domesticCategories.map((cat) => (
            <div key={cat.id} className='hover:text-blue-600 cursor-pointer'>
              <Link href={`/tour?category=${cat.slug}`} >
                {cat.name}  
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Nước ngoài */}
      <div>
        <div className='relative w-40 h-24 rounded-md overflow-hidden'>
          <Image
            src='https://bizweb.dktcdn.net/thumb/medium/100/489/447/collections/1.jpg?v=1689690720110'
            alt='Du lịch nước ngoài'
            fill
            className='object-cover'
            style={{ objectFit: 'cover' }}
          />
          <div className='absolute inset-0 bg-black/40 flex items-center justify-center'>
            <span className='text-white font-bold text-sm'>
              Du lịch nước ngoài
            </span>
          </div>
        </div>
        <div className='mt-2 space-y-1 text-sm text-gray-700'>
          {internationalCategories.map((cat) => (
            <div key={cat.id} className='hover:text-blue-600 cursor-pointer'>
              <Link href={`/tour?category=${cat.slug}`}>
                {cat.name}  
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}