import { useEffect } from 'react';
import './App.css';
import './Header.css';
import { HashRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import Home from './Home';
import Films from './Films';
import Footer from './Footer';
import Random from './Random';
import MovieDetails from './MovieDetails';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import { getTopRatedMovies, getUpcomingMovies, getPopularMovies, getNowPlaying } from './API';



function Header({ movie }) {
  const location = useLocation();

  let title;
  switch (location.pathname) {
    case '/Films':
      title = '';
      break;
      case '/Random':
        title = '';
       break;
       case '/movie':
      title = '';
      break;

  }

  Header.propTypes = {
    movie: PropTypes.shape({ 
      id: PropTypes.number,
      title: PropTypes.string
    })

    };


  return (
    <header className="header-grid">
      <h1 className="Blockbuster">{title}</h1>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/Films">Films</Link></li>
          <li><Link to="/Random">Random</Link></li>
          {movie && <li><Link to={`/movie/${movie.id}`}>{movie.title}</Link></li>}
        </ul>
      </nav>
    </header>
  );
}

function App() {
  useEffect(() => {
    const setAppHeight = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    setAppHeight();
    window.addEventListener('resize', setAppHeight);

    return () => window.removeEventListener('resize', setAppHeight);
  }, []); 

  return (
    <Router>
        <Header />
        <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Films" element={<Films />} />
      <Route path="/Random" element={<Random />} />
      <Route path="/movieDetails/:id" element={<MovieDetails />} />
      <Route path="/movie/:id" element={<MovieDetails />} />
      <Route path="/top-rated" element={<MovieList categoryFunction={getTopRatedMovies} />} />
      <Route path="/upcoming" element={<MovieList categoryFunction={getUpcomingMovies} />} />
      <Route path="/popular" element={<MovieList categoryFunction={getPopularMovies} />} />
      <Route path="/now-playing" element={<MovieList categoryFunction={getNowPlaying} />} />
    </Routes>
        <Footer />
    </Router>
  );
}

export default App;