import { createBrowserRouter } from 'react-router-dom';
import { RootLayout } from "./RootLayout";
import { Favorites } from './favorites/Favorites';

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                path: "/",
                lazy: async () => {
                    const { Home } = await import("./views/Home")

                    return {
                        Component: Home
                    }
                }
            },
            {
                path: "/movies",
                lazy: async () => {
                    const { Movies } = await import("./movies/Movies")

                    return {
                        Component: Movies
                    }
                }
            },
            {
                path: "/movies/:id",
                lazy: async () => {
                    const { MovieDetail } = await import("./movieDetail/MovieDetail")

                    return {
                        Component: MovieDetail
                    }
                }
            },
            {
                path: "/favorites",
                element: <Favorites />
            }
        ]
    }
])