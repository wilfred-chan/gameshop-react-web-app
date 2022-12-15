import * as React from 'react';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import {ProductMetaWrapper
} from "../../styles/products";
import InventoryIcon from '@mui/icons-material/Inventory';
import {Colors} from "../../styles/theme";



export default function SearchResultItem({ game }) {
  return (

        <ProductMetaWrapper sx ={{background: Colors.secondary, color: Colors.white}}>
          <Typography variant= "h5" lineHeight={2}>
            {game.title}
          </Typography>
          <Typography variant="body1">
            Rating: {game.rating}/5
          </Typography>
          <Typography variant="body1">
            Release Date: {game.released}
          </Typography>
          {game.in_stock && <Link to={`/product/${game.game_id}`}>
            <InventoryIcon sx={{ color: game.in_stock? Colors.danger : Colors.dim_grey}}/>
          </Link>}
          {!game.in_stock && <Link to={`/product/${game.game_id}`}>
            <InventoryIcon sx={{ color: game.in_stock? Colors.danger : Colors.dim_grey}}/>
          </Link>}

        </ProductMetaWrapper>


  );
}
