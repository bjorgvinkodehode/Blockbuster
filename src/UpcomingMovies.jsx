import { Link } from 'react-router-dom';
import { useFetchMovies } from './useFetchMovies'; // Import the custom hook

function UpcomingMovies() {
  const { movies, error } = useFetchMovies('/movie/upcoming'); // Use the custom hook

  // Display an error message if an error occurs
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
    <h1>Upcoming Movies</h1>
    <div className='poster'>
      {movies.map((movie) => (
        <div key={movie.id}>
          <Link to={`/movie/${movie.id}`}>  {/* Wrap with Link */}
            <img
              src={`https://image.tmdb.org/t/p/w92${movie.poster_path}`} 
              alt={movie.title}
            />
            {movie.title}
          </Link>
        </div>
      ))}
    </div>
  </div>
);
}

export default UpcomingMovies;




