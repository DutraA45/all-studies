import { getPopularMovies } from "@/services/movies.service";
import { MovieItem } from "../../components/movieItem/MovieItem";
import styles from "./Movies.module.css";

export default async function Movies() {
    const { data } = await getPopularMovies();
    

    return (
        <section className={styles.movies}>
            <h1>Filmes populares</h1>

            <div className={styles.moviesList}>
                {data.results.map((movie) => (
                    <MovieItem key={movie.id} movie={movie} />
                ))}
            </div>
        </section>
    );
}