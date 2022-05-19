import React, { useState } from "react";
import Pokemones from "../../components/pokemones";
import Spinner from "../../components/spinner";
import Searchbar from "../../components/searchbar";
import Pagination from "../../components/pagination";
import usePokemons from "../../hooks/usePokemons";
import { Box, Flex } from '@chakra-ui/react';

export default function Home() {
  const [page, setpage] = useState(0);
  const { pokemons, loading } = usePokemons({ page });

  const nextPage = () => setpage(page + 1);
  const backPage = () => page !== 0 ? setpage(page - 1) : null;

  return (
    <Box marginTop={"10px"}>
      <Box>
        <Flex justifyContent={"space-around"} alignItems={"center"} flexWrap={"wrap"}>
          <Searchbar />
          <Pagination backPage={backPage} nextPage={nextPage} page={page} />
        </Flex>
      </Box>
      {loading? <Spinner /> : <Pokemones pokemons={pokemons} />}
    </Box>
  );
}
