import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Pagemap from "./Pagemap.jsx";
import "./Initiatives.css";

function Initiatives() {
  const location = useLocation();

 useEffect(() => {
  if (!location.hash) return;

  const targetId = location.hash.replace("#", "");
  const element = document.getElementById(targetId);

  if (element) {
    // Delay ensures images & layout are ready
    setTimeout(() => {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 200);
  }
}, [location.hash]);

  return (
    <>
      <Header />
      <div className="initiatives-container">
        <h1 className="initiatives-title">Our Initiatives</h1>

        <section id="educational" className="initiative-section">
          <h2 className="initiative-heading">Educational Initiatives</h2>
          <p className="initiative-text">
            <h3>📘 Education for All</h3>
            We support underprivileged children by providing access to 
            quality education, learning materials, and mentorship programs
            to help them build a better future.

            <h4>Our Approach</h4>
            We believe in a holistic approach to education, focusing not 
            just on academic success but also on the overall development 
            of the child. Our programs are designed to be inclusive, 
            engaging, and empowering. <br /> <br />
  

            <h4>Key Programs</h4>
            <ul>
              <li><strong>Digital Libraries:</strong> Establishing digital libraries in rural areas to provide access to a wide range of educational resources.</li>
              <li><strong>Parhit-30 Classroom Programs:</strong> Both virtual and physical classroom setups to facilitate interactive learning experiences.</li>
              <li><strong>Scholarships and Mentorship:</strong> Offering scholarships to deserving students and connecting them with mentors for guidance and support.</li>
              <li><strong>Skill Development Workshops:</strong> Conducting workshops to enhance skills in areas like digital literacy, arts, and vocational training.</li>
              <li><strong>Study Material Distribution:</strong> Providing essential study materials and resources to students in need.</li>
            </ul>
          </p>
          <img className="initiative-image" src="./images/File 7.png" alt="Education" />
          <img className="initiative-image" src="./images/File 8.png" alt="Education" />
          <img className="initiative-image" src="./images/File 11.png" alt="Education" />
          <img className="initiative-image" src="./images/File 12.png" alt="Education" />
        </section>

        <section id="health" className="initiative-section">
          <h2 className="initiative-heading">Health and Hygiene</h2>
          <p className="initiative-text">
            Health is a basic human right. We conduct regular medical check-up
            camps, distribute sanitary kits, and raise awareness about hygiene and
            preventive care. Our programs aim to make healthcare accessible to
            rural and low-income communities.

            <br /> <br />
            <p>
              <h4>Key Focus Areas:</h4>
              <ul>
                <li>Free health check-up camps</li>
                <li>Sanitary kit distribution</li>
                <li>Health awareness workshops</li>
                <li>Nutrition programs for children and mothers</li>
              </ul>
              <br />
              Through these initiatives, we strive to improve the overall health
              and well-being of the communities we serve.

              <br />
            </p>
          </p>
          <img className="initiative-image" src="./images/File 15.JPG" alt="Health" />
          <img className="initiative-image" src="./images/File 23.png" alt="Health" />
          <img className="initiative-image" src="./images/File 31.png" alt="Health" />
          <img className="initiative-image" src="./images/File 34.png" alt="Health" />
        </section>

       <section id="empowerment" className="initiative-section">
  <h2 className="initiative-heading">Women & Youth Empowerment</h2>

  <p className="initiative-text">
    Empowering individuals—especially women and youth—is at the heart of our
    mission. We focus on building skills, confidence, and opportunities that
    enable people to become self-reliant and financially independent.

    <br /> <br />

    <p>
      <h4>Key Focus Areas:</h4>
      <ul>
        <li>Skill development and vocational training workshops</li>
        <li>Self-employment and livelihood support programs</li>
        <li>Financial literacy and basic entrepreneurship awareness</li>
        <li>Youth career guidance and employability training</li>
        <li>Women leadership and confidence-building sessions</li>
        <li>Digital literacy and basic computer skills training</li>
      </ul>

      <br />

      Through these initiatives, we aim to create sustainable livelihood
      opportunities, promote gender equality, and help young individuals build a
      secure and dignified future.
    </p>
  </p>

  <img
    className="initiative-image"
    src="./images/File 51.JPG"
    alt="Women Skill Development"
  />
  <img
    className="initiative-image"
    src="./images/File 50.JPG"
    alt="Youth Training Program"
  />
  <img
    className="initiative-image"
    src="./images/File 54.JPG"
    alt="Self Employment Workshop"
  />
  <img
    className="initiative-image"
    src="./images/File 56.JPG"
    alt="Women Empowerment Session"
  />
</section>


       <section id="welfare" className="initiative-section">
  <h2 className="initiative-heading">Social Welfare</h2>

  <p className="initiative-text">
    We extend support to the elderly, differently-abled, and marginalized groups
    through essential relief and community welfare initiatives. Our aim is to
    address basic needs with dignity and help build a more compassionate and
    inclusive society.
  </p>
  <h4>Key Initiatives:</h4>
      <ul>
        <li>Blanket distribution drives for the homeless and elderly</li>
        <li>Food donation programs for vulnerable families</li>
        <li>Ration kit distribution to low-income households</li>
        <li>Seasonal relief support during extreme weather conditions</li>
        <li>Community support for differently-abled individuals</li>
        <li>Emergency assistance for families in crisis</li>
      </ul>


  {/* Blanket Donation */}
  <div className="sub-initiative">
    <h4 className="sub-initiative-heading">Blanket Donation Drive</h4>
    <p className="initiative-text">
      During harsh winters, many homeless and elderly individuals are exposed to
      extreme cold without adequate protection. Our blanket donation drive focuses
      on providing warmth, comfort, and protection to those living in vulnerable
      conditions across streets, shelters, and low-income communities.
    </p>
  </div>

  {/* Food Distribution */}
  <div className="sub-initiative">
    <h4 className="sub-initiative-heading">Food Distribution Program</h4>
    <p className="initiative-text">
      Our food distribution program aims to fight hunger by providing freshly
      prepared meals and essential food supplies to underprivileged families,
      daily wage workers, and homeless individuals. Through regular food drives
      and emergency relief efforts, we ensure that no one goes to bed hungry.
    </p>
  </div>

  <img
    className="initiative-image"
    src="./images/File 30.png"
    alt="Social Welfare Activities"
  />
  <img
    className="initiative-image"
    src="./images/File 46.png"
    alt="Blanket Donation Drive"
  />
  <img
    className="initiative-image"
    src="./images/File 40.JPG"
    alt="Food Distribution Program"
  />
  <img
    className="initiative-image"
    src="./images/File 5.png"
    alt="Food Distribution Program"
  />
  <img
    className="initiative-image"
    src="./images/File 3.png"
    alt="Food Distribution Program"
  />
  <img
    className="initiative-image"
    src="./images/File 6.png"
    alt="Food Distribution Program"
  />
  <img
    className="initiative-image"
    src="./images/File 35.JPG"
    alt="Food Distribution Program"
  />
  <img
    className="initiative-image"
    src="./images/File 18.JPG"
    alt="Food Distribution Program"
  />
</section>


        <section id="upcoming" className="initiative-section">
          <h2 className="initiative-heading">Upcoming Initiatives</h2>
          <p className="initiative-text">
            We are constantly expanding our impact. Upcoming projects include
            sustainable livelihood programs, digital literacy drives, clean water
            campaigns, and eco-friendly community development projects.
          </p>
        </section>
      </div>
      <Pagemap />
      <Footer />
    </>
  );
}

export default Initiatives;