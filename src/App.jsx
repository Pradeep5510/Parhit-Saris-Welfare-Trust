import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Homepage from './Homepage.jsx';
import About from './About.jsx';
import Initiatives from './Initiatives.jsx';
import GetInvolved from './GetInvolved.jsx';
import Media from './Media.jsx';
import Contact from './Contact.jsx'
import Donate from './Donate.jsx';
import ScrollToTop from "./ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/initiatives" element={<Initiatives />} />
        <Route path="/involved" element={<GetInvolved />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/media" element={<Media />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
