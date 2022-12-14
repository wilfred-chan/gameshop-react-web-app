import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Item from '@mui/material/Paper';
import { Link } from 'react-router-dom';

const StockButton = ({ game }) => {
  if (game.in_stock) {
    return <Link to={`/product/${game.game_id}`}><Button variant="contained">In Stock</Button></Link>;
  } else {
    return (
      <Button variant="contained" disabled>
        OUT OF STOCK
      </Button>
    );
  }
};

export default function SearchResultItem({ game }) {
  return (
    <Grid container spacing={2}>
      <Grid item xs={9}>
        <Item>
          <Box
            sx={{
              bgcolor: 'background.paper',
              boxShadow: 1,
              borderRadius: 2,
              p: 2,
              minWidth: 300,
              my: 2,
            }}>
            <Typography variant="h5" gutterBottom>
              {game.title}
            </Typography>
            <Typography variant="body1" gutterBottom>
              Rating: {game.rating}/5
            </Typography>
            <Typography variant="body1" gutterBottom>
              Release Date: {game.released}
            </Typography>
          </Box>
        </Item>
      </Grid>
      <Grid item xs={3}>
        <Item>
          <StockButton game={game} />
        </Item>
      </Grid>
    </Grid>
  );
}
