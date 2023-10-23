"use client";

import Image from "next/image";
import React from "react";
import Categories from "./components/categories";

export default function Home() {
  return (
    <div className="p-5">
      <Image 
        src="/banner-home-01.png"
        height={0}
        width={0}
        alt="Até 55% de desconto esse mês!"
        className="w-full max-w-full h-auto mx-auto my-auto lg:max-w-2xl"
        sizes="100vw"
      />
      <div className="mt-8 w-full max-w-full h-auto mx-auto my-auto lg:max-w-2xl">
        <Categories />
      </div>
    </div>
  );
}
