import { ProductWithTotalPrice } from "@/helpers/product";
import { ArrowDownIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ProductItemProps {
  product: ProductWithTotalPrice;
  className?: string;
}

const ProductItem = ({ product, className }: ProductItemProps) => {
  return (
    <Link
      href={`/product/${product.slug}`}
      className={cn("flex min-w-[156px] flex-col gap-4", className)}
    >
      <div className="relative flex aspect-square w-full items-center justify-center rounded-lg bg-accent">
        <Image
          src={product.imageUrls[0]}
          height={0}
          width={0}
          sizes="100vw"
          className="h-auto max-h-[70%] w-auto max-w-[80%] object-contain"
          alt={product.name}
        />

        {product.discountPercentage > 0 && (
          <div className="absolute left-2 top-2 inline-flex items-center rounded-full border bg-primary px-2 py-[2px] text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
            <ArrowDownIcon size={14} /> {product.discountPercentage}%
          </div>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <p className="truncate text-sm">{product.name}</p>

        <div className="flex items-center gap-2 ">
          {product.discountPercentage > 0 ? (
            <>
              <p className="truncate font-semibold lg:text-lg">
                {product.totalPrice.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </p>

              <p className="truncate text-xs line-through opacity-75 lg:text-sm">
                {Number(product.basePrice).toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </p>
            </>
          ) : (
            <p className="truncate text-sm font-semibold">
              {Number(product.basePrice).toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </p>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ProductItem;