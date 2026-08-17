import type { PokemonListResponse } from "../types/pokemonTypes";

export const getPokemonList = async (): Promise<PokemonListResponse> => {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon");
    return response.json();
};

export const getPokemonByName = async (name: string) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    return response.json();
};