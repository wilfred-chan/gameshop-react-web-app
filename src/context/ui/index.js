import { createContext, useContext, useState } from 'react';

export const UIContext = createContext({});
export const useUIContext = () => useContext(UIContext);

export const UIProvider = ({ children }) => {
  const [showSearchBox, setShowSearchBox] = useState(false);
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [favorites, setFavorites] = useState([]);
  const [showFavorites, setShowFavorites] = useState(false);
  const [user, setUser] = useState({});

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
    user,
    setUser,
  };

  return <UIContext.Provider value={value}>{children}</UIContext.Provider>;
};
