import Image from "next/image";
import type { Product } from "../page";

// Ég bý bara til nýja týpu því ég vill fá annað nafn á props
type ProductProps = Product;

export function Product({ name, price, imageUrl }: ProductProps) {
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
            {price.toLocaleString()}
          </span>
          <span className="text-xs font-medium text-sky-600">ISK</span>
        </div>

        <button className="w-full cursor-pointer bg-sky-500 text-white py-2 px-4 rounded hover:bg-sky-600 transition-colors mt-auto">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
