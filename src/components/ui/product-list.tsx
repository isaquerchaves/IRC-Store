import ProductItem from "@/components/ui/product-item";
import { computerProductTotalPrice } from "@/helpers/product";
import { Product } from "@prisma/client";

// Buscando lista de produtos no nosso banco
interface ProductListProps {
  products: Product[];
}

const ProductList = ({ products }: ProductListProps) => {
  return (
    <div className="flex w-full gap-4 overflow-x-auto px-5 [&::-webkit-scrollbar]:hidden">
      {products.map((product) => (
        <ProductItem
          key={product.id}
          product={computerProductTotalPrice(product)}
          className="w-[156px] lg:w-[200px] lg:min-w-[200px]"
        />
      ))}
    </div>
  );
};

export default ProductList;