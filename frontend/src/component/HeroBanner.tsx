'use client';

import React, { useState } from 'react';
import InputForm from './input/InputForm';
import Button from './Button';
import { FaMapMarkerAlt } from 'react-icons/fa'; // Import map marker icon
import { BsArrowLeftRight } from "react-icons/bs";

export default function HeroBanner() {
  const [keyword, setKeyword] = useState('');
  const [departure, setDeparture] = useState('');
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState('');

  const handleKeywordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  const handleDepartureChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDeparture(e.target.value);
  };

  const handleDestinationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDestination(e.target.value);
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDate(e.target.value);
  };

  const handleSearch = () => {
    // Implement your search logic here
    console.log('Searching with:', { keyword, departure, destination, date });
  };

  return (
    <div className="relative flex items-center justify-center w-full min-h-screen overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/banner.jpg"
          alt="Banner"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Overlay mờ */}
      <div className="absolute inset-0 bg-black-dark bg-opacity-50 z-10" />

      {/* Text content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-white text-center px-4">
        <h1 className="text-4xl font-bold mb-4">Du lịch dễ dàng khắp mọi nơi cùng OH!Travel</h1>
        <p className="max-w-2xl text-lg mb-8">
          Với nguồn lực dồi dào, kinh nghiệm và uy tín trong lĩnh vực dịch vụ du lịch,
          OH!Travel luôn nỗ lực mang đến cho khách hàng những dịch vụ giá trị nhất.
        </p>

        {/* Search Form */}
        <div className="bg-white rounded-xl shadow-md p-6 w-full max-w-6xl">
          <div className="flex justify-around">
            <button className="text-blue-500 font-semibold py-2 px-6 rounded-t-2xl border-b-2 border-blue-500">
              DU LỊCH TRONG NƯỚC
            </button>
            <button className="text-gray-500 font-semibold py-2 px-6 rounded-t-2xl">
              DU LỊCH NƯỚC NGOÀI
            </button>
            <button className="text-gray-500 font-semibold py-2 px-6 rounded-t-2xl">
              TRA CỨU BOOKING
            </button>
          </div>

          <div className="flex flex-col  md:flex-row gap-4 mt-6">
            <InputForm
              type="text"
              placeholder="Từ khóa (Hà Nội, HCM)..."
              value={keyword}
              onChange={handleKeywordChange}
              className="md:w-1/4 rounded-2xl boder border-gray-300 p-4" 
            />

            <div className="relative flex items-center md:w-1/4 border border-gray-300 rounded-2xl">
              <FaMapMarkerAlt className="absolute left-3 text-blue-400" />
              <InputForm
                type="text"
                placeholder="Chọn điểm đi"
                value={departure}
                onChange={handleDepartureChange}
                className="pl-10 rounded-2xl"
                label="Điểm đi"
              />
            </div>
            <div className="relative flex items-center md:w-1/4 border border-gray-300 rounded-2xl">
              <FaMapMarkerAlt className="absolute left-3 text-blue-400" />
              <InputForm
                type="text"
                placeholder="Chọn điểm đến"
                value={destination}
                onChange={handleDestinationChange}
                className="pl-10 rounded-2xl"
                label="Điểm đến"
              />
            </div>
            <div className="relative flex items-center md:w-1/4 border border-gray-300 rounded-2xl">
              <FaMapMarkerAlt className="absolute left-3 text-blue-400" />
              <InputForm
                type="text"
                placeholder="Chọn ngày đi"
                value={date}
                onChange={handleDateChange}
                className="pl-10 rounded-2xl"
                label="Ngày đi"
              />
            </div>
            <Button onClick={handleSearch} className="md:w-1/8 rounded-2xl">
              Tìm kiếm
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}