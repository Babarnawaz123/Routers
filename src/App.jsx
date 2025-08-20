import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./assets/home";
import About from "./assets/About";
import Contact from "./assets/Contact";
import NavBar from "./NavBar";
import NotFound from "./NotFound";
import Dashboard from "./Dashboard";
import Profile from "./Profile";
import Settings from "./Settings";

export default function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Dashboard" element={<Dashboard />}>
            <Route path="profile" element={<Profile />} />
            <Route path="settings" element={<Settings />} />
          </Route>
          <Route path="*" element={<NotFound />} />{" "}
          {/*it will always used at the last to not disturb other routes */}
        </Routes>
      </Router>
    </div>
  );
}
