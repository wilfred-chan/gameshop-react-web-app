import {useUIContext} from "../context/ui";
import { UserContext } from "../context/user";
import { useContext } from "react";

function useCart(product) {
  const {user, setUser} = useContext(UserContext);
  const {cart, setCart} = useUIContext();

  if (user.loggedIn === false) {
    const addToCart = () => {
      cart.findIndex(c =>c.game_id === product.game_id) >= 0
          ? setCart(cart.filter(c =>c.game_id !== product.game_id))
          : setCart(c =>[...c,product]);
    }
  
    const addToCartText = cart.findIndex(c =>c.game_id === product.game_id) >= 0
        ? "Remove from cart" : "Add to cart";
  
    return {addToCart, addToCartText}
  } else {
    const addToCart = () => {
      cart.findIndex(c =>c.game_id === product.game_id) >= 0  // if the game is already in the cart
          ? setCart(cart.filter(c =>c.game_id !== product.game_id)) // remove it
          : setCart(c =>[...c,product]); // else add it
    }
    const addToCartText = cart.findIndex(c =>c.game_id === product.game_id) >= 0
        ? "Remove from cart" : "Add to cart";
    return {addToCart, addToCartText}
  }

}

export default useCart;