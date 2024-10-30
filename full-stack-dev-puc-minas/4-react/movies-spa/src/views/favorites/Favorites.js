import { useSelector } from "react-redux"
import { MovieItem } from "../../components/movieItem/MovieItem";
import styles from "./Favorites.module.css";

export function Favorites() {
    const movies = useSelector((state) => state.favorito.movies);


    return (
        <>
            <h1>Filmes favoritos</h1>
            <div className={styles.moviesList}>
                {movies.map((movie) => (
                    <MovieItem key={movie.id} movie={movie} />
                ))}
            </div>
        </>
    )
}