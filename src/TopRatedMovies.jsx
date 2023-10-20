import { Link } from 'react-router-dom';
import { useFetchMovies } from './useFetchMovies'; // Import the custom hook

function TopRatedMovies() {
  const { movies, error } = useFetchMovies('/movie/top_rated'); // Use the custom hook

  // Show an error message if an error occurs
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>Top Rated Movies</h1>
      <div className='poster'>
        {movies.map((movie) => (
          <div key={movie.id}>
            <Link to={`/movie/${movie.id}`}>  {/* Wrap with Link */}
              <img
                src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} 
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

export default TopRatedMovies;