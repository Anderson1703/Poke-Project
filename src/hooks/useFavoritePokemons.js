import { useContext } from "react";
import {Context} from "../contexts/favoritePokemons";

export default function useFavoritePokemons() {

const {favorites, setfavorites} = useContext(Context);

  const addFavorite = (pokemon) => {
    const newsFavorites = [...favorites, pokemon];
    setfavorites(newsFavorites);
    localStorage.setItem("favorites", JSON.stringify(newsFavorites));
  };

  const deleteFavorite = (pokemon) => {
    const newsFavorites = favorites.filter((pok) => pok.id !== pokemon.id);
    setfavorites(newsFavorites);
    localStorage.setItem("favorites", JSON.stringify(newsFavorites));
  };

  return {
    addFavorite,
    deleteFavorite,
    favorites
  };
}
