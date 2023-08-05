// imports
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// importing components
import Layout from "./components/Layout";

// importing pages
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Project from "./pages/Project";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

// app component
function App() {
  return (
    <div>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/contact" exact element={<Contact />} />
            <Route path="/projects/:id" element={<Project />} />
            <Route path="/blog" exact element={<Blog />} />
            <Route path="*" exact element={<NotFound />} />
          </Routes>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
