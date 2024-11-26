export interface Category {
  id: string;
  name: string;
  description: string;
  image: string;
}

export const categories: Category[] = [
  {
    id: "electronics",
    name: "Electronics",
    description: "Latest gadgets and electronic devices",
    image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=800&q=80"
  },
  {
    id: "accessories",
    name: "Accessories",
    description: "Fashion accessories and more",
    image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=800&q=80"
  }
];