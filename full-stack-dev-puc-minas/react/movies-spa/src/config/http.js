import axios from 'axios';

export const moviesApi = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZjY3MzcwMTEzNTIzZWQwODQyMzQzMWU5YmY3MjdmZiIsIm5iZiI6MTcyNjE2OTYzOS4yOTU4NTcsInN1YiI6IjY2ZGEwYzJlYWU0NGViNjE5NjYwNjlkYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qvJQ4aNmeS0h-G_N7WsU_5MtcfI8Kc5mbvAICido0nw`
    }
});