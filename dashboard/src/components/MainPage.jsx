"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import gustavo from "../../public/gustavo.avif";
import pablo from "../../public/pablo.webp";
import maria from "../../public/maria.jpg";
import stars from "../../public/starss.png";

export default function MainPage() {
  const ratings = [
    {
      name: "Pablo",
      photo: pablo,
      rating: 5,
      review:
        "El proceso de compra es igualmente sencillo y seguro, con opciones de pago flexibles y una atención al cliente que supera todas las expectativas. La entrega de las obras fue rápida y segura.",
    },
    {
      name: "Maria",
      photo: maria,
      rating: 5,
      review:
        "Lo primero que me cautivó fue la estética del dashboard, su diseño limpio y moderno creó un ambiente acogedor desde el primer clic. Navegar por las categorías y explorar las diversas obras de arte se convirtió en un deleite visual.",
    },
    {
      name: "Gustavo",
      photo: gustavo,
      rating: 4,
      review:
        "La función de recomendaciones personalizadas fue uno de mis aspectos favoritos. El algoritmo de Mercado Arte parece entender mi gusto artístico a la perfección.",
    },
  ];

  const [products, setProducts] = useState();
  useEffect(() => {
    fetch("http://localhost:3000/api/productList")
      .then((req) => req.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <main className="p-4 grid grid-cols-[400px_minmax(400px,_1fr)] gap-3">
      <div className="bg-neutral-800 p-6 rounded-xl">
        <div className="flex flex-col text-4xl font-bold bg-gradient-to-r from-orange-300 via-sky-300 to-gray-50 text-transparent bg-clip-text">
          <h1>MercadoArte</h1>
          <span>Dashboard</span>
        </div>
        <div className="mt-8">
          <h2 className="text-2xl font-bold">
            Total de productos: {products ? products.length : 0}
          </h2>
        </div>
      </div>
      <div className="bg-neutral-700 rounded-xl p-6">
        <div>
          <ul className="flex flex-col gap-5">
            {ratings.map((rating) => (
              <li key={rating.name}>
                <div className="flex items-center gap-3">
                  <div>
                    <Image
                      className="rounded-full w-[70px] h-[70px] object-cover"
                      src={rating.photo}
                      alt="Photo"
                      width={70}
                      height={70}
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="font-bold">{rating.name}</h4>
                      <Image src={stars} alt="Rating" width={80} height={80} />
                    </div>
                    <p className="max-w-[600px] text-sm">{rating.review}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="bg-zinc-800 col-span-2 p-6 rounded-xl">
        <h3></h3>
      </div>
    </main>
  );
}
