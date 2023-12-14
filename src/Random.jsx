import { useState, useEffect } from 'react';
import { getRandomMovie, getMovieTrailer } from './API';
import './Random.css';

function Random() {
  const [movie, setMovie] = useState(null);
  const [trailer, setTrailer] = useState(null);
  

  useEffect(() => {
    const handleResize = () => {
      if (!movie) return;
    
      const width = window.innerWidth;
    
      const movieImg = document.querySelector("#movie img");
    
      if (!movieImg) return;
    
      const posterPath = movie?.poster_path || '';
    
      if (width <= 768) {
        movieImg.src = `https://image.tmdb.org/t/p/w185${posterPath}`;
      } else {
        movieImg.src = `https://image.tmdb.org/t/p/w342${posterPath}`;
      }
    };

    
    handleResize();

   
    window.addEventListener('resize', handleResize);
    
   
    return () => window.removeEventListener('resize', handleResize);
  }, [movie]);

  const findMovie = async () => {
    const selectGenre = document.getElementById("select-Genre");
    const genreId = selectGenre.value;
    const randomMovie = await getRandomMovie(genreId);
    setMovie(randomMovie);
    const movieTrailer = await getMovieTrailer(randomMovie.id);
    setTrailer(movieTrailer);
  };

  const openTrailer = () => {
    if (trailer && trailer.site === "YouTube") {
      const youtubeUrl = `https://www.youtube.com/watch?v=${trailer.key}`;
      window.open(youtubeUrl, '_blank');
    }
  };

  return (
    <main className="main-container">
      <div className="first-row">
        <label htmlFor="select-Genre">Choose a genre:</label>
        <select id="select-Genre">
        <option value="27">Horror</option>
        <option value="28">Action</option>
        <option value="12">Adventure</option>
        <option value="16">Animation</option>
        <option value="35">Comedy</option>
        <option value="80">Crime</option>
        <option value="99">Documentary</option>
        <option value="18">Drama</option>
        <option value="10751">Family</option>
        <option value="14">Fantasy</option>
        <option value="36">History</option>
        <option value="10402">Music</option>
        <option value="9648">Mystery</option>
        <option value="10749">Romance</option>
        <option value="878">Science Fiction</option>
        <option value="10770">TV Movie</option>
        <option value="53">Thriller</option>
        <option value="10752">War</option>
        <option value="37">Western</option>
        </select>
        <button id="random-Movie" onClick={findMovie}>Find a Movie</button>
      </div>
      <div className="second-row">
        {movie && (
          <div className="movie-info" style={{ display: movie ? 'block' : 'none' }}>
            <div id="movie">
              <h2>{movie ? movie.title : 'Movie Title'}</h2>
              <p>{movie ? movie.overview : 'Movie Overview'}</p>
              <button id="open-trailer" onClick={openTrailer}>Watch Trailer</button>
              <img src={movie ? `https://image.tmdb.org/t/p/w342${movie.poster_path}` : 'https://image.tmdb.org/t/p/w500/movie-poster-path'} alt={movie ? movie.title : 'Movie Title'} />
            </div>
          </div>
        )}
      </div>
    </main>
  );
}

export default Random;