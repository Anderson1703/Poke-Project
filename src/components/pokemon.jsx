import React,{memo} from "react";
import { useNavigate } from "react-router";
import { Box, Image, Text, Center } from '@chakra-ui/react';


function Pokemon({ pokemon }) {

  let navigate = useNavigate();
  const handleViewDetalles = () => navigate(`/detalles/${pokemon.name}`);

  return (

    <Box _hover={{ transition: "300ms ease", background: "rgb(4, 1, 12)", color: "white", borderRadius: "8px" }}
      cursor={"pointer"} margin={"6px"} maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden' onClick={handleViewDetalles}>
      {
        pokemon.sprites ? (
          <Center><Image src={pokemon.sprites.front_default} alt={pokemon.name} /></Center>
        )
          : (<></>)
      }

      <Center>
        <Text>{pokemon.id}</Text>
      </Center>

      <Center>
        <Box
          mt='1'
          fontWeight='semibold'
          as='h4'
          lineHeight='tight'
          noOfLines={1}
        >
          {pokemon.name}
        </Box>
      </Center>
    </Box>
  );
}

export default memo(Pokemon, (backProops, nextProops)=>backProops.pokemon.id === nextProops.pokemon.id)
