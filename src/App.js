import './App.css';

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
  return (
    <div className="App select-none">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path = '/' element = { <Home /> } />
          <Route path = '/contact' element = { <Contact /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
