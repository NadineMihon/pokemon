import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { PokemonDetailResponse } from "../../types/pokemonTypes";
import { getPokemonByName } from "../../api/pokemonAPI";

export const PokemonDetailPage = () => {
    const { pokemonName } = useParams();
    const [pokemon, setPokemon] = useState<PokemonDetailResponse | null>(null);

    useEffect(() => {
        if (!pokemonName) return;

        getPokemonByName(pokemonName)
            .then((data) => {
                setPokemon(data);
            })
            .catch((err) => console.log(err));
    }, [pokemonName]);

    if (!pokemon) return <>Загрузка</>;

    return (
        <div>
            <h1>{pokemon.name}</h1>
            {pokemon.sprites.front_default && (
                <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            )}
            <ul>
                {pokemon.types?.map((item) => (
                    <li key={item.type.name}>{item.type.name}</li>
                ))}
            </ul>
        </div>
    );
};