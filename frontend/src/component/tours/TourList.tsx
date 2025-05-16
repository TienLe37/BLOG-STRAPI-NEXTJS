// src/components/BlogList.tsx
"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getTours } from "@/lib/tourApi/api";
import Pagination from "../paginations/Pagination";
import TourCard from "./TourCard";
import { TourListProps } from "@/types";
import { useSearchParams } from "next/navigation";

const TourList: React.FC<TourListProps> = ({ initialTours, initialPagination }) => {
  const [tours, setTours] = useState(initialTours);
  const [pagination, setPagination] = useState(initialPagination);
  const [currentPage, setCurrentPage] = useState(1);
  const searchParams = useSearchParams();
  const category = searchParams.get("category") || "";
  useEffect(() => {
    const fetchTours = async () => {
      const { tours, pagination } = await getTours({ page: currentPage, category: category });
      setTours(tours);
      setPagination(pagination);
    };

    fetchTours();
  }, [currentPage, category]);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div> {/* Thêm div bao ngoài */}
      <div className=" gap-6 grid grid-cols-1 md:grid-cols-3 ">
        {tours?.map((tour) => (
          <div key={tour.id} className="">
            <Link href={`/tour/${tour.documentId}`}>
              <TourCard
                id={tour.id}
                documentId={tour.documentId}
                title={tour.title}
                date={tour.date}
                imageUrl={tour.imageUrl}
                time={tour.time}
                price={tour.price}
              />
            </Link>
          </div>
        ))}
      </div>
      {pagination && (
        <Pagination 
          currentPage={currentPage}
          totalPages={pagination.pageCount}
          onPageChange={handlePageChange}
        />
      )}
    </div>
  );
};

export default TourList;