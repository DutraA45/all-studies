import { configureStore } from "@reduxjs/toolkit";
import favorito from "./reducers/favorito";

export default configureStore ({
    reducer: {
        favorito,
    },
});

export const setupStore = preloadedState => {
    return configureStore({
        reducer: {
            favorito,
        },
        preloadedState
    });
}