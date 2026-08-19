export type PokemonListItem = {
    name: string;
    url: string;
};

export type PokemonListResponse = {
    count: number;
    next: string | null;
    previous: string | null;
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