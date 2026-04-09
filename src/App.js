import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/navBar.jsx";
import Header from "./sections/header.jsx";
import Experience from "./sections/experience.jsx";
import Projects from "./sections/projects.jsx";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
        <Route
          path="/musings"
          element={
            <div className="placeholderSection">
              <h1>Musings</h1>
              <p>Coming soon.</p>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
