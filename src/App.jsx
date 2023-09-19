/* import  { useEffect } from 'react'; */
import './App.css';
import './Header.css';
import { HashRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import Home from './Home';
import Films from './Films';
import Footer from './Footer';
import Random from './Random';

import { useEffect } from 'react';

function Header() {
  const location = useLocation();

  let title;
  switch (location.pathname) {
    case '/Films':
      title = 'Films';
      break;
     case '/Random':
       title = 'Random';
      break;
    // case '/contact':
    //   title = 'Contact';
    //   break;
    default:
      title = 'Blockbuster';
      break;
  }

  return (
    <header className="header-grid">
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/Films">Films</Link></li>
          <li><Link to="/Random">Random</Link></li>
         {/*  <li><Link to="/">Contact</Link></li> */}
        </ul>
      </nav>
      <h1 className="Blockbuster">{title}</h1>
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
      <div className='container' style={{ position: 'relative', zIndex: 1 }}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Films" element={<Films />} />
          <Route path="/Random" element={<Random />} />
          {/* <Route path="/contact" element={<Contact />} /> */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;