import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Ratings from './Ratings';
import { getMovieDetails, getMovieCredits } from './API'; 

function MovieDetails() {
  const [movieDetails, setMovieDetails] = useState({});
  const [actors, setActors] = useState([]);
  const [directors, setDirectors] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  const { id: movieId } = useParams();

  useEffect(() => {
    setIsLoading(true);

    getMovieDetails(movieId)
      .then(data => {
        setMovieDetails(data);
      })
      .catch(error => {
        console.error("Error fetching movie details:", error);
      });


    getMovieCredits(movieId)
      .then(data => {
        setActors(data.cast);
        setDirectors(data.crew.filter(person => person.job === 'Director'));
      })
      .catch(error => {
        console.error("Error fetching movie credits:", error);
      })
      .finally(() => {
        setIsLoading(false);
      });

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

        <h2>Directors</h2>
        <ul>
            {directors.map((director, index) => (
                <li key={index}>{director.name}</li>
            ))}
        </ul>
        <Ratings tmdbRating={movieDetails.vote_average} />
        </div>
    );
}

export default MovieDetails;


