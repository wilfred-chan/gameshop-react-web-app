import React, { useContext } from 'react';
import { HeaderContainer, HeaderBar, NavLinks } from '../../styles/header';
import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Actions from './actions';
import { useUIContext } from '../../context/ui';
import { Link } from 'react-router-dom';
import { UserContext } from '../../context/user';


export default function Header() {
  const { setShowSearchBox } = useUIContext();
  const { user } = useContext(UserContext);

  const AdminPortal = () => {
    if (user.loggedIn === false) {
      return null;
    } else {
      if (user.role === 'admin') {
        return (
          <Link to="admin" style={{ textDecoration: 'none' }}>
            <ListItemText primary="Admin Dashboard" />
          </Link>
        );
      } else { return null; }
    }
  }

  return (
    <HeaderContainer>
      <HeaderBar>GameShop</HeaderBar>
      <NavLinks type="row">
        <AdminPortal />
        <Link to="search">
          <ListItemButton sx={{mx: 2}}>
            <ListItemIcon sx={{px: 2}}>
              <SearchIcon />
            </ListItemIcon>
          </ListItemButton>
        </Link>
      </NavLinks>
      <Actions />
    </HeaderContainer>
  );
}
