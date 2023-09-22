import { useEffect, useState } from "react";
import axios from 'axios';

const API_KEY = import.meta.env.VITE_API_KEY;
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