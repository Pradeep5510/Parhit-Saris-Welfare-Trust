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
            <div className="media-card">
              <img src="./images/media1.jpg" alt="Education Program" />
              <p className="media-caption">
                Education program conducted for underprivileged children.
              </p>
            </div>

            <div className="media-card">
              <img src="./images/media2.jpg" alt="Health Camp" />
              <p className="media-caption">
                Free health check-up camp in a rural community.
              </p>
            </div>

            <div className="media-card">
              <img src="./images/media3.jpg" alt="Food Distribution" />
              <p className="media-caption">
                Food distribution drive supporting vulnerable families.
              </p>
            </div>

            <div className="media-card">
              <img src="./images/media4.jpg" alt="Women Empowerment" />
              <p className="media-caption">
                Skill development workshop for women empowerment.
              </p>
            </div>

            <div className="media-card">
              <img src="./images/media5.jpg" alt="Volunteer Activity" />
              <p className="media-caption">
                Volunteers actively participating in community service.
              </p>
            </div>

            <div className="media-card">
              <img src="./images/media6.jpg" alt="Social Welfare" />
              <p className="media-caption">
                Social welfare initiative for elderly and needy individuals.
              </p>
            </div>
          </div>
        </section>

        {/* VIDEO GALLERY */}
        <section className="media-section">
          <h2>Video Gallery</h2>

          <div className="video-grid">
            <div className="media-card">
              <video controls>
                <source src="./videos/video1.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <p className="media-caption">
                Highlights from our community outreach program.
              </p>
            </div>

            <div className="media-card">
              <video controls>
                <source src="./videos/video2.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <p className="media-caption">
                A short documentary on our education initiatives.
              </p>
            </div>

            <div className="media-card">
              <video controls>
                <source src="./videos/video3.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <p className="media-caption">
                Volunteer experiences and impact stories.
              </p>
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
