import {useUIContext} from "../context/ui";

function useFavorites(product) {
    const {favorites, setFavorites} = useUIContext();
    const addToFavorites = () => {
        favorites.findIndex(c =>c.id === product.id) >= 0
            ? setFavorites(favorites.filter(c =>c.id !== product.id))
            : setFavorites(c =>[...c,product]);
    }

    const isAdded = favorites.findIndex(c =>c.id === product.id) >= 0
        ? true : false;


    return {addToFavorites, isAdded}

}

export default useFavorites;