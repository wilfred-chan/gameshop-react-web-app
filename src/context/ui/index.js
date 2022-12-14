import { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { UserContext } from '../user';

export const UIContext = createContext({});
export const useUIContext = () => useContext(UIContext);
const BASE_URL = "https://gameshop.herokuapp.com/api/games/";

export const UIProvider = ({ children }) => {
  const [showSearchBox, setShowSearchBox] = useState(false);
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [favorites, setFavorites] = useState([]);
  const [showFavorites, setShowFavorites] = useState(false);
  const { user } = useContext(UserContext);

  useEffect(() => {
    if (user.loggedIn === false) {
      setCart([])
      return;
    }

    const games = user.cart.map(async game_id => {
      return await axios
        .get(BASE_URL + game_id)
        .then(res => res.data)
        .catch(e => console.error(e));
    });
    
    Promise.all(games).then(data => setCart(data));
  }, [user]);

  const value = {
    showSearchBox,
    setShowSearchBox,
    cart,
    setCart,
    showCart,
    setShowCart,
    favorites,
    setFavorites,
    showFavorites,
    setShowFavorites,
  };

  return <UIContext.Provider value={value}>{children}</UIContext.Provider>;
};
