import TourDetail from "@/component/tours/TourDetail";
import { getTour } from "@/lib/tourApi/api";
import { notFound } from "next/navigation";


export default async function TourDetailPage({
  params,
}: {
  params: { documentId: string };
}) {
  const tour = await getTour(params.documentId);
  console.log(tour);
  if (!tour) return notFound();

  return (
    <div className="container mt-[90px]">
      <TourDetail tour={tour} />
    </div>
  );
}
