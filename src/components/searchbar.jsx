import React, { useState } from "react";
import { getPokemon } from "../services/Api";
import Searched from "./Searched";
import {
  InputGroup, Button, Input, InputRightElement, Box,
  Alert, AlertDescription, AlertTitle, AlertIcon
} from "@chakra-ui/react";

export default function Searchbar() {

  const [name, setname] = useState('');
  const [pokemon, setPokemon] = useState(null);
  const [alert, setalert] = useState(false);

  const searchPokemon = async () => {
    if (name !== '') {
      const data = await getPokemon(name);
      if (data.isError) {
        setalert(true);
        setTimeout(() => {
            setalert(false);
        }, 3000);
      } else {
        setPokemon(data);
      }
    }
  };

  return (
    <Box margin={"3px"}>
      <InputGroup size='md'>
        <Input
          pr='4.5rem'
          type='text'
          placeholder='Search your pokemon'
          onChange={(e) => setname(e.target.value)}
        />
        <InputRightElement onClick={searchPokemon} width='4.5rem'>
          <Button h='1.75rem' size='sm' >
            Search
          </Button>
        </InputRightElement>
      </InputGroup>
      {
        alert? (
          <Alert status='error'>
            <AlertIcon />
            <AlertTitle>not searched!</AlertTitle>
            <AlertDescription>Verifica el Nombre.</AlertDescription>
          </Alert>
        )
          : <></>
      }
      {pokemon? <Searched setPokemon={setPokemon} pokemon={pokemon}/> : <></>}
    </Box>
  );
}