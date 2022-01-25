import './App.css';

import { useState } from 'react';

// importing components
import Navbar from './components/Navbar';
import Home from './components/Home';
import Contact from './components/Contact';

import { 
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';


function App() {
  const [display, setDisplay] = useState(false);

  window.onscroll = () => {
    if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600)
      setDisplay(true);
    else
      setDisplay(false);
  };

  function topFunction() {
      document.body.scrollTop = 0; 
      document.documentElement.scrollTop = 0;
  }

  return (
    <>
      <div className="App select-none">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path = '/' element = { <Home /> } />
            <Route path = '/contact' element = { <Contact /> } />
          </Routes>
        </BrowserRouter>
      </div>

      <div onClick = { topFunction } className = { !display ? 'hidden' : 'fixed up-arrow p-2 bg-sky-300 shadow-lg cursor-pointer' }>
        <img width = "30px" height = "30px" src = 'up.png' alt = 'up' />
      </div>
    </>
    
  );
}

export default App;
