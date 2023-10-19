
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const MovieList = ({ categoryFunction }) => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedMovies = await categoryFunction();
        setMovies(fetchedMovies);
      } catch (error) {
        console.error('Error fetching movies:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [categoryFunction]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {movies.map((movie, index) => (
        <Link key={index} to={`/movie/${movie.id}`}>
          {movie.title}  {/* Display the movie title or other information here */}
        </Link>
      ))}
    </div>
  );
};

MovieList.propTypes = {
  categoryFunction: PropTypes.func.isRequired,
};

export default MovieList;