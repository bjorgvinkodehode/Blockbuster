import { useEffect, useState } from "react";
import axios from 'axios';

const API_KEY = "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzOGIyZGRjZWFhNDE3MDU1YWExYmJiNmE4NTg2NDIwZCIsInN1YiI6IjY0ODJlYzk0ZTI3MjYwMDBjOTJmYzk3ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vNTJgQc8kvDPiyMDV_KSzpC26Trk7oqkPknzyDm-_S8";
const BASE_URL = "https://api.themoviedb.org/3";

function TopRatedMovies(){
    const [movies, setMovies] = useState([]);

useEffect(() => {
    axios.get(`${BASE_URL}/movie/top_rated?api_key=${API_KEY}`)
    .then(response => {
        setMovies(response.data.results);
    });
},[]);

return (
    <div>
        <h1>Top Rated Movies</h1>
        <ul>
            {movies.map((movie, index) => (
            <li key={index}>{movie.title}</li>
            ))}
        </ul>
    </div>
);
}

export default TopRatedMovies;