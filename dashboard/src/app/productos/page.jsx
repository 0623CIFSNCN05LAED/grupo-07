"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Productos() {
  const [products, setProducts] = useState(null);
  const [minPrice, setMinPrice] = useState(0);
  useEffect(() => {
    fetch("http://localhost:3000/api/productList")
      .then((req) => req.json())
      .then((data) => setProducts(data));
  }, []);

  const handleChangeMinPrice = (event) => {
    setMinPrice(event.target.value);
  };

  const filteredProducts = products
    ? products.filter((product) => product.price >= minPrice)
    : [];

  return (
    <div className="p-4">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-medium">Productos</h2>
        <div className="flex flex-col bg-neutral-800 py-1 px-3 rounded-xl">
          <span>${minPrice}</span>
          <input
            type="range"
            id="precio"
            min="0"
            max="900000"
            step={100}
            onChange={handleChangeMinPrice}
          />
        </div>
      </div>
      <ul className="grid xl:grid-cols-4 md:grid-cols-2 gap-5">
        {filteredProducts?.map((product) => (
          <li
            className="border border-neutral-500 cursor-pointer w-max rounded-xl"
            key={product.id}
          >
            <Image
              className="w-auto h-auto rounded-t-xl"
              src={product.img}
              alt={`Product Image of ${product.title}`}
              width={200}
              height={200}
            />
            <div className="p-2">
              <p className="max-w-[240px]">{product.title}</p>
              <p className="text-sm opacity-85">${product.price}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
