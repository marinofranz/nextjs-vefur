import Image from "next/image";
import type { Product } from "../page";
import { Button } from "./button";
import { useState } from "react";

type ProductProps = Product;

export function Product({ name, price, imageUrl }: ProductProps) {
  const [amount, setAmount] = useState(0);

  return (
    <div className="border border-gray-300 rounded-lg overflow-hidden">
      <Image
        src={imageUrl}
        alt={name}
        width={500}
        height={192}
        className="w-full h-48 object-cover"
      />
      <div className="p-4 space-y-4 flex flex-col min-h-56">
        <h2 className="text-lg font-semibold line-clamp-2">{name}</h2>

        <div className="flex flex-row gap-1 items-baseline bg-linear-to-r from-sky-50 to-blue-50 p-3 rounded-lg border border-sky-200">
          <span className="text-2xl font-bold text-sky-700">
            {amount > 0
              ? (price * amount).toLocaleString()
              : price.toLocaleString()}
          </span>
          <span className="text-xs font-medium text-sky-600">ISK</span>
        </div>

        {amount > 0 ? (
          <div className="flex flex-row mt-auto">
            <Button
              className="rounded-r-none"
              onClick={() => setAmount(amount - 1)}
            >
              -
            </Button>
            <Button className="w-full rounded-none" disabled>
              {amount}
            </Button>
            <Button
              className="rounded-l-none"
              onClick={() => setAmount(amount + 1)}
            >
              +
            </Button>
          </div>
        ) : (
          <Button className="w-full" onClick={() => setAmount(amount + 1)}>
            Add to Cart
          </Button>
        )}
      </div>
    </div>
  );
}
