import { ShapesIcon } from "lucide-react";
import { Badge } from "./badge";
import { useContext } from "react";
import { CartContext } from "@/providers/cart";
import CartItem from "./cart-item";
import { computerProductTotalPrice } from "@/helpers/product";

const Cart = () => {
    const { products } = useContext(CartContext);

    return (
        <div className="flex flex-col gap-8">
            <Badge className="w-fit gap-1 text-base uppercase border-primary px-3 py-[0.375rem] border-2"
                variant="outline">
                <ShapesIcon size={16} />
                Catálogo
            </Badge>

            {/*RENDERIZAR OS PRODUTOS*/}
            <div className="flex flex-col gap-5">
                {products.map((product) => (
                    <CartItem key={product.id}
                        product={computerProductTotalPrice(product as any) as any} />
                ))}
            </div>
        </div>
    );
}

export default Cart;