import { createBrowserRouter } from 'react-router-dom';
import { Home } from "./Home";
import { Movies } from "./Movies";
import { RootLayout } from "./RootLayout";

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
            }
        ]
    }
])