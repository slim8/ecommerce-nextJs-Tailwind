import Link from "next/link";
import { products } from "@/lib/data/products";

export default function ProductsPage() {
  return (
    <div className="container py-8">
      <h1 className="mb-8 text-4xl font-bold">All Products</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <Link
            key={product.id}
            href={`/products/${product.id}`}
            className="group rounded-lg border p-4 transition-colors hover:bg-muted/50"
          >
            <div className="aspect-square overflow-hidden rounded-lg">
              <img
                src={product.image}
                alt={product.name}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="mt-4">
              <h3 className="font-semibold">{product.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{product.description}</p>
              <p className="mt-2 font-semibold">${product.price.toFixed(2)}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}