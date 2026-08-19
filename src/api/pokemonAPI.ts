import type { PokemonListResponse } from "../types/pokemonTypes";

export const getPokemonList = async (limit: number = 10, offset: number = 0): Promise<PokemonListResponse> => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
    return response.json();
};

export const getPokemonByName = async (name: string) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    return response.json();
};

export const getPokemonSpriteUrl = (pokemonUrl: string): string => {
    const parts = pokemonUrl.split("/").filter(Boolean);
    const id = parts[parts.length - 1];
    const pokemonImage = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

    return pokemonImage;
}