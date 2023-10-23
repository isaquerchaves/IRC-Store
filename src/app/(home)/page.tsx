"use client";

import Image from "next/image";
import React from "react";

export default function Home() {
  return (
    <div className="p-5">
      <img
        src="/banner-home-01.png"
        alt="Até 55% de desconto esse mês!"
        className="w-full max-w-full h-auto mx-auto my-auto lg:max-w-2xl"
        sizes="100vw"
      />
    </div>
  );
}
