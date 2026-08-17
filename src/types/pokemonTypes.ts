export type PokemonListItem = {
    name: string;
    url: string;
};

export type PokemonListResponse = {
    results: PokemonListItem[];
};

export type PokemonDetailResponse = {
    name: string;
    sprites: {
        front_default: string | null;
    };
    types: {
        type: {
            name: string;
        };
    }[];
};