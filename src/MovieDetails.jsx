import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Ratings from './Ratings';

const API_BASE_URL = "https://api.themoviedb.org/3/movie/";
const API_KEY = import.meta.env.VITE_API_KEY;
const defaultImageURL = "/assets/placeholder";

function MovieDetails() {
  const [movieDetails, setMovieDetails] = useState({});
  const [actors, setActors] = useState([]);
  const [directors, setDirectors] = useState([]);
  const [ratings, setRatings] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  
  const { id: movieId } = useParams();

  useEffect(() => {
    setIsLoading(true);

    axios.get(`${API_BASE_URL}${movieId}?api_key=${API_KEY}`)
      .then(response => {
        setMovieDetails(response.data);
      })
      .catch(error => {
        console.error("Error fetching movie details:", error);
      });

    axios.get(`${API_BASE_URL}${movieId}/credits?api_key=${API_KEY}`)
      .then(response => {
        setActors(response.data.cast);
        setDirectors(response.data.crew.filter(person => person.job === 'Director'));
      })
      .catch(error => {
        console.error("Error fetching movie credits:", error);
      })
      .finally(() => {
        setIsLoading(false);
      });

    // TODO: Fetch ratings from different sources here
    // setRatings(fetchedRatings);
  }, [movieId]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

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
