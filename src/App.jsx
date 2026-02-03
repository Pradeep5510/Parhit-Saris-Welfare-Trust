import React from 'react';
import { HashRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import Homepage from './Homepage.jsx';
import About from './About.jsx';
import Initiatives from './Initiatives.jsx';
import GetInvolved from './GetInvolved.jsx';
import Media from './Media.jsx';
import Contact from './Contact.jsx';
import Donate from './Donate.jsx';
import ScrollToTop from "./ScrollToTop";
import Privacy from './Privacy.jsx';

function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/initiatives" element={<Initiatives />} />
        <Route path="/involved" element={<GetInvolved />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/media" element={<Media />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<Privacy />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
