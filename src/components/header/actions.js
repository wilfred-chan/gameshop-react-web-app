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
            onClick={() => setShowCart(true)}
        >
          <ListItemIcon
              sx={{
                display: "flex",
                justifyContent: "center",
                color: Colors.secondary,
              }}
          >
            <Badge badgeContent = {cart && cart.length} color = "secondary">
            <ShoppingCartIcon/>
            </Badge>
          </ListItemIcon>
        </ListItemButton>
        <Divider orientation="vertical" flexItem />
        <ListItemButton
            sx={{
              justifyContent: "center",
            }}
            onClick={() => setShowFavorites(true)}
        >
          <ListItemIcon
              sx={{
                display: "flex",
                justifyContent: "center",
                color: Colors.secondary,
              }}
          >
              <Badge badgeContent = {favorites && favorites.length} color = "secondary">
                  <FavoriteIcon/>
              </Badge>
          </ListItemIcon>
        </ListItemButton>
        <Divider orientation="vertical" flexItem />
        <Link to={`${user.loggedIn ? 'profile':'login'}`}>
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
        </Link>
        <Divider orientation="vertical" flexItem />
        {user.loggedIn &&
          <ListItemButton
              onClick={() => window.location.reload()}
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
        }

      </NavLinks>
      </ActionIconsContainer>
  )
};