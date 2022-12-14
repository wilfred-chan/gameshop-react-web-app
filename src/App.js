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
// import '../node_modules/bootstrap/dist/css/bootstrap.css'
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
          <UIProvider>
          <Header />
          <Banner />
          <Box display = "flex" justifyContent={"center"} sx = {{p: 4}}>
            <Typography variant = "h4">Our Products</Typography>
          </Box>
          <Products />
            <Cart />
            <Favorites />
            <SearchBox/>
          </UIProvider>
        </Container>
      </ThemeProvider>
  );
}

export default App;
