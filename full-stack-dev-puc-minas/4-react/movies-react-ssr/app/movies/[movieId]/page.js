import { getMovie, getPopularMovies } from "@/services/movies.service";
import style from "./MovieDetail.module.css";

export async function getStaticPaths() {
    const { data } = await getPopularMovies();
    const paths = data.results.map((movie) => ({ params: { movieId: `${movie.id}` } }))

    return {
        paths,
        fallback: true,
    }
}

export default async function MovieDetail({ params }) {
    const movie = await getMovie(params.movieId);

    return (
        <section className={style.movie}>
            <figure className={style.imageContainer}>
                {movie.data.poster_path && (
                    <img src={`https://image.tmdb.org/t/p/w200/${movie.data.poster_path}`} alt="" />
                )}
            </figure>
            <h1>{movie.data.title}</h1>
            <p>{movie.data.overview}</p>
        </section>
    )
}