// importing components
import Layout from "../Layout/Layout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// importing pages
import Home from "../../pages/Home";
import Blog from "../../pages/Blog";
import About from "../../pages/About";
import NotFound from "../../pages/404";
import Projects from "../../pages/Projects";

// app component
function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
