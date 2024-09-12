import { getPopularMovies } from "../services/movies.service";

export function Movies() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        getPopularMovies().then(({ data }) => {
            setMovies(data.results)
        })
    }, [])

    return (
        <section>
            <h1>Filmes populares</h1>
            <ul>
                {movies.map((movie) => <li>{movie.title}</li>)}
            </ul>
        </section>
    );
}