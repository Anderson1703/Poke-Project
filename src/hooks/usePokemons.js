import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getPokemonDta, getPokemones, getPokemon } from "../services/Api";

export default function usePokemons({ page, pokemonKey }) {
  const navigation = useNavigate();
  const [pokemons, setpokemons] = useState([]);
  const [pokemon, setpokemon] = useState(pokemonKey);
  const [loading, setloading] = useState(false);

  const searchPokemones = async () => {
    try {
      setloading(true);
      const data = await getPokemones(25, page * 25);
      const promises = data.results.map(async (pok) => {
        return await getPokemonDta(pok.url);
      });
      const result = await Promise.all(promises);
      setpokemons(result);
      setloading(false);
    } catch (error) {
      setloading(false);
      navigation("/404");
    }
  };

  const searchPokemon = async () => {
    setloading(true);
    Promise.resolve(getPokemon(pokemonKey))
      .then((result) => {
        setpokemon(result);
        setloading(false);
      })
      .catch((err) => {
        setloading(false);
        navigation("/404");
      });
  };
  

  useEffect(() => {
    if (!pokemonKey) {
      searchPokemones();
    } else {
      searchPokemon();
    }
  }, [page, pokemonKey]);

  return {pokemon, pokemons, loading, setpokemon};
}
