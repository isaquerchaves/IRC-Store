import Image from "next/image";
import React from "react";
import Categories from "./components/categories";
import { prismaClient } from "@/lib/prisma";
import ProductList from "./components/product-list";

export default async function Home() {
  // Pegar produtos onde o dicountPercentage > 0, ou seja, apenas produtos com desconto
  const deals = await prismaClient.product.findMany({
    where: {
      discountPercentage: {
        gt: 0,
      },
    },
  });

  return (
    <div className="">
      <Image
        src="/banner-home-01.png"
        height={0}
        width={0}
        alt="Até 55% de desconto esse mês!"
        className="mx-auto my-auto h-auto w-full max-w-full p-5 lg:max-w-2xl"
        sizes="100vw"
      />
      <div className="mx-auto my-auto mt-8 h-auto w-full max-w-full p-5 lg:max-w-2xl">
        <Categories />
      </div>

      <div className="mt-5">
        <ProductList products={deals} />
      </div>
    </div>
  );
}
