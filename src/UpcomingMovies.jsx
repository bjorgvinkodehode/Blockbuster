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
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>{movie.title}</li>  // Use unique movie id as the key
        ))}
      </ul>
    </div>
  );
}

export default UpcomingMovies;



