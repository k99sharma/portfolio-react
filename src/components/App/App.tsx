// importing components
import Layout from "../Layout/Layout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// importing pages
import Home from "../../pages/Home";
import Blog from "../../pages/Blog";
import About from "../../pages/About";

// app component
function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
