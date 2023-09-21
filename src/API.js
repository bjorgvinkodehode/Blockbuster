const API_KEY = "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzOGIyZGRjZWFhNDE3MDU1YWExYmJiNmE4NTg2NDIwZCIsInN1YiI6IjY0ODJlYzk0ZTI3MjYwMDBjOTJmYzk3ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vNTJgQc8kvDPiyMDV_KSzpC26Trk7oqkPknzyDm-_S8";
const BASE_URL = "https://api.themoviedb.org/3";

export async function getRandomMovie(genre) {
  const response = await fetch(
    `${BASE_URL}/discover/movie?with_genres=${genre}`,
    {
      headers: {
        Authorization: API_KEY,
      },
    }
  );

  const data = await response.json();
  const randomIndex = Math.floor(Math.random() * data.results.length);
  const randomMovie = data.results[randomIndex];
  return randomMovie;
}

export async function getMovieTrailer(movieId) {
  const response = await fetch(
    `${BASE_URL}/movie/${movieId}/videos`,
    {
      headers: {
        Authorization: API_KEY,
      },
    }
  );

  const data = await response.json();
  return data.results.length > 0 ? data.results[0] : null;
}

export async function searchMovies(query) {
  const response = await fetch(
    `${BASE_URL}/search/movie?query=${query}`,
    {
      headers: {
        Authorization: API_KEY,
      },
    }
  );

  const data = await response.json();
  return data.results;
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
    `${BASE_URL}/movie/${movieId}/credits`,
    {
      headers: {
        Authorization: API_KEY,
      },
    }
  );
  return await response.json();
}

export async function getMovieRatings(movieId) {
  // Implement this function based on the API's capabilities
}