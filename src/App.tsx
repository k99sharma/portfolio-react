// imports
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// importing components
import Layout from "./components/Layout";

// importing pages
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Project from "./pages/Projects";
import NotFound from "./pages/notFound";

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
            <Route path="/projects" element={<Project />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </Router>
    </>
  );
}

export default App;
