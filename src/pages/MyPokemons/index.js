import React from 'react'
import useFavoritePokemons from '../../hooks/useFavoritePokemons'
import Pokemones from '../../components/pokemones';
import {Box } from '@chakra-ui/react';
import Alerts from '../../components/Alert';


export default function MyPokemons() {
    const { favorites } = useFavoritePokemons();
    return (
        <Box>
            {
                favorites.length > 0 ? <Pokemones pokemons={favorites} />
                :<Alerts 
                    status={"warning"} 
                    title={"No existen favoritos aun!"} 
                    describcion={"Debes Agregar Algun pokemon a tu Lista de Favoritos."}
                />   
            }
        </Box>
    )
}
