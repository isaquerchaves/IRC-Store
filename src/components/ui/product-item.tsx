import { ProductWithTotalPrice } from "@/helpers/product";
import { ArrowDownIcon, Badge } from "lucide-react";
import Image from "next/image";

interface ProductItemProps {
  product: ProductWithTotalPrice;
}

const ProductItem = ({ product }: ProductItemProps) => {
  return (
    <div className="flex max-w-[170px] flex-col gap-4">
      <div className="relative flex h-[170px] w-[170px] items-center justify-center rounded-lg bg-accent">
        <Image
          src={product.imageUrls[0]}
          height={0}
          width={0}
          sizes="100vw"
          className="h-auto max-h-[70%] w-auto max-w-[80%] "
          // Fazer com que o produto não perca o ASPECT RATIO
          style={{
            objectFit: "contain",
          }}
          alt={product.name}
        />

        {product.discountPercentage > 0 && (
          <div className="absolute left-2 top-2 inline-flex items-center rounded-full border bg-primary px-2 py-[2px] text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
            <ArrowDownIcon size={14} /> {product.discountPercentage}%
          </div>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <p className="w-full overflow-hidden text-ellipsis whitespace-nowrap text-sm">
          {product.name}
        </p>

        <div className="flex items-center gap-2">
          {product.discountPercentage > 0 ? ( // Se o produto tiver desconto, vai mostrar o preço com desconto
            <>
              <p className="text-xs line-through opacity-75">
                  R$ {Number(product.basePrice).toFixed(2)}
              </p>
              <p className="font-semibold">
                R$ {product.totalPrice.toFixed(2)}
              </p>
            </>
          ) : (
            // Se o produto não tiver desconto, vai mostrar o preço sem desconto
            <p className="text-sm font-semibold">
              R$ {product.totalPrice.toFixed(2)}
            </p>
          )}
        </div>
        
      </div>
    </div>
  );
};

export default ProductItem;
