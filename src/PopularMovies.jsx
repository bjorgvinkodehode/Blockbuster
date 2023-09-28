import { useFetchMovies } from './useFetchMovies'; 

function PopularMovies() {
  const { movies, error } = useFetchMovies('/movie/popular_movies');

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>Popular Movies</h1>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default PopularMovies;