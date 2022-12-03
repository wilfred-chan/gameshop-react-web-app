import { Divider, ListItemButton, ListItemIcon } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LogoutIcon from '@mui/icons-material/Logout';
import { Colors } from "../../styles/theme";
import {ActionIconsContainer, NavLinks} from "../../styles/header";

export default function Actions() {
  return (
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
            <ShoppingCartIcon />
          </ListItemIcon>
        </ListItemButton>
        <Divider orientation="vertical" flexItem />
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
            <FavoriteIcon />
          </ListItemIcon>
        </ListItemButton>
        <Divider orientation="vertical" flexItem />
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
            <PersonIcon />
          </ListItemIcon>
        </ListItemButton>
        <Divider orientation="vertical" flexItem />
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
            <LogoutIcon />
          </ListItemIcon>
        </ListItemButton>

      </NavLinks>
      </ActionIconsContainer>
  )
};