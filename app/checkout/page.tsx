"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useCartStore } from "@/lib/store";
import { useRouter } from "next/navigation";

const checkoutSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  address: z.string().min(5, "Address must be at least 5 characters"),
  city: z.string().min(2, "City must be at least 2 characters"),
  country: z.string().min(2, "Country must be at least 2 characters"),
  postalCode: z.string().min(3, "Postal code must be at least 3 characters"),
});

type CheckoutForm = z.infer<typeof checkoutSchema>;

export default function CheckoutPage() {
  const { items, clearCart } = useCartStore();
  const router = useRouter();
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CheckoutForm>({
    resolver: zodResolver(checkoutSchema),
  });

  const onSubmit = (data: CheckoutForm) => {
    // Here you would typically send the order to your backend
    console.log("Order submitted:", { items, total, ...data });
    clearCart();
    router.push("/checkout/success");
  };

  if (items.length === 0) {
    router.push("/cart");
    return null;
  }

  return (
    <div className="container py-8">
      <h1 className="mb-8 text-4xl font-bold">Checkout</h1>
      <div className="grid gap-8 lg:grid-cols-2">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input id="name" {...register("name")} />
            {errors.name && (
              <p className="text-sm text-destructive">{errors.name.message}</p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" {...register("email")} />
            {errors.email && (
              <p className="text-sm text-destructive">{errors.email.message}</p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="address">Address</Label>
            <Input id="address" {...register("address")} />
            {errors.address && (
              <p className="text-sm text-destructive">{errors.address.message}</p>
            )}
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="city">City</Label>
              <Input id="city" {...register("city")} />
              {errors.city && (
                <p className="text-sm text-destructive">{errors.city.message}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="country">Country</Label>
              <Input id="country" {...register("country")} />
              {errors.country && (
                <p className="text-sm text-destructive">
                  {errors.country.message}
                </p>
              )}
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="postalCode">Postal Code</Label>
            <Input id="postalCode" {...register("postalCode")} />
            {errors.postalCode && (
              <p className="text-sm text-destructive">
                {errors.postalCode.message}
              </p>
            )}
          </div>
          <Button type="submit" className="w-full">
            Place Order (${total.toFixed(2)})
          </Button>
        </form>

        <div className="rounded-lg border p-6">
          <h2 className="text-lg font-semibold">Order Summary</h2>
          <div className="mt-4 space-y-4">
            {items.map((item) => (
              <div key={item.id} className="flex justify-between">
                <div>
                  <p className="font-medium">
                    {item.name} × {item.quantity}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    ${item.price.toFixed(2)} each
                  </p>
                </div>
                <p className="font-semibold">
                  ${(item.price * item.quantity).toFixed(2)}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-6 flex justify-between border-t pt-4 font-semibold">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}