import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import NavBar from "./components/Navbar";
import ScrollToTop from "./scrollToTop";

import Home from "./pages/Home";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Artworks from "./pages/Artworks";
import Exhibitions from "./pages/Exhibitions";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="App">
        <header>
          <h1>Shubhankar Kumar Biswas</h1>
          <h3>Ceramics and Glass Artworks</h3>
          <NavBar />
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/artworks" element={<Artworks />} />
            <Route path="/exhibitions" element={<Exhibitions />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </HashRouter>
  );
}
