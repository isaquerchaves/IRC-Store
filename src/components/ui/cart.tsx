import { ShapesIcon } from "lucide-react";
import { Badge } from "./badge";
import { useContext } from "react";
import { CartContext } from "@/providers/cart";

const Cart = () => {
    const {products} = useContext(CartContext);

    return ( 
        <div>
            <Badge className="w-fit gap-1 text-base uppercase border-primary px-3 py-[0.375rem] border-2" 
                    variant="outline">
                <ShapesIcon size={16}/>
                Catálogo
            </Badge>

            {/*RENDERIZAR OS PRODUTOS*/}
            {products.map((product) => (
                <h1 key={product.id}>{product.name}</h1>
            ))}
        </div>
     );
}
 
export default Cart;