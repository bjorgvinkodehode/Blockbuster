import './Random.css';
function Random() {
    return (

    <main className="main-container">
        <div className="first-row">
            <h1>What to Watch</h1>
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
        <button id="random-Movie">Find a Movie</button>
       </div>
     <div className="second-row">
  <div className="movie-info hidden">
              <div id="movie">
          <h2>Movie Title</h2>
          <p>Movie Overview</p>
          <button id="open-trailer" >Watch Trailer</button>
          <img src="https://image.tmdb.org/t/p/w500/movie-poster-path" alt="Movie Title"/>
      </div>
  </div>
</div>
</main>


  

);
}
  
  export default Random;