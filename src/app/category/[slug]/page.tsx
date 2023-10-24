import React from "react";
import { prismaClient } from "../../../lib/prisma";
import { Badge } from "../../../components/ui/Badge";
import { ShapesIcon } from "lucide-react";
import { computerProductTotalPrice } from "../../../helpers/product";
import ProductItem from "../../../components/ui/product-item";
import { CATEGORY_ICON } from "../../../constants/category-icon";

const CategoryProducts = async ({ params }: any) => {
  const category = await prismaClient.category.findFirst({
    where: {
        slug: params.slug,
    },
    include:{
        products: true,
    }
  });
  const product = await prismaClient.product.findMany({
    where: {
      category: {
        slug: params.slug,
      },
    },
  });

  if (!category){
    return null;
  }

  return (
    <div className="p-5 flex flex-col gap-8">
      <Badge
        className="w-fit gap-1 border-2 border-primary px-3 py-[0.375rem] text-base uppercase"
        variant="outline"
      >
        {CATEGORY_ICON[params.slug as keyof typeof CATEGORY_ICON]}
        {category.name}
      </Badge>
      <div className="grid grid-cols-2 gap-8">
        {category.products.map(product => <ProductItem key={product.id} product={computerProductTotalPrice(product)}/>)}
      </div>
    </div>
  );
};

export default CategoryProducts;