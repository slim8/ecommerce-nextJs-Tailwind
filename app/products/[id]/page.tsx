"use client";

import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { products } from "@/lib/data/products";
import { useCartStore } from "@/lib/store";

export function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id === params.id);
  if (!product) notFound();

  const addToCart = useCartStore((state) => state.addItem);

  return (
    <div className="container py-8">
      <div className="grid gap-8 md:grid-cols-2">
        <div className="aspect-square overflow-hidden rounded-lg">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl font-bold">{product.name}</h1>
          <p className="text-xl font-semibold">${product.price.toFixed(2)}</p>
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">Rating:</span>
            <span className="font-semibold">{product.rating}/5</span>
          </div>
          <p className="text-muted-foreground">{product.description}</p>
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">Stock:</span>
            <span className="font-semibold">{product.stock}</span>
          </div>
          <Button
            size="lg"
            onClick={() => addToCart(product)}
            className="mt-4"
          >
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
}