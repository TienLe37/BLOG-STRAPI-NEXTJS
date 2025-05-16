export type Category = {
  id: number;
  name: string;
  slug: string; // Assuming your API returns a 'slug' field
  type: string; // Assuming your API returns a 'type' field (e.g., 'domestic', 'international')
}