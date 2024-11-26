export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  rating: number;
  stock: number;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Premium Wireless Headphones",
    description: "High-quality wireless headphones with noise cancellation",
    price: 299.99,
    category: "electronics",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80",
    rating: 4.5,
    stock: 50
  },
  {
    id: "2",
    name: "Smart Watch Pro",
    description: "Advanced smartwatch with health tracking features",
    price: 199.99,
    category: "electronics",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80",
    rating: 4.2,
    stock: 30
  },
  {
    id: "3",
    name: "Premium Leather Wallet",
    description: "Handcrafted genuine leather wallet",
    price: 79.99,
    category: "accessories",
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=800&q=80",
    rating: 4.8,
    stock: 100
  }
];