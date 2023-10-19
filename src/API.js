import { API_KEY, BASE_URL, BEARER_TOKEN } from './constants';

export async function getRandomMovie(genre) {
  const response = await fetch(
    `${BASE_URL}/discover/movie?with_genres=${genre}&api_key=${API_KEY}`,
    {
      headers: {
        'Authorization': `Bearer ${BEARER_TOKEN}`,
      }
    }
  );

  const data = await response.json();
  const randomIndex = Math.floor(Math.random() * data.results.length);
  const randomMovie = data.results[randomIndex];
  return randomMovie;
}

export async function getMovieTrailer(movieId) {
  const response = await fetch(
    `${BASE_URL}/movie/${movieId}/videos?api_key=${API_KEY}`,
    {
      headers: {
        'Authorization': `Bearer ${BEARER_TOKEN}`,
      }
    }
  );

  const data = await response.json();
  return data.results.length > 0 ? data.results[0] : null;
}

export async function searchMovies(query) {
  try {
    const response = await fetch(
      `${BASE_URL}/search/movie?query=${query}&api_key=${API_KEY}`,
      {
        headers: {
          'Authorization': `Bearer ${BEARER_TOKEN}`,
        }
      }
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

export function setImageSize(width, poster_path, someObject) {
  // Initialize an empty string for the image source URL
  let imgSrc = '';
  
  // Define the source for the poster path
  // Check if the global object someObject exists and has a poster_path
  // If it doesn't, fall back to the poster_path parameter
  const posterPath = someObject ? someObject.poster_path : poster_path;
  
  // If neither the global object nor the parameter provide a poster_path, return an empty string
  if (!posterPath) {
    return imgSrc;
  }

  // Determine the appropriate image size based on the screen width
  if (width <= 320) {
    imgSrc = `https://image.tmdb.org/t/p/w92${posterPath}`;
  } else if (width <= 480) {
    imgSrc = `https://image.tmdb.org/t/p/w154${posterPath}`;
  } else if (width <= 768) {
    imgSrc = `https://image.tmdb.org/t/p/w185${posterPath}`;
  } else if (width <= 1024) {
    imgSrc = `https://image.tmdb.org/t/p/w342${posterPath}`;
  } else if (width <= 1280) {
    imgSrc = `https://image.tmdb.org/t/p/w500${posterPath}`;
  } else {
    imgSrc = `https://image.tmdb.org/t/p/w780${posterPath}`;
  }
  
 
  return imgSrc;
}


export async function getMovieDetails(movieId) {
  const response = await fetch(
    `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`,
    {
      headers: {
        'Authorization': `Bearer ${BEARER_TOKEN}`,
      }
    }
  );
  return await response.json();
}



export async function getMovieCredits(movieId) {
  const response = await fetch(
    `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`,
    {
      headers: {
        'Authorization': `Bearer ${BEARER_TOKEN}`,
      }
    }
  );
  return await response.json();
}