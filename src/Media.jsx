import React from "react";
import Header from "./Header.jsx";
import Pagemap from "./Pagemap.jsx";
import Footer from "./Footer.jsx";
import "./Media.css";

function Media() {
  return (
    <>
      <Header />

      <div className="media-container">
        <h1 className="media-title">Media Gallery</h1>
        <p className="media-intro">
          A glimpse into our work, events, and community initiatives through
          photos and videos.
        </p>

        {/* PHOTO GALLERY */}
        <section className="media-section">
          <h2>Photo Gallery</h2>

          <div className="photo-grid">

            {/* FILE 1 – 10 */}
            <div className="media-card"><img src="/images/File 1.png" alt="Gallery 1" /></div>
            <div className="media-card"><img src="/images/File 2.png" alt="Gallery 2" /></div>
            <div className="media-card"><img src="/images/File 3.png" alt="Gallery 3" /></div>
            <div className="media-card"><img src="/images/File 4.png" alt="Gallery 4" /></div>
            <div className="media-card"><img src="/images/File 5.png" alt="Gallery 5" /></div>
            <div className="media-card"><img src="/images/File 6.png" alt="Gallery 6" /></div>
            <div className="media-card"><img src="/images/File 7.png" alt="Gallery 7" /></div>
            <div className="media-card"><img src="/images/File 8.png" alt="Gallery 8" /></div>
            <div className="media-card"><img src="/images/File 9.png" alt="Gallery 9" /></div>
            <div className="media-card"><img src="/images/File 10.png" alt="Gallery 10" /></div>

            {/* FILE 11 – 20 */}
            <div className="media-card"><img src="/images/File 11.png" alt="Gallery 11" /></div>
            <div className="media-card"><img src="/images/File 12.png" alt="Gallery 12" /></div>
            <div className="media-card"><img src="/images/File 13.png" alt="Gallery 13" /></div>
            <div className="media-card"><img src="/images/File 46.png" alt="Gallery 14" /></div>
            <div className="media-card"><img src="/images/File 15.JPG" alt="Gallery 15" /></div>
            <div className="media-card"><img src="/images/File 56.JPG" alt="Gallery 16" /></div>
            <div className="media-card"><img src="/images/File 17.png" alt="Gallery 17" /></div>
            <div className="media-card"><img src="/images/File 18.JPG" alt="Gallery 18" /></div>
            <div className="media-card"><img src="/images/File 19.JPG" alt="Gallery 19" /></div>
            <div className="media-card"><img src="/images/File 20.png" alt="Gallery 20" /></div>

            {/* FILE 21 – 30 */}
            <div className="media-card"><img src="/images/File 21.jpg" alt="Gallery 21" /></div>
            <div className="media-card"><img src="/images/File 22.png" alt="Gallery 22" /></div>
            <div className="media-card"><img src="/images/File 23.png" alt="Gallery 23" /></div>
            <div className="media-card"><img src="/images/LP1.png" alt="Gallery 24" /></div>
            <div className="media-card"><img src="/images/File 25.png" alt="Gallery 25" /></div>
            <div className="media-card"><img src="/images/File 26.png" alt="Gallery 26" /></div>
            <div className="media-card"><img src="/images/File 27.png" alt="Gallery 27" /></div>
            <div className="media-card"><img src="/images/File 28.png" alt="Gallery 28" /></div>
            <div className="media-card"><img src="/images/File 29.png" alt="Gallery 29" /></div>
            <div className="media-card"><img src="/images/File 30.png" alt="Gallery 30" /></div>

            {/* FILE 31 – 40 */}
            <div className="media-card"><img src="/images/File 31.png" alt="Gallery 31" /></div>
            <div className="media-card"><img src="/images/File 32.png" alt="Gallery 32" /></div>
            <div className="media-card"><img src="/images/LP2.png" alt="Gallery 33" /></div>
            <div className="media-card"><img src="/images/LP3.png" alt="Gallery 34" /></div>
            <div className="media-card"><img src="/images/File 35.png" alt="Gallery 35" /></div>
            <div className="media-card"><img src="/images/File 36.JPG" alt="Gallery 36" /></div>
            <div className="media-card"><img src="/images/File 37.JPG" alt="Gallery 37" /></div>
            <div className="media-card"><img src="/images/File 38.jpg" alt="Gallery 38" /></div>
            <div className="media-card"><img src="/images/File 39.JPG" alt="Gallery 39" /></div>
            <div className="media-card"><img src="/images/File 40.JPG" alt="Gallery 40" /></div>

          </div>
        </section>

        {/* VIDEO GALLERY */}
        <section className="media-section">
          <h2>Video Gallery</h2>

          <div className="video-grid">
            <div className="media-card">
              <video controls preload="metadata">
                <source src="/videos/Video 1.mov" />
              </video>
              <p className="media-caption">Community outreach highlights</p>
            </div>

            <div className="media-card">
              <video controls preload="metadata">
                <source src="/videos/Video 2.mov" />
              </video>
              <p className="media-caption">Education initiatives</p>
            </div>

            <div className="media-card">
              <video controls preload="metadata">
                <source src="/videos/Video 3.MP4" />
              </video>
              <p className="media-caption">Volunteer experiences</p>
            </div>
          </div>
        </section>
      </div>

      <Pagemap />
      <Footer />
    </>
  );
}

export default Media;
