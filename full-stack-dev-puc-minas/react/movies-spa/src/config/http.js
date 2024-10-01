import axios from 'axios';

export const moviesApi = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    headers: {
        Authorization: `Bearer ${process.env.MOVIE_DB_API_KEY}`
    }
});