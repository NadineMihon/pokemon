import { useEffect, useState } from "react";
import { getPokemonList } from "../../api/pokemonAPI";
import type { PokemonListItem } from "../../types/pokemonTypes";
import { PokemonCard } from "../../components/PokemonCards/components/PokemonCard";

export const HomePage = () => {
    const [pokemonList, setPokemonList] = useState<PokemonListItem[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getPokemonList()
            .then((data) => {
                setPokemonList(data.results);
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                setLoading(false);
            })
    }, []);

    if (loading) return <>Загрузка...</>

    if (pokemonList.length === 0) return <>Покемоны не найдены</>

    return (
        <div>
            <h1>Домашняя страница</h1> 
            <div className="flex flex-col gap-5 justify-center">
                {
                    pokemonList.map((pokemon) => <PokemonCard key={pokemon.name} pokemon={pokemon} />)
                }
            </div>   
        </div> 
    )
};