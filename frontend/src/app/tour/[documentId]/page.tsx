import TourDetail from '@/component/tours/TourDetail';
import { getTour } from '@/lib/tourApi/api';
import { notFound } from 'next/navigation';

interface Props {
  params: { documentId: string };
}
export default async function TourDetailPage({ params }: Props) {
  const tour = await getTour(params.documentId);
  if (!tour) return notFound();

  return (
    <div className='container mt-[90px]'>
      <TourDetail tour={tour} />
    </div>
  );
}
