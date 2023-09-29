import './Home.css';
import NowPlaying from "./NowPlaying";
import PopularMovies from "./PopularMovies";
import TopRatedMovies from "./TopRatedMovies";
import UpcomingMovies from "./UpcomingMovies";


function Home() {
    return (
      <section>
        <h1>Welcome to our Movie App</h1>
        
        <NowPlaying />
       <PopularMovies />
       <TopRatedMovies />
       <UpcomingMovies />
       
       
      
      </section>
      
    );
  }
  
  export default Home;