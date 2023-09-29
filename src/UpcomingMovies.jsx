import { useFetchMovies } from './useFetchMovies'; // Import the custom hook

function UpcomingMovies() {
  const { movies, error } = useFetchMovies('/movie/upcoming'); // Use the custom hook

  // Display an error message if an error occurs
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
    <div className='poster'>
        {movies.map((movie) => (
          <div key={movie.id}>
            <img
             src= {`https://image.tmdb.org/t/p/w92${movie.poster_path}`} 
             alt={movie.title}
             />
            {movie.title} 
            </div>
        ))}
      </div>
    </div>
  );
}

export default UpcomingMovies;




