import { queryClient } from "../../App";
import { MovieItem } from "../../components/movieItem/MovieItem";
import { useMovies } from "../../hooks/useMovies";
import { getMovie } from "../../services/movies.service";
import styles from "./Movies.module.css";

export function Movies() {
    // const movies = useMovies();
    const { data: movies, isLoading } = useMovies();

    async function prefetchMovie(movieId) {
        await queryClient.prefetchQuery({
            queryKey: ["movies", movieId],
            queryFn: async () => {
                const { data } = await getMovie(movieId)
    
                return data
            }
        })
    }

    if (isLoading) {
        return <h1>Loading...</h1>
    }

    return (
        <section className={styles.movies}>
            <h1>Filmes populares</h1>

            <div className={styles.moviesList}>
                {movies.map((movie) => (
                    <div key={movie.id} onMouseEnter={async () => await prefetchMovie(movie.id)}>
                        <MovieItem  movie={movie} />
                    </div>
                ))}
            </div>
        </section>
    );
}