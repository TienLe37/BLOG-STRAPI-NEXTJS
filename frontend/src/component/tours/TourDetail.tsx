// components/TourDetail.tsx
"use client";
import Image from "next/image";
import { useState } from "react";
import Button from "../Button";

export default function TourDetail({ tour }: { tour: any }) {
  const { title, imageUrl, subImageUrl, date, time, price } = tour;
  console.log('subImageUrl ::', subImageUrl);
  const [adult, setAdult] = useState(1);
  const [child, setChild] = useState(0);
  const childPrice = price * 0.75;
  const total = adult * price + child * childPrice;

  return (
    <div className="max-w-screen-xl mx-auto p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Gallery */}
      <div className="md:col-span-2">
        <div className="w-full h-[300px] relative mb-4">
          <Image src={imageUrl} alt={title} fill className="object-cover rounded-xl" />
        </div>
        <div className="grid grid-cols-4 gap-2">
          {subImageUrl.length >0 && subImageUrl.slice(0, 4)?.map((img: any, i: number) => (
            <div key={i} className="relative h-24">
              <Image
                src={img}
                alt={`sub ${i}`}
                fill
                className="object-cover rounded-md"
              />
              {i === 3 && subImageUrl.length > 4 && (
                <div className="absolute inset-0 bg-black/60 text-white flex items-center justify-center rounded-md font-bold text-xl">
                  +{subImageUrl.length - 4}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-6 text-gray-800 space-y-2">
          <p><strong>Khởi hành:</strong> {new Date(date).toLocaleDateString("vi-VN")}</p>
          <p><strong>Thời gian:</strong> {time}</p>
          <p><strong>Đánh giá:</strong> 10 ⭐ | 431 quan tâm</p>
          <p><strong>Chỗ còn nhận:</strong> Còn chỗ</p>
        </div>
      </div>

      {/* Booking Info */}
      <div className="bg-white rounded-xl p-6 shadow-md sticky top-20 h-fit">
        <h1 className="text-lg font-semibold mb-2">{title}</h1>
        <p className="text-2xl text-red-600 font-bold mb-4">{price?.toLocaleString("vi-VN")}₫</p>

        <label className="block mb-2 text-sm font-medium">Thời gian</label>
        <input type="date" className="w-full mb-4 border p-2 rounded-md" defaultValue={date} />

        <label className="block mb-2 text-sm font-medium">Loại khách</label>
        <div className="space-y-3 mb-4">
          <div className="flex items-center justify-between">
            <span>Người lớn</span>
            <div className="flex items-center gap-2">
              <button onClick={() => setAdult(Math.max(1, adult - 1))} className="px-2 py-1 bg-gray-200 rounded">-</button>
              <span>{adult}</span>
              <button onClick={() => setAdult(adult + 1)} className="px-2 py-1 bg-gray-200 rounded">+</button>
              <span>{price?.toLocaleString("vi-VN")}₫</span>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span>Trẻ em</span>
            <div className="flex items-center gap-2">
              <button onClick={() => setChild(Math.max(0, child - 1))} className="px-2 py-1 bg-gray-200 rounded">-</button>
              <span>{child}</span>
              <button onClick={() => setChild(child + 1)} className="px-2 py-1 bg-gray-200 rounded">+</button>
              <span>{childPrice?.toLocaleString("vi-VN")}₫</span>
            </div>
          </div>
        </div>

        <p className="text-right font-bold text-lg mb-4">
          Tổng tiền: <span className="text-red-600">{total.toLocaleString("vi-VN")}₫</span>
        </p>

        <Button className="w-full bg-blue-600 text-white font-semibold py-2 rounded hover:bg-blue-700 mb-2">
          Đặt ngay
        </Button>
        <button className="w-full bg-white border font-semibold py-2 rounded hover:bg-gray-100">
          Liên hệ tư vấn
        </button>
      </div>
    </div>
  );
}
