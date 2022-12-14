import {Divider, ListItemButton, ListItemIcon, Typography} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import LogoutIcon from '@mui/icons-material/Logout';
import { Colors } from "../../styles/theme";
import {ActionIconsContainer, NavLinks} from "../../styles/header";

import {Link} from "react-router-dom";
import { UserContext } from "../../context/user";
import { useContext } from "react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";


export default function AdminActions() {
  const {user, setUser} = useContext(UserContext);
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
              <HomeOutlinedIcon/>
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