import './Home.css';
import NowPlaying from "./NowPlaying";
import PopularMovies from "./PopularMovies";
import TopRatedMovies from "./TopRatedMovies";
import UpcomingMovies from "./UpcomingMovies";
import SearchMovies from "./SearchMovies";


function Home() {
    return (
      <section >
        <h1>Welcome to &quot;Blockbuster&quot;</h1>

        <SearchMovies />
        <div className='row'>
        <NowPlaying />
        </div>
        <div className='row'>
        <PopularMovies />
        </div>
        <div className='row'>
        <TopRatedMovies />
        </div>
        <div className='row'>
        <UpcomingMovies />
        </div>
      </section>
      
    );
  }
  
  export default Home;
  