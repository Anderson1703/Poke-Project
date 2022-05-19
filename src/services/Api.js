export const getPokemon =async (pokemon)=>{
    try {
        const peticion = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        let data = await peticion.json();
        return data;
    } catch (error) {
        return {
            isError:true,
            error
        };
    }
}

export const getPokemones =async (limit='25', offset=0)=>{
    try {
        const peticion = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
        let data = await peticion.json();
        return data;
    } catch (error) {
        return {
            isError:true,
            error
        };
    }
}


export const getPokemonDta = async url=>{
    try {
        const peticion = await fetch(url)
        let data = await peticion.json();
        return data;
    } catch (error) {
        return {
            isError:true,
            error
        };
    }
}