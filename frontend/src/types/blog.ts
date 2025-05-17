export type BlogCardProps = {
  id: number;
  documentId: string;
  title: string;
  date: string;
  imageUrl: string;
  description: string;
  author: {
    name: string;
  };
  user: {
    id: number;
  }
  slug: string;
}
export type BlogDetailProps = {
  id: number;
  documentId: string;
  title: string;
  date: string;
  imageUrl: string;
  description: string; 
  author: {
    name: string;
  };
  slug: string;
}
export type BlogProps = {
  id: number;
  documentId?: string;
  title: string;
  date: string;
  imageUrl: string;
  description: string
}

