import { TourCardProps } from "@/types/tour";
import { toSlug } from "@/utils/constants";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337";

export async function getTours({ page = 1, search = "", category = "" } = {}) {
  const query = new URLSearchParams({
    "pagination[page]": page.toString(),
    "pagination[pageSize]": "6",
    "filters[title][$containsi]": search,
    "populate": "*",
    ...(category && { "filters[category][slug][$eq]": category }),
  });

  const res = await fetch(`${API_URL}/api/tours?${query.toString()}`);
  const data = await res.json();
  const tours: TourCardProps[] = data.data?.map((tour: any) => {
    const slugify = toSlug(tour.title)
    return {  
      ...tour,
      id: tour.id,
      documentId: tour.documentId,
      title: tour.title,
      slug: slugify,
      imageUrl: `${API_URL}${tour.image?.formats?.thumbnail?.url}` || "",
      subImageUrl: tour.subImage?.map((img: any) => `${API_URL}${img.formats?.thumbnail?.url}`) || [],
      date: tour.date,  
      time: tour.time,
      price: tour.price,

    };
  });

  return {
    tours,
    pagination: data.meta.pagination,
  };
}


export async function getTour(documentId : string) {
  const res = await fetch(`${API_URL}/api/tours?filters[documentId][$eq]=${documentId}&populate=*`, {
    cache: "no-store",
  });

  const data = await res.json()
  const tour = data.data[0];
  if (!tour) {  
    return null;
  }
  return {
    ...tour,
    id: tour.id,
    documentId: tour.documentId,  
    title: tour.title,
    date: tour.date,
    time: tour.time,
    price: tour.price,
    subImageUrl: tour.subImage?.map((img: any) => `${API_URL}${img.formats?.thumbnail?.url}`) || [],
    imageUrl: `${API_URL}${tour.image?.formats?.thumbnail?.url}` || "",
  }
}

export async function getCategories() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/categories?populate=tours`);
  const data = await res.json();
  return data.data;
}
