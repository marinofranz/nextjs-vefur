import React from "react";
import { Product } from "./components/product";

export interface Product {
  name: string;
  price: number;
  imageUrl: string;
}

const products: Product[] = [
  {
    name: "NG Models Airbus Transport International A330-743L Beluga XL F-GXLH",
    price: 11_100,
    imageUrl:
      "https://www.aircraftmodelstore.co.uk/cdn/shop/files/60012_1.jpg?v=1758125084&width=800",
  },
  {
    name: "NG Models Wizz Air Malta Airbus A321neo 9H-WAT",
    price: 8_900,
    imageUrl:
      "https://www.aircraftmodelstore.co.uk/cdn/shop/files/13116_1__86296.1735207046.1280.1280.jpg?v=1749206652&width=800",
  },
  {
    name: 'NG Models KLM Royal Dutch Airlines "Koninginnepage / Swallowtail" Airbus A321neo',
    price: 8_900,
    imageUrl:
      "https://www.aircraftmodelstore.co.uk/cdn/shop/files/13109_1__59344.1735205049.1280.1280.jpg?v=1749206538&width=800",
  },
  {
    name: "NG Models KLM Royal Dutch Airlines Boeing 777-300ER PH-BVA revised OrangePride",
    price: 11_900,
    imageUrl:
      "https://www.aircraftmodelstore.co.uk/cdn/shop/files/73040_1__21105.1725384005.1280.1280.jpg?v=1749195473&width=800",
  },
  {
    name: "NG Models JetBlue Airways (Blueunity) Airbus A321-200",
    price: 8_900,
    imageUrl:
      "https://www.aircraftmodelstore.co.uk/cdn/shop/files/13131_1.jpg?v=1752591038&width=800",
  },
  {
    name: "NG Models Boeing Comanpay Boeing 737 MAX 7 N7202U",
    price: 9_000,
    imageUrl:
      "https://www.aircraftmodelstore.co.uk/cdn/shop/files/87005_1__03340.1725385138.1280.1280.jpg?v=1749195406&width=800",
  },
];

export default function Home() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {products.map((product) => (
          <React.Fragment key={product.name}>
            {/*
              Fragment svo ég get sett kommentið inn
              getum notað spread operator a product því ProductProps er einfaldlega bara Product
            */}
            <Product {...product} />
          </React.Fragment>
        ))}
      </div>
    </>
  );
}
