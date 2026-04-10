import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/navBar.jsx";
import Header from "./sections/header.jsx";
import Experience from "./sections/experience.jsx";
import Projects from "./sections/projects.jsx";
import Musings from "./sections/musings.jsx";
import MusingDetail from "./sections/musingDetail.jsx";

function App() {
  return (
    <BrowserRouter basename="/JulianPortfolioReact">
      <NavBar />
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/musings" element={<Musings />} />
        <Route path="/musings/:slug" element={<MusingDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
