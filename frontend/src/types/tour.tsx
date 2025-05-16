export type TourCardProps = {
  id: number;
  documentId?: string;
  title: string;
  imageUrl: string;
  subImageUrl?: string[];
  date: string;
  time: string;
  price: number;
}
export type TourListProps = {
  initialTours: TourCardProps[];
  initialPagination: any;
}