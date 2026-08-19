import { useEffect, useState } from "react";
import { getPokemonList } from "../../api/pokemonAPI";
import type { PokemonListItem } from "../../types/pokemonTypes";
import { PokemonCard } from "../../components/PokemonCards/components/PokemonCard";

export const HomePage = () => {
    const [pokemonList, setPokemonList] = useState<PokemonListItem[]>([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] =  useState(0);
    const [limit] = useState(10);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        const offset = currentPage * limit;

        getPokemonList(limit, offset)
            .then((data) => {
                setPokemonList(data.results);
                setTotal(data.count);
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                setLoading(false);
            })
    }, [currentPage, limit]);

    if (loading) return <>Загрузка...</>

    if (pokemonList.length === 0) return <>Покемоны не найдены</>

    return (
        <div>
            <div 
                className="flex flex-wrap gap-8 justify-center p-6"
            >
                    {
                        pokemonList.map((pokemon) => <PokemonCard key={pokemon.name} pokemon={pokemon} />)
                    }
            </div> 
            
            <div className="mt-4 flex gap-4 justify-center">
                <button
                    onClick={() => setCurrentPage((prev) => Math.max(0, prev - 1))}
                    disabled={currentPage === 0}
                    className="max-w-28 w-full bg-emerald-200 hover:bg-emerald-400 px-3 py-1 
                        rounded-lg text-sm disabled:opacity-50 disabled:hover:bg-emerald-200"
                >
                  Previous  
                </button>

                <span>Page {currentPage + 1} of 15</span>

                <button
                    onClick={() => setCurrentPage((prev) => prev + 1)}
                    disabled={(currentPage + 1) * limit >= total || currentPage >= 14}
                    className="max-w-28 w-full bg-emerald-200 hover:bg-emerald-400 px-3 py-1 
                        rounded-lg text-sm disabled:opacity-50 disabled:hover:bg-emerald-200"
                >
                  Next  
                </button>
            </div>  
        </div> 
    )
};