import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./assets/home";
import About from "./assets/About";
import Contact from "./assets/Contact";
import NavBar from "./NavBar";

export default function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}
