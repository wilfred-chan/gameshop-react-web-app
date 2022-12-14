import {Box} from "@mui/system";
import {Colors} from "../../styles/theme";
import {
  Avatar,
  Button,
  Divider,
  Drawer,
  Paper,
  Typography
} from '@mui/material';
import {useUIContext} from "../../context/ui";
import { UserContext } from "../../context/user";
import { useContext } from "react";

export default function Cart() {
  const {user, setUser} = useContext(UserContext);
  const {cart, setShowCart, showCart} = useUIContext();

  if (user.loggedIn === false) {
    return (
    <Drawer
      open = {showCart}
      onClose = {() => setShowCart(false)}
      anchor="right"
      PaperProps={{sx : {
      width:500, background: Colors.light_gray, borderRadius: 0
      },}}>
      <Box
        sx ={{p:4}}
        display="flex"
        justifyContent={"center"}
        flexDirection="column"
        alignItems = "center"
        >
        <Typography variant="h3" color = {Colors.black}>
          Please login!
        </Typography>
      </Box>
    </Drawer>)
  } else {
  }

  const cartContent = cart.map(item => (
      <Box key = {item.game_id}>
        <Box display="flex" sx ={{pt:2, pb : 2}}
             alignItems="start"
             justifyContent={"space-between"}>
          <Avatar src = {item.cover_image} sx ={{width : 96, height :96, mr : 2}} />
          <Box display="flex" flexDirection={"column"}>
            <Typography variant="h6">{item.title}</Typography>
            <Typography variant="subtitle2">{item.description}</Typography>
          </Box>
          <Typography variant="body1" justifyContent={"end"}>${item.price}</Typography>
        </Box>
        <Divider variant="inset" />
      </Box>
  ));

  return (
      <Drawer
          open = {showCart}
          onClose = {() => setShowCart(false)}
          anchor="right"
      PaperProps={{sx : {
        width:500, background: Colors.light_gray, borderRadius: 0
        },}}>


      <Box
        sx ={{p:4}}
        display="flex"
        justifyContent={"center"}
        flexDirection="column"
        alignItems = "center"
        >
        <Typography variant="h3" color = {Colors.black}>
          Your cart
        </Typography>

        <Paper elevation ={0}
        sc ={{mt :2, width : '90%', padding :4,}}>
          {cartContent}
        </Paper>
        <Button sx = {{mt : 4}} variant="contained">
          Proceed to payment
        </Button>
      </Box>
      </Drawer>
  );
}

