import React, {useEffect} from 'react';
import {Box, Container, Typography} from "@mui/material";
import {ThemeProvider} from "@mui/system";
import theme from "./styles/theme";
import Header from './components/header';
import Banner from './components/banner';
import Products from './components/products';
import {UIProvider} from "./context/ui";
import SearchBox from "./components/search";
import Cart from "./components/cart";
import Favorites from "./components/favorites/index"
import './vendors/bootstrap-5.2.3-dist/css/bootstrap.css'
import RegisterPage from "./components/register";
// import LoginPage from "./components/login";

function App() {
  useEffect(() => {
    document.title = "GameShop";
  }, []);

  return (
      <ThemeProvider theme={theme}>
        <Container maxWidth="xl"
                   sx ={{
                     background: '#fff'
                   }}>
          <Header />
          <Banner />
          <Box display = "flex" justifyContent={"center"} sx = {{p: 4}}>
            <Typography variant = "h4">Our Products</Typography>
          </Box>
          <Products />
            <Cart />
            <Favorites />
            <SearchBox/>
        </Container>
      </ThemeProvider>
  );
}

export default App;
