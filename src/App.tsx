// imports
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// importing components
import Layout from "./components/Layout";

// importing pages
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Project from "./pages/Projects";

// app component
function App() {
  return (
    <>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Project />} />
          </Routes>
        </Layout>
      </Router>
    </>
  );
}

export default App;
