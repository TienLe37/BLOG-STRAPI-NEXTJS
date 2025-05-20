import { BlogCardProps } from '@/types';
import { toSlug } from '@/utils/constants';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:1337';

export async function getPosts({ page = 1, search = '', category = '' } = {}) {
  const query = new URLSearchParams({
    'pagination[page]': page.toString(),
    'pagination[pageSize]': '4',
    'filters[title][$containsi]': search,
    populate: '*',
    ...(category && { 'filters[category][slug][$eq]': category }),
  });

  const res = await fetch(`${API_URL}/api/blogs?${query.toString()}`);
  const data = await res.json();
  const posts: BlogCardProps[] = data.data?.map((item: any) => {
    const slugify = toSlug(item.title);
    return {
      ...item,
      id: item.id,
      documentId: item.documentId,
      title: item.title,
      slug: slugify,
      description: item.description,
      date: item.date,
      imageUrl: `${API_URL}${item.image?.formats?.thumbnail?.url}` || '',
      author: item.author || '',
    };
  });

  return {
    posts,
    pagination: data.meta.pagination,
  };
}

export async function getPost(documentId: string) {
  const res = await fetch(
    `${API_URL}/api/blogs?filters[documentId][$eq]=${documentId}&populate=*`,
    {
      cache: 'no-store',
    }
  );

  const data = await res.json();
  const post = data.data[0];
  if (!post) {
    return null;
  }
  return {
    ...post,
    id: post.id,
    documentId: post.documentId,
    title: post.title,
    slug: toSlug(post.title),
    description: post.description,
    date: post.date,
    imageUrl: `${API_URL}${post.image?.formats?.thumbnail?.url}` || '',
    author: post.author || '',
  };
}


  