import { API_KEY, BASE_URL } from './constants';


export async function getRandomMovie(genre) {
  const response = await fetch(
    `${BASE_URL}/discover/movie?with_genres=${genre}&api_key=${API_KEY}`
  );

  const data = await response.json();
  const randomIndex = Math.floor(Math.random() * data.results.length);
  const randomMovie = data.results[randomIndex];
  return randomMovie;
}

export async function getMovieTrailer(movieId) {
  const response = await fetch(
    `${BASE_URL}/movie/${movieId}/videos?api_key=${API_KEY}`
  );

  const data = await response.json();
  return data.results.length > 0 ? data.results[0] : null;
}

export async function searchMovies(query) {
  try {
    const response = await fetch(
      `${BASE_URL}/search/movie?query=${query}&api_key=${API_KEY}`
    );

    if (!response.ok) {
      throw new Error(`Network response was not ok ${response.statusText}`);
    }

    const data = await response.json();

    if (data.results) {
      return data.results;
    } else {
      console.error('Unexpected response format:', data);
      return [];
    }
  } catch (error) {
    console.error('Error fetching search results:', error);
    throw error;  // re-throw the error to be handled by the calling function
  }
}

export function setImageSize(width, poster_path) {
  let imgSrc = '';
  if (width <= 320) {
    imgSrc = `https://image.tmdb.org/t/p/w92${poster_path}`;
  } else if (width <= 480) {
    imgSrc = `https://image.tmdb.org/t/p/w154${poster_path}`;
  } else if (width <= 768) {
    imgSrc = `https://image.tmdb.org/t/p/w185${poster_path}`;
  } else if (width <= 1024) {
    imgSrc = `https://image.tmdb.org/t/p/w342${poster_path}`;
  } else if (width <= 1280) {
    imgSrc = `https://image.tmdb.org/t/p/w500${poster_path}`;
  } else {
    imgSrc = `https://image.tmdb.org/t/p/w780${poster_path}`;
  }
  return imgSrc;
}

export async function getMovieCredits(movieId) {
  const response = await fetch(
    `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`
  );
  return await response.json();
}

