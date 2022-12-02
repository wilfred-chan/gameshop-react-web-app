import React, {useEffect} from 'react';
import {Container} from "@mui/material";
import {ThemeProvider} from "@mui/system";
import theme from "./styles/theme";
import Header from './components/header';
import Banner from './components/banner';
import Products from './components/products';


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
          <Products />

        </Container>
      </ThemeProvider>


  );
}

export default App;
