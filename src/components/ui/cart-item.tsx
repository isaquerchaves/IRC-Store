import { CartContext, CartProduct } from "@/providers/cart";
import Image from "next/image";
import { Button } from "./button";
import { ArrowLeftIcon, ArrowRightIcon, TrashIcon } from "lucide-react";
import { useContext } from "react";

interface CartItemProps {
    product: CartProduct;
}

const CartItem = ({ product }: CartItemProps) => {
    const {decreaseProductQuantity,increaseProductQuantity, removeProductFromCart} = useContext(CartContext)

    const handleincreaseProductQuantityClick = () => {
        increaseProductQuantity(product.id);
    }
    
    const handledecreaseProductQuantityClick = () => {
        decreaseProductQuantity(product.id);
    }

    const handleremoveProductFromCartClick = () => {
        removeProductFromCart(product.id);
    }

    return (
        <div>
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    {/*Parte direita (foto e nome)*/}
                    <div className="bg-accent flex items-center justify-center rounded-lg w-[77px] h-[77px]">
                        <Image
                            src={product.imageUrls[0]}
                            width={0}
                            height={0}
                            sizes="100vw"
                            alt={product.name}
                            className="w-auto h-auto max-w-[70%] max-h-[70%]"
                        />
                    </div>
                    <div className="flex flex-col">
                        <p className="text-xs">{product.name}</p>

                        <div className="flex items-center gap-2">
                            <p className="font-bold text-sm">R$ {product.totalPrice.toFixed(2)}</p>
                            {product.discountPercentage > 0 && (
                                <p className="opacity-75 line-through text-xs">R$ {Number(product.basePrice).toFixed(2)}</p>
                            )}
                        </div>
                        <div className="flex items-center gap-1">
                            <Button
                                size="icon"
                                variant="outline"
                                className="h-8 w-8"
                                onClick={handledecreaseProductQuantityClick}
                            >
                                <ArrowLeftIcon size={16}  />
                            </Button>

                            <span className="text-xs">{product.quantity}</span>

                            <Button
                                size="icon"
                                variant="outline"
                                className="h-8 w-8"
                                onClick={handleincreaseProductQuantityClick}
                            >
                                <ArrowRightIcon size={16}  />
                            </Button>
                        </div>
                    </div>
                </div>
                <div>
                    <Button size="icon" variant="outline" onClick={handleremoveProductFromCartClick}>
                                <TrashIcon size={16} />
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default CartItem;