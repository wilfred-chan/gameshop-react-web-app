import React from 'react';
import { HeaderContainer, HeaderBar, NavLinks } from '../../styles/header';
import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Actions from './actions';
import { useUIContext } from '../../context/ui';
import { Link } from 'react-router-dom';

export default function Header() {
  const { setShowSearchBox } = useUIContext();
  return (
    <HeaderContainer>
      <HeaderBar>GameShop</HeaderBar>
      <NavLinks type="row">
        <ListItemText primary="Home" />
        <ListItemText primary="Products" />
        <Link to="search">
          <ListItemButton>
            <ListItemIcon>
              <SearchIcon />
            </ListItemIcon>
          </ListItemButton>
        </Link>
      </NavLinks>
      <Actions />
    </HeaderContainer>
  );
}
