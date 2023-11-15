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
        <div key={product.id} className="max-w[170px] w-[170px]">
          <ProductItem
            product={computerProductTotalPrice(product)}
          />
        </div>
      ))}
    </div>
  );
};

export default ProductList;
