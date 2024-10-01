import { createBrowserRouter } from 'react-router-dom';
import { Home } from "./Home";
import { Movies } from "./movies/Movies";
import { RootLayout } from "./RootLayout";
import { MovieDetail } from './movieDetail/MovieDetail';

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />, 
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/movies",
                element: <Movies />
            },
            {
                path: "/movies/:id",
                element: <MovieDetail />
            }
        ]
    }
])