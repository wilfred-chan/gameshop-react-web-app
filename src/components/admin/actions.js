import {Divider, ListItemButton, ListItemIcon, Typography} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import LogoutIcon from '@mui/icons-material/Logout';
import { Colors } from "../../styles/theme";
import {ActionIconsContainer, NavLinks} from "../../styles/header";

import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../context/user";
import { useContext } from "react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";


export default function AdminActions() {
  const {user, setUser} = useContext(UserContext);
  const navigate = useNavigate();

  const logout = () => {
    setUser({loggedIn: false});
    navigate("/");
  }

  return (
      <ActionIconsContainer>
        <NavLinks type="row">
          <Link to="/">
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
          </Link>
          <Divider orientation="vertical" flexItem />

            <Link to="/profile">
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

          <ListItemButton
              onClick={logout}
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