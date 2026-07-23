import { createBrowserRouter } from "react-router-dom";
import { Root } from "../components/Root";
import { PokemonDetailPage } from "../pages/detail/PokemonDetailsPage";
import { FavoritesPage } from "../pages/favorites/FavotitesPage";
import { HomePage } from "../pages/home/HomePage";

export const routesConfig = [
    {
        path: '/',
        element: <Root />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: '/pokemon/:pokemonName',
                element: <PokemonDetailPage />,
            },
            {
                path: '/favorites',
                element: <FavoritesPage />,
            },
        ]
    },
];

export const appRouter = createBrowserRouter(routesConfig);