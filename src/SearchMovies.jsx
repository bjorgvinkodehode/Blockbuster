import { useState } from "react";
import { searchMovies } from './API';
import { Link } from 'react-router-dom';
import './SearchMovies.css';

function SearchMovies() {
    const [searchQuery, setSearchQuery] = useState('');
    const [movies, setMovies] = useState([]);
    
  
    const handleSearch = async () => {
      const results = await searchMovies(searchQuery);
      setMovies(results);
      
      
    };
  
    return (
      <main className="search-container">
        <div className="search-row">
          <label htmlFor="search-input">Search Movies:</label>
          <input 
            type="text" 
            id="search-input" 
            value={searchQuery} 
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
        </div>
        <div className="results-row">
          {movies.map((movie, index) => (
            <div key={index}>
                <Link to={`/movieDetails/${movie.id}`}>
              <h3>{movie.title}</h3> 
              </Link>
              <img src={movie.poster_path ? `https://image.tmdb.org/t/p/w92${movie.poster_path}` : 'default_image_path_here'} alt={movie.title} />
              <p>{movie.overview}</p>
            </div>
          ))}
        </div>
      </main>
    );
  }
  
  export default SearchMovies;