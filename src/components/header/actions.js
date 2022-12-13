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

export default function Actions() {
  const {cart, setShowCart, favorites, setShowFavorites, user} = useUIContext();
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
             {/* <PersonIcon /> */}
          </ListItemIcon>
        </ListItemButton>
        <Divider orientation="vertical" flexItem />
        {Object.keys(user).length > 0 &&
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
        }

      </NavLinks>
      </ActionIconsContainer>
  )
};