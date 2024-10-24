import { useEffect, useState } from "react";
import { getMovie, getPopularMovies } from "../services/movies.service";
import { useQuery } from "@tanstack/react-query"

export function useMovies() {
    // const [movies, setMovies] = useState([]);

    // useEffect(() => {
    //     getPopularMovies().then(({ data }) => {
    //         setMovies(data.results)
    //     })
    // }, [])

    // return movies;

    return useQuery({
        queryKey: ["movies"],
        queryFn: async () => {
            const { data } = await getPopularMovies()
            return data.results
        }
    })
}

export function useMovie(movieId) {
    // const [movie, setMovie] = useState([]);

    // useEffect(() => {
    //     getMovie(movieId).then(({ data }) => {
    //         setMovie(data)
    //     })
    // }, [movieId])

    // return movie;

    return useQuery({
        queryKey: ["movies", movieId],
        queryFn: async () => {
            const { data } = await getMovie(movieId)

            return data
        }
    })
}