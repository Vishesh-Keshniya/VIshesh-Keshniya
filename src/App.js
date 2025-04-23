import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./Components/Nav";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";
import Contact from "./Components/Contact";
import Resume from "./Components/Resume";

function App() {
  return (
    <Router>
      <Nav /> {/* Navbar stays fixed */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/Resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
        

      </Routes>
    </Router>
  );
}

export default App;
