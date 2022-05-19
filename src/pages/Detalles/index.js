import React from "react";
import Spinner from "../../components/spinner";
import useFavoritePokemons from "../../hooks/useFavoritePokemons";
import usePokemons from "../../hooks/usePokemons";
import { useParams } from "react-router";
import Alerts from "../../components/Alert";
import { Box, Flex, Button, Center, Image, Text } from "@chakra-ui/react";


export default function Detalles() {

  let props = useParams();
  const { addFavorite, favorites, deleteFavorite } = useFavoritePokemons();
  const { pokemon, loading } = usePokemons({ page: null, pokemonKey: props.pokemon });

  const handleNewFavorite = () => addFavorite(pokemon);
  const handleDeleteFavorite = () => deleteFavorite(pokemon);
  const verifycate = () => favorites.some((fav) => fav.id === pokemon.id);

  return (
    <Box>
      <Center >
        {!loading ? (
          <Box >
            {pokemon.sprites ? (
              <Box>

                <Center  >
                  <Flex flexWrap={"wrap"}>
                    <Image src={pokemon.sprites.front_default} alt={pokemon.name} />
                    <Image src={pokemon.sprites.back_default} alt={pokemon.name} />
                    <Image src={pokemon.sprites.front_shiny} alt={pokemon.name} />
                  </Flex>
                </Center>

                <Box>
                  <Center margin={"2px"} padding={"2px"}>
                    <Box
                      mt='1'
                      fontWeight='extrabold'
                      as='h3'
                      lineHeight='tight'
                      noOfLines={1}
                    >
                      {pokemon.name}
                    </Box>
                  </Center>

                  <Center margin={"2px"} padding={"2px"}>
                    <Box>
                      <Center>
                        <Text fontWeight={"semibold"}>Moves</Text>
                      </Center>
                      <Flex flexWrap={"grap"} alignItems={"center"}>
                        {
                          pokemon.moves.map((mov, index) => index >= 4 ? "" : <Box margin={"0 5px"} key={index} >{mov.move.name}</Box>)
                        }
                      </Flex>
                    </Box>
                  </Center>

                  <Center margin={"2px"} padding={"2px"}>
                    <Button
                      size='md'
                      height='48px'
                      width='200px'
                      border='2px'
                      borderColor='green.500'
                      onClick={verifycate() === false ? handleNewFavorite : handleDeleteFavorite}>
                      {verifycate() === false ? "Add favorite" : "Delete favorite"}
                    </Button>
                  </Center>

                </Box>

              </Box>)
              : (<Alerts />)}
          </Box>
        ) : (
          <Spinner />
        )}
      </Center>
    </Box>
  );
}
