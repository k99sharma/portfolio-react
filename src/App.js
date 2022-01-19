import './App.css';

// importing components
import Navbar from './components/Navbar';

import { 
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

function Home(){
  return(
    <h1>Home</h1>
  );
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path = '/' element = { <Home /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
