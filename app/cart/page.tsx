"use client";

import Link from "next/link";
import { Minus, Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/lib/store";
import { Separator } from "@/components/ui/separator";

export default function CartPage() {
  const { items, removeItem, updateQuantity } = useCartStore();

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (items.length === 0) {
    return (
      <div className="container flex flex-col items-center justify-center py-16">
        <h1 className="text-2xl font-bold">Your cart is empty</h1>
        <p className="mt-2 text-muted-foreground">Add some products to your cart to see them here.</p>
        <Link href="/products">
          <Button className="mt-8">Continue Shopping</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="container py-8">
      <h1 className="mb-8 text-4xl font-bold">Shopping Cart</h1>
      <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          {items.map((item) => (
            <div key={item.id} className="mb-6">
              <div className="flex gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-24 w-24 rounded-lg object-cover"
                />
                <div className="flex flex-1 flex-col">
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                  <div className="mt-auto flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => updateQuantity(item.id, Math.max(0, item.quantity - 1))}
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                      <span>{item.quantity}</span>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => removeItem(item.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
                  <p className="text-sm text-muted-foreground">${item.price.toFixed(2)} each</p>
                </div>
              </div>
              <Separator className="mt-6" />
            </div>
          ))}
        </div>
        <div className="rounded-lg border p-6">
          <h2 className="text-lg font-semibold">Order Summary</h2>
          <div className="mt-4 flex justify-between">
            <span>Subtotal</span>
            <span>${total.toFixed(2)}</span>
          </div>
          <Separator className="my-4" />
          <div className="flex justify-between font-semibold">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
          <Link href="/checkout">
            <Button className="mt-6 w-full">Proceed to Checkout</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}