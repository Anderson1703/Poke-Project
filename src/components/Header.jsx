import React from "react";
import useFavoritePokemons from '../hooks/useFavoritePokemons';
import { NavLink, Link } from "react-router-dom";
import { Box, Flex, Text } from '@chakra-ui/react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from '@fortawesome/free-solid-svg-icons';

export default function MyPokemons() {
  const { favorites } = useFavoritePokemons();

  return (
    <Box>
      <Flex color={"white"} justifyContent={"space-around"} alignItems={"center"} h={"60px"} bg={"rgb(4, 1, 12)"} flexWrap={"wrap"}>
        <Box>
          <Link to={"/"}><Text color={"#5ac9c8"} fontWeight={"extrabold"} fontSize={"24px"}>POKNEWE</Text></Link>
        </Box>
        <Flex alignItems={"center"}>
          <NavLink style={{ margin: "0 5px" }} to={`/`}>
            <Text fontWeight={"semibold"} _hover={{ transition: "300ms ease", color: "#5ac9c8" }}>Pokemons</Text>
          </NavLink>
          <NavLink style={{ margin: "0 5px" }} to={`/my-pokemons`}>
            <Text fontWeight={"semibold"} _hover={{ transition: "300ms ease", color: "#5ac9c8" }}>Favorites</Text>
          </NavLink>
        </Flex>
        <Box>
          <Text> <FontAwesomeIcon color="red" icon={faHeart} /> {favorites.length}</Text>
        </Box>
      </Flex>
    </Box>
  );
}
