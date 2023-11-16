"use client";

import { Button } from "@/components/ui/button";
import { CardContent } from "@/components/ui/card";
import { ProductWithTotalPrice } from "@/helpers/product";
import { CartContext } from "@/providers/cart";
import { Product } from "@prisma/client";
import { ArrowDownIcon, ArrowLeftIcon, ArrowRightIcon, TruckIcon } from "lucide-react";
import { useContext, useState } from "react";
import ProductImages from "./product-images";

interface ProductInfoProps {
    product: ProductWithTotalPrice;
}

const ProductInfo = ({
    product,
}: ProductInfoProps) => {

    const [quantity, setQuantity] = useState(1);

    const { addProductToCart } = useContext(CartContext);

    const handleDecreaseQuantityClick = () => {
        setQuantity((prev) => (prev == 1 ? prev : prev - 1));
    };

    const handleIncreaseQuantityClick = () => {
        setQuantity((prev) => prev + 1);
    };

    const handleAddToCartClick = () => {
        addProductToCart({ ...product, quantity });
    };

    return (
        <div className="flex flex-col px-5">
            <h2 className="text-lg">{product.name}</h2>

            <div className="flex alitems-center gap-2">
                <h1 className="text-xl font-bold">R$ {product.totalPrice.toFixed(2)}</h1>
                {product.discountPercentage > 0 && (
                    <div className="inline-flex items-center rounded-full border bg-primary px-2 py-[2px] text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
                        <ArrowDownIcon size={14} /> {product.discountPercentage}%
                    </div>
                )}
            </div>

            {product.discountPercentage > 0 && (
                <p className="text-sm line-through opacity-75">R$ {Number(product.basePrice).toFixed(2)}</p>
            )}

            <div className="flex items-center gap-2 mt-4">
                <Button size="icon" variant="outline" onClick={handleDecreaseQuantityClick}>
                    <ArrowLeftIcon size={16} />
                </Button>

                <span>{quantity}</span>

                <Button size="icon" variant="outline" onClick={handleIncreaseQuantityClick}>
                    <ArrowRightIcon size={16} />
                </Button>
            </div>

            <div className="flex flex-col gap-3 mt-8">
                <h3 className="font-bold text-base">Descrição</h3>
                <p className="text-sm opacity-60 text-justify">{product.description}</p>
            </div>

            <Button className="mt-8 uppercase font-bold" onClick={handleAddToCartClick}>ADICIONAR AO CARRINHO</Button>

            <div className="bg-accent flex items-center px-5 py-2 justify-between mt-5 rounded-lg">
                <div className="flex items-center gap-2">
                    <TruckIcon />
                    <div className="flex flex-col ">
                        <p className="text-xs">Entrega via <span className="font-bold">IRPacket®</span></p>
                        <p className="text-[#8162FF] text-xs">Envio para <span className="font-bold">todo Brasil</span></p>
                    </div>
                </div>

                <p className="font-bold text-xs">Frete grátis</p>
            </div>

        </div>
    );
}

export default ProductInfo;