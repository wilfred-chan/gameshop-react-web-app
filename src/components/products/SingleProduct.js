import {Product, ProductImage,} from "../../styles/products";

import ProductMeta from "./ProductMeta";

export default function SingleProductDesktop({ product }) {

  return (
      <>
        <Product >
          <ProductImage src={product.image} />

        </Product>
        <ProductMeta product={product} />

      </>
  );
}

