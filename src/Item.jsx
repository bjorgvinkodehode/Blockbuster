import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Item = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      const apiUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=${import.meta.env.VITE_API_KEY.replace('Bearer ', '')}`;
      
      const response = await fetch(apiUrl, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${import.meta.env.VITE_API_KEY.replace('Bearer ', '')}`
        }
      });

      if (!response.ok) {
        console.error(`Failed to fetch movie: ${response.statusText}`);
        return;
      }

      const data = await response.json();
      setMovie(data);
    };

    fetchMovie();
  }, [id]);

  if (!movie) return <div>Loading...</div>;

  return (
    <div>
      <h1>{movie.title}</h1>
      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
      <p>{movie.overview}</p>
    </div>
  );
};

export default Item;
