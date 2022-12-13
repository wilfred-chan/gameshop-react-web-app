import { Typography } from "@mui/material";
import { ProductMetaWrapper } from "../../styles/products";
export default function ProductMeta({product}) {
  return (
      <ProductMetaWrapper>
        <Typography variant= "h5" lineHeight={2}>
          {product.title}
        </Typography>
        <Typography variant="body1">
          ${product.price}
        </Typography>
      </ProductMetaWrapper>
  );
}