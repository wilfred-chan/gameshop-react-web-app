import {
  Product, ProductActionButton,
  ProductActionsWrapper, ProductAddToCart, ProductFavButton,
  ProductImage,
} from "../../styles/products";
import ProductMeta from "./ProductMeta";
import {Stack, Tooltip} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import FitScreenIcon from "@mui/icons-material/FitScreen";
import {useState} from "react";
import useDialogModal from "../../hooks/useDialogModal";
import ProductDetail from "../productdetail";
import useCart from "../../hooks/useCart";
import useFavorites from "../../hooks/useFavorites";

export default function SingleProduct({ product }) {
  const [showOptions, setShowOptions] = useState(false);
  const handleMouseEnter = () => {
    setShowOptions(true);
  };
  const handleMouseLeave = () => {
    setShowOptions(false);
  };
  
  const {addToCart, addToCartText} = useCart(product);

  const {addToFavorites, isAdded} = useFavorites(product);


  const [ProductDetailDialog, showProductDetailDialog, closeProductDialog] =
      useDialogModal(ProductDetail);

  return (
      <>
        <Product onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <ProductImage src={product.cover_image} />
          <ProductFavButton isfav={0}>
            <FavoriteIcon onClick={addToFavorites} />
          </ProductFavButton>
          {(showOptions) && (
              <ProductAddToCart
                  onClick ={addToCart}
                  show={showOptions} variant="contained">
                {addToCartText}
              </ProductAddToCart>
          )}
          <ProductActionsWrapper show={showOptions}>
            <Stack direction={"column"}>
              <ProductActionButton>
                <Tooltip placement="left" title="share this product">
                  <ShareIcon color="primary" />
                </Tooltip>
              </ProductActionButton>
              <ProductActionButton onClick={() => showProductDetailDialog()}>
                <Tooltip placement="left" title="Full view">
                  <FitScreenIcon color="primary" />
                </Tooltip>
              </ProductActionButton>
            </Stack>
          </ProductActionsWrapper>
        </Product>
        <ProductMeta product={product} />
        <ProductDetailDialog product={product} />
      </>
  );
}

