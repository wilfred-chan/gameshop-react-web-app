import {styled} from "@mui/material/styles";
import {Box} from "@mui/system";
import {Typography, List, IconButton} from "@mui/material";
import "@fontsource/montez";
import {Colors, DrawerWidth} from "../theme";

export const HeaderContainer = styled(Box)(() => ({
  display: 'flex',
  marginTop: 4,
  justifyContent: 'center',
  alignItems: 'center',
  padding: '2px 8px'
}));

export const HeaderBar = styled(Typography)(() => ({
  padding: "4px",
  flexGrow: 1,
  fontSize: "4em",
  fontFamily: '"Montez", "cursive"',
  color: Colors.secondary
}));

export const NavLinks = styled(List)(({type}) => ({
  display : type === 'row' ? 'flex' :'block',
  flexGrow : 3,
  justifyContent: 'center',
  alignItems: 'center'
}));

export const ActionIconsContainer = styled(Box)(() => ({
  flexGrow: 0,
}));

export const DrawerCloseButton = styled(IconButton)(() => ({
  position: 'absolute',
  top: 10,
  left: DrawerWidth,
  zIndex: 1999,
}));