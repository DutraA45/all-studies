import { Link } from "react-router-dom";
import styles from "./MovieItem.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addMovie, removeMovie } from "../../store/reducers/favorito"

export function MovieItem({ movie }) {
    const dispatch = useDispatch();
    const movies = useSelector((state) => state.favorito.movies)

    function renderButton() {
        if (movies.find(m => m.id === movie.id)) {
            return <button onClick={() => dispatch(removeMovie(movie))}>Remover dos favoritos</button>
        }

        return <button onClick={() => dispatch(addMovie(movie))}>Adicionar aos favoritos</button>
    }
    
    return (
        <div className={styles.movie}>
            {movie.poster_path && (
                <img src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} alt="" />
            )}
            <h3>{movie.title}</h3>
            <p>
                <Link className={styles.detailsBtn} to={`/movies/${movie.id}`}>Ver detalhes</Link>
                {renderButton()}
            </p>
        </div>
    )
}