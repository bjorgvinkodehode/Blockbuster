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

 