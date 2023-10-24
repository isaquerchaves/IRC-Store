import Image, { ImageProps } from "next/image";
import React from "react";

const PromoBanner = ({alt, ...props}: ImageProps) => {
    return ( 
        <Image
        height={0}
        width={0}
        className="mx-auto my-auto h-auto w-full max-w-full p-5 lg:max-w-2xl"
        sizes="100vw"
        alt={alt}
        {...props}
      />
     );
};
 
export default PromoBanner;