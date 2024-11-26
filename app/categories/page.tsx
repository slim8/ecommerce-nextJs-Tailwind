import Link from "next/link";
import { categories } from "@/lib/data/categories";

export default function CategoriesPage() {
  return (
    <div className="container py-8">
      <h1 className="mb-8 text-4xl font-bold">Categories</h1>
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
    </div>
  );
}