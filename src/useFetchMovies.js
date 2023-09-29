import { useState, useEffect } from 'react';
import { BASE_URL, BEARER_TOKEN } from './constants';  // Import constants

export const useFetchMovies = (endpoint) => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`${BASE_URL}${endpoint}`, {
      headers: {
        'Authorization': `Bearer ${BEARER_TOKEN}`,
      }
    })
    .then(response => {
      if (!response.ok) {
        throw new Error(`Network response was not ok ${response.statusText}`);
      }
      return response.json();
    })
    .then(data => {
      setMovies(data.results);
    })
    .catch(err => {
      console.error("There was a problem fetching data:", err);
      setError(err);
    });
  }, [endpoint]);

  return { movies, error };
}