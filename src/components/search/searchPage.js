import {
  Container,
  Typography,
  Box,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
  Grid,
} from '@mui/material';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import axios from 'axios';

import SearchResultItem from './searchResultItem';


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
      <Container component="main" maxWidth="xs">
        <Link to="/"><button className="col-10 btn btn-secondary">Back to Home</button></Link>
        <Typography component="h1" variant="h5" sx={{ mt: 1 }}>
          Search Games
        </Typography>
        <Container
          component="form"
          onSubmit={handleSubmit}
          noValidate
          sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            id="input"
            label="Type a game name"
            name="input"
            autoFocus
          />
          <Button type="submit" variant="contained" sx={{ mt: 3, mx: 3 }}>
            Search
          </Button>
          <Grid container>
            <Grid item xs></Grid>
          </Grid>
        </Container>
      </Container>
      <Container component="main" maxWidth="xs">

        {results.length > 0 && <Typography component="h1" variant="h5" sx={{ mt: 1 }}>
          Search Results
        </Typography>}
        {results.map((result) => (
          <SearchResultItem game={result} key={result.game_id}/>
        ))}
      </Container>
    </>
  );
}
