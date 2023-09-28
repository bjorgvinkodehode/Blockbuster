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
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>{movie.title}</li>  // Use unique movie id as the key
        ))}
      </ul>
    </div>
  );
}

export default TopRatedMovies;