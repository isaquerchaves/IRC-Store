import React from "react";
import { prismaClient } from "../../../lib/prisma";
import ProductImages from "../../category/[slug]/components/product-images";

interface ProductDetailsPageProps {
    params: {
        slug: string
    }
}

const ProductDetailsPage = async ({params: {slug},}: ProductDetailsPageProps) => {
    const product = await prismaClient.product.findFirst({
        where: {
            slug: slug,
        },
    });

    if(!product) return null;
    
    return ( 
        <div>
            <ProductImages imageUrls={product.imageUrls} name={product.name} />
        </div>
        );
}
 
export default ProductDetailsPage;