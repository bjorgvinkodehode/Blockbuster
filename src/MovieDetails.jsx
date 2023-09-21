import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Ratings from './Ratings';

const API_KEY = "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzOGIyZGRjZWFhNDE3MDU1YWExYmJiNmE4NTg2NDIwZCIsInN1YiI6IjY0ODJlYzk0ZTI3MjYwMDBjOTJmYzk3ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vNTJgQc8kvDPiyMDV_KSzpC26Trk7oqkPknzyDm-_S8";

function MovieDetails() {
    const[movieDetails, setMovieDetails] = useState({});
    const[actors, setActors] = useState ([]);
    const[directors, setDirectors] = useState([]);
    const [ratings, setRatings] = useState({});

    const{ id: movieId } = useParams(); 
    const defaultImageURL = "public/assets/placeholder";

    useEffect(() => {

        axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`)
        .then(response => {
            setMovieDetails(response.data);
        });

        axios.get(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}`)
        .then(response => {
            setActors(response.data.cast);
            setDirectors(response.data.crew.filter(person => person.job === 'Director'));
        });
        //find sources for fetching ratings from imdb, rotten and roger ebert.
        //set ratings

    }, [movieId]);

    

    return (
        <div>
        <h1>{movieDetails.title}</h1>
        <img src={movieDetails.poster_path ? `https://image.tmdb.org/t/p/w342${movieDetails.poster_path}` : defaultImageURL} alt={movieDetails.title} />
        <p>{movieDetails.overview}</p>

        <h2>Actors</h2>
        <ul>
            {actors.map((actor,index) => (
                <li key={index}>{actor.name}</li>
            ))}
        </ul>

        <h2>Direcotrs</h2>
        <ul>
            {directors.map((director, index) => (
                <li key={index}>{director.name}</li>
            ))}
        </ul>

        <Ratings ratings={ratings} />
        </div>

    );
}

export default MovieDetails;
