import { useEffect, useState } from "react";
import axios from "axios";

const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

function PopularMovies(){
    const[movies, setMovies] = useState([]);

    useEffect(() => {
    axios.get(`${BASE_URL}/movie/popular?api_key=${API_KEY}`)
        .then(response => {
            setMovies(response.data.results);
        });
    },[]);
     
    return (
        <div>
            <h1>Popular Movies</h1>
            <ul>
                {movies.map((movies, index) =>(
                    <li key={index}>{movies.title}</li>
                ))}
            </ul>
        </div>

    );
}

export default PopularMovies;