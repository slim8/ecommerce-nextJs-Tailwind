import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function CheckoutSuccessPage() {
  return (
    <div className="container flex flex-col items-center justify-center py-16">
      <h1 className="text-4xl font-bold">Thank you for your order!</h1>
      <p className="mt-4 text-center text-muted-foreground">
        We&apos;ve received your order and will send you a confirmation email shortly.
      </p>
      <Link href="/">
        <Button className="mt-8">Continue Shopping</Button>
      </Link>
    </div>
  );
}