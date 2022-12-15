import {
  Container,
  Typography,
  Box,
  TextField,
  Grid, ListItemButton, ListItemIcon, IconButton,
} from '@mui/material';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import axios from 'axios';
import HomeIcon from '@mui/icons-material/Home';


import SearchResultItem from './searchResultItem';
import {Colors} from "../../styles/theme";
import {
  ActionIconsContainer,
  HeaderBar,
  HeaderContainer,
  NavLinks
} from "../../styles/header";
import SearchIcon from "@mui/icons-material/Search";



const BASE_URL = "https://gameshop.herokuapp.com/api/search/";

export default function SearchPage() {
  const [results, setResults] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const searchInput = data.get('input');
    const response = await axios.get(BASE_URL+searchInput);
    setResults(response.data);
  };

  return (
      <>
        <HeaderContainer>
          <HeaderBar>GameShop</HeaderBar>
          <ActionIconsContainer>
            <NavLinks type="row">
              <ListItemButton
                  sx={{
                    justifyContent: "center",
                  }}
              >
                <ListItemIcon
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      color: Colors.secondary,
                    }}
                >
                  <Link to="/" >
                    <HomeIcon sx={{
                      display: "flex",
                      justifyContent: "center",
                      color: Colors.secondary,
                    }}/>
                  </Link>
                </ListItemIcon>
              </ListItemButton>

            </NavLinks>
          </ActionIconsContainer>
        </HeaderContainer>
        <Container component="main" maxWidth="xs">
          <Box display = "flex" justifyContent={"center"} sx = {{p: 4}}>
            <Typography variant = "h5" sx ={{color: Colors.primary}}>Search Games</Typography>
          </Box>

          <Container
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx = {{marginLeft: 10, marginBottom:1}}>
            <TextField

                id="input"
                color = "secondary"
                placeholder="Type a game name"
                name="input"
                variant="standard"
                autoFocus
            />
            <IconButton type="submit">
              <SearchIcon sx={{ fontSize: { xs: '3rem', md: "2rem" }, marginTop: 1}} color="secondary" />
            </IconButton>

            <Grid container>
              <Grid item xs></Grid>
            </Grid>
          </Container>
        </Container>
        <Container component="main">

          {results.length > 0 && <Box display = "flex" justifyContent={"center"} sx = {{p: 4}}>
            <Typography variant = "h5" sx ={{color: Colors.primary}}>Search Results</Typography>
          </Box>}
          <Container>
            <Grid
                container
                spacing={{ xs: 2, md: 3 }}
                justifyContent="center"
                sx={{ margin: `20px 4px 10px 4px` }}
                columns={{ xs: 4, sm: 8, md: 12 }}
            >

              {results.map((result) => (
                  <Grid item key={result.game_id} xs={2} sm={4} md={4} display="flex" flexDirection={'column'} alignItems="center">
                  <SearchResultItem game={result} key={result.game_id}/>
                  </Grid>
              ))}

            </Grid>
          </Container>

        </Container >
      </>
  );
}