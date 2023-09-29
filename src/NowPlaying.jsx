import { useFetchMovies } from './useFetchMovies'; 

function NowPlaying() {
  const { movies, error } = useFetchMovies('/movie/now_playing');

  if (error) {
    return <div>Error: {error.message}</div>;
  }
 
  return (
    <div>
      <h1>Now Playing</h1>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default NowPlaying;