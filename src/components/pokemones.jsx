import React from 'react';
import Pokemon from './pokemon';
import { Flex,Box } from '@chakra-ui/react';


export default function Pokemones({ pokemons }) {
    return (
        <Box marginTop={"20px"}>
            <Flex flexWrap={"wrap"} justifyContent={"space-evenly"} alignItems={"center"}>
                {pokemons.map(pokemon => <Pokemon pokemon={pokemon} key={pokemon.id} />)}
            </Flex>
        </Box>
    )
}
