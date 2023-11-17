"use client";

import { Button } from "@/components/ui/button";
import { ProductWithTotalPrice } from "@/helpers/product";
import { CartContext } from "@/providers/cart";
import { ArrowDownIcon, Minus, Plus, TruckIcon } from "lucide-react";
import { useContext, useState } from "react";
import { toast } from "react-toastify";

interface ProductInfoProps {
  product: ProductWithTotalPrice;
}

const ProductInfo = ({ product }: ProductInfoProps) => {
  const [quantity, setQuantity] = useState(1);

  const { addProductToCart } = useContext(CartContext);

  const handleDecreaseQuantityClick = () => {
    setQuantity((prev) => (prev === 1 ? prev : prev - 1));
  };

  const handleIncreaseQuantityClick = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleAddToCartClick = () => {
    addProductToCart({ ...product, quantity });

    toast.success("Adicionado ao carrinho com sucesso!", {
      position: "top-right",
      autoClose: 1500,
      theme: "dark",
      pauseOnHover: false,
    });
  };

  return (
    <div className="flex flex-col px-5 lg:w-[40%] lg:rounded-lg lg:bg-accent lg:p-10">
      <h2 className="text-lg lg:text-2xl">{product.name}</h2>
      <div className="flex items-center gap-1 lg:gap-2">
        <h1 className="text-xl font-bold lg:text-3xl">
          {product.totalPrice.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </h1>
        {product.discountPercentage > 0 && (
          <div className="inline-flex items-center rounded-full border bg-primary px-2 py-[2px] text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
          <ArrowDownIcon size={14} /> {product.discountPercentage}%
      </div>
        )}
      </div>

      {product.discountPercentage > 0 && (
        <p className="text-sm line-through opacity-75 lg:text-base">
          De:
          {Number(product.basePrice).toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </p>
      )}

      <div className="mt-4 flex items-center gap-2">
        <Button size="icon" variant="outline">
          <Minus size={16} onClick={handleDecreaseQuantityClick} />
        </Button>

        <span>{quantity}</span>

        <Button
          size="icon"
          variant="outline"
          onClick={handleIncreaseQuantityClick}
        >
          <Plus size={16} />
        </Button>
      </div>

      <div className="mt-8 flex flex-col gap-3">
        <h3 className="font-bold">Descrição</h3>
        <p className="text-justify text-sm opacity-60  lg:leading-relaxed">
          {product.description}
        </p>
      </div>

      <Button
        className="mt-8 font-bold uppercase"
        onClick={handleAddToCartClick}
      >
        Adicionar ao carrinho
      </Button>

      <div className="mt-5 flex items-center justify-between rounded-lg bg-accent px-5 py-2 lg:bg-[#2A2A2A]">
        <div className="flex items-center gap-2">
          <TruckIcon />
          <div className="flex flex-col">
            <p className="text-xs">
              Entrega via <span className="font-bold">IRPacket</span>
            </p>
            <p className="text-xs text-[#8162FF]">
              Envio para <span className="font-bold">todo Brasil</span>
            </p>
          </div>
        </div>

        <p className="text-xs font-bold">Frete grátis</p>
      </div>
    </div>
  );
};

export default ProductInfo;