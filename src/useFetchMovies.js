import { useState, useEffect}   from 'react';
import axios from 'axios';
 
const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

export const useFetchMovies = (endpoint) => {
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        axios.get(`${BASE_URL}${endpoint}?api_key=${API_KEY}`)
        .then(response => {
            setMovies(response.data.results);
        })
        .catch(err => {
            console.error("There was a problem fetching data:", err);
            setError(err);
        });
    }, [endpoint]);
    
    return { movies, error };
    }