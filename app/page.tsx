import Link from "next/link";
import { Button } from "@/components/ui/button";
import { categories } from "@/lib/data/categories";
import { products } from "@/lib/data/products";

export default function Home() {
  const featuredProducts = products.slice(0, 3);

  return (
    <div className="flex flex-col gap-12 pb-8">
      {/* Hero Section */}
      <section className="relative h-[600px] w-full overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1600&q=80"
            alt="Hero"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30" />
        </div>
        <div className="container relative flex h-full flex-col items-center justify-center text-center">
          <h1 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Discover Amazing Products
          </h1>
          <p className="mt-4 max-w-[600px] text-lg text-white/90">
            Shop the latest trends and discover premium quality products at competitive prices.
          </p>
          <Link href="/products">
            <Button size="lg" className="mt-8">
              Shop Now
            </Button>
          </Link>
        </div>
      </section>

      {/* Categories Section */}
      <section className="container">
        <h2 className="mb-8 text-3xl font-bold tracking-tight">Shop by Category</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/categories/${category.id}`}
              className="group relative overflow-hidden rounded-lg"
            >
              <img
                src={category.image}
                alt={category.name}
                className="h-[300px] w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 p-6">
                <h3 className="text-2xl font-semibold text-white">{category.name}</h3>
                <p className="mt-2 text-sm text-white/90">{category.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="container">
        <h2 className="mb-8 text-3xl font-bold tracking-tight">Featured Products</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProducts.map((product) => (
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
      </section>
    </div>
  );
}