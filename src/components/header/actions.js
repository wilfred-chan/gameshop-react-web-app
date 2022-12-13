import { Divider, ListItemButton, ListItemIcon } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LogoutIcon from '@mui/icons-material/Logout';
import { Colors } from "../../styles/theme";
import {ActionIconsContainer, NavLinks} from "../../styles/header";
import {useUIContext} from "../../context/ui";
import {Badge} from "@mui/material";
import {Link} from "react-router-dom";
import { UserContext } from "../../context/user";
import { useContext } from "react";
import { SettingsSuggestRounded } from "@mui/icons-material";

export default function Actions() {
  const {user, setUser} = useContext(UserContext);
  const {cart, setShowCart, favorites, setShowFavorites} = useUIContext();
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
            <Badge badgeContent = {cart && cart.length} color = "secondary">
            <ShoppingCartIcon onClick={() => setShowCart(true)}/>
            </Badge>
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
              <Badge badgeContent = {favorites && favorites.length} color = "secondary">
                  <FavoriteIcon onClick={() => setShowFavorites(true)}/>
              </Badge>
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
             <Link to={'login'}><PersonIcon /></Link>
          </ListItemIcon>
        </ListItemButton>
        <Divider orientation="vertical" flexItem />
        {user.loggedIn &&
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
              <LogoutIcon onClick={() => window.location.reload()}/>
            </ListItemIcon>
          </ListItemButton>
        }

      </NavLinks>
      </ActionIconsContainer>
  )
};