import { Link } from "react-router-dom";
import type { PokemonDetailResponse, PokemonListItem } from "../../../../types/pokemonTypes";
import { useEffect, useState } from "react";
import { getPokemonByName } from "../../../../api/pokemonAPI";
import { HeartIcon } from "../../../HeartIcon";

type PokemonCardProps = {
    pokemon: PokemonListItem;
}

export const PokemonCard = ({ pokemon }: PokemonCardProps) => {
    const [currentPokemon, setCurrentPokemon] = useState<PokemonDetailResponse | null>(null);
    const [isFavorite, setIsFavorite] = useState(false);

    useEffect(() => {
            if (!pokemon) return;
    
            getPokemonByName(pokemon.name)
                .then((data) => {
                    setCurrentPokemon(data);
                })
                .catch((err) => console.log(err));
        }, [pokemon.name]);

        if (!currentPokemon) return <>Загрузка</>;

    return (
        <article 
            className="max-w-75 w-full rounded-lg border hover:shadow-md hover:bg-amber-50 p-4"
        > 
            {currentPokemon && (
                <div className="relative">
                    <button 
                        type="button"
                        onClick={() => setIsFavorite(!isFavorite)}
                        aria-label={isFavorite ? "Удалить из избранного" : "Добавить в изранное"}
                        className="absolute top-0 right-0 cursor-pointer"
                    >
                        <HeartIcon isActive={isFavorite} className="w-6 h-6 hover:scale-110" />
                    </button>
                    <div className="flex items-center gap-2">
                        {currentPokemon.sprites.front_default && (
                            <img 
                                src={currentPokemon.sprites.front_default} 
                                alt={currentPokemon.name}
                                className="max-w-30"
                            />
                        )}
                        <div className="flex flex-col items-center gap-3">
                            <h4 className="font-bold">{currentPokemon.name.toUpperCase()}</h4> 
                            <Link 
                                to={`/pokemon/${currentPokemon.name}`}
                                className="block bg-amber-200 hover:bg-amber-300 px-3 py-1 
                                rounded-lg text-sm"
                            >
                                Add to cart   
                            </Link> 
                        </div>           
                    </div>    
                </div> 
            )}        
        </article>
    )
};