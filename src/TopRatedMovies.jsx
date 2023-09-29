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

export default TopRatedMovies;