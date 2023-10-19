import { Link } from 'react-router-dom';
import { useFetchMovies } from './useFetchMovies'; 

function PopularMovies() {
  const { movies, error } = useFetchMovies('/movie/popular');

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>Popular Movies</h1>
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

export default PopularMovies;