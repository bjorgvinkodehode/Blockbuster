import './Home.css';
import NowPlaying from "./NowPlaying";
import PopularMovies from "./PopularMovies";
import TopRatedMovies from "./TopRatedMovies";
import UpcomingMovies from "./UpcomingMovies";
import SearchMovies from "./SearchMovies";


function Home() {
    return (
      <section >
        
        <div className='search'> 
        <SearchMovies />
        </div>
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
  