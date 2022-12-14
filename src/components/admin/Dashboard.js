import axios from 'axios';
import { useEffect, useState } from 'react';
import MaterialTable from 'material-table';
import { Box, ThemeProvider, createTheme, Button } from '@mui/material';

const BASE_URL = 'https://gameshop.herokuapp.com/api/';

export default function Dashboard() {
  const [products, setProducts] = useState([]);
  const defaultMaterialTheme = createTheme();

  useEffect(() => {
    const getProducts = async () => {
      const response = await axios.get(BASE_URL + 'games');
      setProducts(response.data);
    };
    try {
      getProducts();
      // console.log(products);
    } catch (error) {
      console.log(error);
    }
  }, []);


  return (
    <ThemeProvider theme={defaultMaterialTheme}>
      <Box m="40px 0 0 0" height="75vh">
        <MaterialTable
          columns={[
            { title: 'Game Id', field: 'game_id' },
            { title: 'Price', field: 'price' },
            {
              title: 'Cover image',
              field: 'cover_image',
              render: (rowData) => (
                <img
                  style={{ height: 36, borderRadius: '50%' }}
                  src={rowData.cover_image}
                />
              ),
            },
          ]}
          data={products}
          title="GameShop Stock"
          options={{
            search: false,
          }}
        />
      </Box>
    </ThemeProvider>
  );
}
