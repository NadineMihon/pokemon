import { Link } from "react-router-dom";
import type { PokemonListItem } from "../../../../types/pokemonTypes";

type PokemonCardProps = {
    pokemon: PokemonListItem
}

export const PokemonCard = ({ pokemon }: PokemonCardProps) => {
    return (
        <article className="rounded-lg border hover:shadow-md hover:bg-amber-50 cursor-pointer"> 
            <Link 
                to={`/pokemon/${pokemon.name}`}
                className="block w-fullh-full p-4"
            >
                <h4>{pokemon.name}</h4>
            </Link>        
        </article>
    )
};