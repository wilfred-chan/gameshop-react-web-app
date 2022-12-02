import React from 'react';
import {
  HeaderContainer,
  HeaderBar,
  NavLinks,
  ActionIconsContainer
} from "../../styles/header";
import {ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Actions from "./actions";
export default function Header() {

  return(
      <ActionIconsContainer>
      <HeaderContainer>
        <HeaderBar>
          GameShop
        </HeaderBar>
        <NavLinks type = "row">
          <ListItemText primary= "Home"/>
          <ListItemText primary= "Products"/>
          <ListItemButton>
            <ListItemIcon>
              <SearchIcon />
            </ListItemIcon>
          </ListItemButton>
        </NavLinks>
        <Actions/>
      </HeaderContainer>
      </ActionIconsContainer>
  );
}