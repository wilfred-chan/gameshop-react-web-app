import {Container, Grid } from "@mui/material";
// import { products } from "../../data";
import SingleProduct from "./SingleProduct";
import { useState, useEffect } from "react";
import axios from "axios";


const BASE_URL = "https://gameshop.herokuapp.com/api/";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
        const response = await axios.get(BASE_URL + 'games');
        setProducts(response.data);
    }
    try {
      getProducts();
    } catch (error) {
      console.log(error);
    }
  }, [])

  const renderProducts = products.map((product) => (
      <Grid item key={product.game_id} xs={2} sm={4} md={4} display="flex" flexDirection={'column'} alignItems="center">
        <SingleProduct product={product} />

      </Grid>
  ));
  return (
      <Container>
        <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            justifyContent="center"
            sx={{ margin: `20px 4px 10px 4px` }}
            columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {renderProducts}
        </Grid>
      </Container>
  );
}