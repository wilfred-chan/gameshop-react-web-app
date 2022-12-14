import {useUIContext} from "../context/ui";
import { UserContext } from "../context/user";
import { useContext, useEffect } from "react";
import axios from "axios";

const BASE_URL = "https://gameshop.herokuapp.com/api/users/";

function useCart(product) {
  const {user, setUser} = useContext(UserContext);
  const {cart, setCart} = useUIContext();

  // useEffect( () => {
  //   if (user.loggedIn === true) {
  //     console.log(user);
  //     axios.put(BASE_URL + user.username, {cart})
  //       .then(res => setUser({...user, cart: res.data.cart}))
  //       .catch(e => console.error(e));
  //   }
  // }, [cart]);

  const addToCart = () => {
    if (user.loggedIn === false) {
      cart.findIndex(c =>c.game_id === product.game_id) >= 0
        ? setCart(cart.filter(c =>c.game_id !== product.game_id))
        : setCart(c =>[...c,product]);
    } else {
      if (cart.findIndex(c =>c.game_id === product.game_id) >= 0) {
        // remove a game
        setCart(cart.filter(c =>c.game_id !== product.game_id));
        const newCart = cart.map(game => game.game_id).filter(game => game !== product.game_id);
        axios.put(BASE_URL + user.username, {cart: newCart})
          .then(res => console.log(res))
          .catch(e => console.error(e));
      } else {
        // add a game
        setCart(c =>[...c,product]);
        const newCart = [...cart.map(game => game.game_id), product.game_id];
        axios.put(BASE_URL + user.username, {cart: newCart})
          .then(res => console.log(res))
          .catch(e => console.error(e));
      }
    }
  }

  const addToCartText = cart.findIndex(c =>c.game_id === product.game_id) >= 0
      ? "Remove from cart" : "Add to cart";

  return {addToCart, addToCartText}
}

export default useCart;