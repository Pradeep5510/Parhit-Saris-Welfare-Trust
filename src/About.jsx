import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Pagemap from "./Pagemap.jsx";
import "./About.css";
import ImpactChart from "./ImpactChart.jsx";

function About() {
  const location = useLocation();

  // Scroll ONLY when hash changes (prevents snap-back)
  useEffect(() => {
    if (!location.hash) return;

    const id = location.hash.replace("#", "");

    const timeout = setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 200);

    return () => clearTimeout(timeout);
  }, [location.hash]);

  return (
    <>
      <Header />

      <div>
        {/* WHO WE ARE */}
        <section id="whoWeAre">
          <div className="foundation">
            <h2>About Us</h2>

            <h3 style={{ textAlign: "center", marginTop: "35px" }}>
              “परहित सरिस धर्म नहीं भाई, पर पीड़ा सम नहीं अधमाई”
            </h3>

            <h3 style={{ textAlign: "center" }}>
              ~दूसरों की भलाई करने के समान कोई धर्म नहीं है <br />
              और दूसरों को दुख पहुंचाने के समान कोई अधर्म नहीं है
            </h3>

            <h3 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>
              Who We Are
            </h3>

            <h3>The Foundation</h3>

            <p>
              Parhit Saris was founded in 2021 with a vision to address critical
              social issues and empower communities in need. What began as a
              small initiative has grown into a well-recognized organization
              working in education, social welfare, and community development.
              <br /><br />
              Starting with blanket and food distribution, we expanded into
              digital inclusion, girls’ education, vocational training, health
              awareness, and sustainable livelihood initiatives.
              <br /><br />
              Our journey reflects compassion, inclusivity, and sustainability —
              driven by volunteers, supporters, and community partnerships.
            </p>
          </div>
        </section>

        {/* OUR TEAM */}
        <section id="ourTeam">
          <div className="team">
            <h3>Our Team</h3>
            <h4>Our Trustees</h4>

            <div className="trustees">
              <div className="trustee">
                <img src="/images/Secretary.png" alt="Secretary" />
                <h5 style={{ textAlign: "center" }}>Mr. Patanjali Pathak</h5>
                <h5 style={{ textAlign: "center" }}>(Secretary)</h5>
                <p>
                  Founder of Parhit Saris (2021), Sanskrit Acharya and lifelong
                  educator dedicated to supporting underprivileged students.
                </p>
              </div>

              <div className="trustee">
                <img src="/images/President.jpg" alt="President" />
                <h5 style={{ textAlign: "center" }}>Mrs. Swarn Rekha Pathak</h5>
                <h5 style={{ textAlign: "center" }}>(President)</h5>
                <p>
                  Social worker since 2015, Masters in Economics, TISS alumnus,
                  awarded for her dedication to community development.
                </p>
              </div>

              <div className="trustee">
                <img src="/images/Pradeep.jpg" alt="Treasurer" />
                <h5 style={{ textAlign: "center" }}>Mr. Pradeep Kumar</h5>
                <h5 style={{ textAlign: "center" }}>(Treasurer)</h5>
                <p>
                  IT Engineer and social worker focused on Education for All and
                  digital inclusion in rural communities.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* OUR IMPACT */}
        <section id="ourImpact">
          <div className="impact">
            <h3>Our Impact</h3>

            <p>
              Every number represents lives touched and communities empowered.
            </p>

            <ul className="ul">
              <li>5000+ meals and grocery kits distributed</li>
              <li>10,000+ study material kits provided</li>
              <li>1500+ students and mentors supported</li>
              <li>10,000+ blankets and shawls distributed</li>
              <li>1000+ sanitary pad kits distributed</li>
              <li>20+ villages and tribal groups reached</li>
            </ul>

            <p>
              Our impact reflects hope, dignity, and opportunity — with a vision
              to expand even further.
            </p>
          </div>

          <ImpactChart />
        </section>

        {/* PARTNERS */}
        <section id="partners">
          <div className="partners">
            <h2>Our Partners</h2>

            <p>
              We are grateful to our donors and partners whose generosity fuels
              our mission and strengthens our impact.
            </p>

            <div className="partner-logos">
              <img src="/images/zoho.png" alt="Zoho" />
              <img src="/images/colgate.png" alt="Colgate" />
              <img src="/images/mooncatcher.png" alt="Mooncatcher" />
              <img src="/images/File 14.png" alt="Partner" />
              <img src="/images/BL agro.png" alt="BL Agro" />
              <img src="/images/Shikshadaan.png" alt="Shikshadaan" />
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section id="testimonials">
          <div className="testimonials">
            <h2>Testimonials</h2>
            <p>Coming Soon…</p>
          </div>
        </section>

        {/* CAREERS */}
        <section id="careers">
          <div className="careers">
            <h2>Careers</h2>
            <p>Coming Soon…</p>
          </div>
        </section>
      </div>

      <Pagemap />
      <Footer />
    </>
  );
}

export default About;
