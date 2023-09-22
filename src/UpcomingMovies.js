import { useEffect, useState } from 'react';
import axios from 'axois';


const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

function UpcomingMovies() {
    const[movies, setMovies] = useState([]);

    useEffect(() => {
     axios.get(`${BASE_URL}/movie/upcoming?api_key=${API_KEY}`)
    .then(response => {
        setMovies(response.data.results);
    });
}, []);

return(
    <div>
        <h1>Upcoming Movies</h1>
        <ul>
            {movies.map((movie, index) => (
            <li key={index}>{movie.title}</li>
            ))}
        </ul>
    </div>
);
}

export default UpcomingMovies;


