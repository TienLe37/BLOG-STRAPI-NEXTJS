import TourList from "@/component/tours/TourList";
import { getTours } from "@/lib/tourApi/api";

export default async function TourPage() {
  const data = await getTours();
  const{ tours,pagination } = data;
  return (
    <main className="max-w-screen-xl container mx-auto px-4 py-8 text-gray-800 mt-[100px]">
      <nav className="text-xl text-gray-700 mb-4">
        <a href="/" className="hover:text-blue-500">Trang chủ</a> &gt; Tất cả tour
      </nav>
      <h1 className="text-xl font-bold mb-1">Tour hot</h1>
      <h3 className="text-sm font-semibold text-gray-400 mb-6">Tour du lịch tại OH!Travel. Du lịch 5 châu - Trải nghiệm sắc xuân thế giới</h3>
      <TourList initialTours={tours} initialPagination={pagination} />
    </main>
  );
}
