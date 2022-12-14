import axios from 'axios';
import { useEffect, useState } from 'react';
import MaterialTable from 'material-table';
import { Box, ThemeProvider, createTheme } from '@mui/material';
import { forwardRef } from 'react';

import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';


const BASE_URL = 'https://gameshop.herokuapp.com/api/';
const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
};

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
          icons={tableIcons}
          options={{
            search: true,
          }}
          editable={{
            onRowAdd: newData =>
                new Promise((resolve, reject) => {
                  setTimeout(() => {
                    setProducts([...products, newData]);

                    resolve();
                  }, 1000)
                }),
            onRowUpdate: (newData, oldData) =>
                new Promise((resolve, reject) => {
                  setTimeout(() => {
                    const dataUpdate = [...products];
                    const index = oldData.tableData.id;
                    dataUpdate[index] = newData;
                    setProducts([...dataUpdate]);

                    resolve();
                  }, 1000)
                }),
            onRowDelete: oldData =>
                new Promise((resolve, reject) => {
                  setTimeout(() => {
                    const dataDelete = [...products];
                    const index = oldData.tableData.id;
                    dataDelete.splice(index, 1);
                    setProducts([...dataDelete]);

                    resolve()
                  }, 1000)
                }),
          }}
        />
      </Box>
    </ThemeProvider>
  );
}
