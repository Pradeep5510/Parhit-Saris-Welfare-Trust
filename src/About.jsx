import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Pagemap from './Pagemap.jsx';
import './About.css';
import ImpactChart from "./ImpactChart.jsx";


function About() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <>
      <Header />
      <div>
        <section id="whoWeAre">
          <div className="foundation">
          <h2>About Us</h2>
          <h3 style={{textAlign:"center", marginTop:"35px"}}>“परहित सरिस धर्म नहीं भाई, पर पीड़ा सम नहीं अधमाई”</h3>
          <h3 style={{textAlign:"center"}}>~दूसरों की भलाई करने के समान कोई धर्म नहीं है <br />
               और दूसरों को दुख पहुंचाने के समान कोई अधर्म नहीं है</h3>
          <h3 style={{ fontSize:"2.5rem", marginBottom: "1rem" }} > Who We Are</h3>
          <h3>The Foundation</h3>
          <p>Parhit Saris was founded in 2021 with a vision to address critical social issues and empower communities in need. What began as a small initiative driven by passionate individuals has grown into a well-recognized organization making a meaningful impact in education, social welfare, and community development. <br /> <br />
             The journey started with Blanket and Food Distribution Programs, reflecting our commitment to grassroots-level change. Over the years, we expanded our scope to include key milestones such as Digital Inclusion, Girls’ Education, and Vocational Training—responding to the evolving needs of the communities we serve. Through the dedication of our volunteers, staff, and supporters, we have established multiple Digital Libraries and Classroom Programs—both Virtual and Physical—across rural areas of Bihar, benefiting thousands of individuals annually.
             Today, Parhit Saris continues to uphold its founding principles of compassion, inclusivity, and sustainability, striving to create a world where every individual has the opportunity to thrive. <br /> <br />
             Beyond education and welfare, we are also focusing on women empowerment programs, skill development workshops, health and hygiene awareness campaigns, and sustainable livelihood initiatives. These efforts are designed to not only uplift underprivileged communities but also equip them with tools for long-term growth and resilience. <br /> <br />
             Looking ahead, our vision is to expand our outreach to more regions, forge stronger partnerships, and integrate technology-driven solutions that bridge the gap between rural and urban opportunities. Our history is a testament to the power of collective action and the unwavering belief that positive change is possible when communities come together for a greater cause.
          </p>
          </div>
        </section>


        <section id="ourTeam">
          <div className="team">
            <h3>Our Team</h3>
            <h4>Our Trustees</h4>
            <div className="trustees">
              
              <div className="trustee">
                <img src="./images/Secretary.png" alt="" />
                <h5 style={{marginBottom:"5px", textAlign:"center"}}>Mr. Patanjali Pathak</h5>
                <h5 style={{marginBottom:"5px", textAlign:"center"}}>(Secretary)</h5>
                <p>Mr. Patanjali Pathak started Parhit Saris in year 2021. He is a post
                   graduate “आचार्य “ in Sanskrit. He used to teach poor student in his
                   learning days and help them with study materials . He also started a
                   small initiative in early 2000 - “रश्मिरथी निर्धन छात्र कोष” to support young
                   students</p>
              </div>
              <div className="trustee">
                <img src="./images/President.jpg" alt="" />
                <h5 style={{marginBottom:"5px", textAlign:"center"}}>Mrs. Swarn Rekha Pathak </h5>
                <h5 style={{marginBottom:"5px", textAlign:"center"}}>(President)</h5>
                <p>Mrs. Swarn Rekha Pathak is working in social work since 2015 and has
                   been awarded by government and other NGOs . She is Masters in
                   Economics and is an outperformer at TISS - Tata Institue of Social
                   Services (TISS). She has inspired many with her courage and dedication</p>

              </div>
              <div className=" trustee">
                <img src="./images/Pradeep.jpg" alt="" />
                <h5 style={{marginBottom:"5px", textAlign:"center"}}>Mr. Pradeep Kumar </h5>
                <h5 style={{marginBottom:"5px", textAlign:"center"}}>(Treasurer)</h5>
                <p>Mr. Pradeep Kumar is actively working in social services since 2019 .
                   He is a BTech in Information Technology Engineering and has                    worked as a volunteer in many Local NGOs in his college days. He
                   believes in “Education for All” and is currently working to provide
                   EduTech measures to students in rural areas to understand the
                   technology better.</p>
                
              </div>
            </div>
          </div>
        </section>

        <section id="ourImpact">
         <div className="impact">
           <h3>Our Impact</h3>
          <p>At Parhit Saris, every number tells a story of compassion, empowerment, and community transformation. Through our dedicated efforts, we have touched thousands of lives and created lasting change at the grassroots level.</p>
          <ul className="ul">
            <li>5000+ Meals and Grocery Kits Served - ensuring that no family goes hungry during times of crisis.</li>
            <li>10,000+ Study Material Kits Distributed - providing essential resources to children and students, supporting their education.</li>
            <li>1500+ Students and Mentors Benefited - through our learning initiatives, fostering knowledge-sharing and guidance.</li>
            <li>10,000+ Blankets and Shawls Distributed - bringing warmth and dignity to vulnerable communities in harsh winters.</li>
            <li>1000+ Sanitary Pad Kits Distributed - breaking taboos and promoting menstrual health among women and girls.</li>
            <li>20+ Villages and Tribal Groups Reached - empowering underserved and marginalized communities with resources and support.</li>
          </ul>
          <p>Our impact goes beyond numbers — it reflects hope, dignity, and opportunities for the communities we serve. With continued support, we aim to expand our reach and empower even more lives across rural and marginalized regions.</p>
          
         </div>
         <ImpactChart />
        </section>

        <section id="our Partners">
            <div className="partners">
               <h2>Our Partners</h2>
               <p>We are deeply grateful to our donors who believe in our mission and support our vision for a better tomorrow.
                  Their generosity fuels our initiatives, enabling us to reach the most vulnerable communities and create lasting change. Every contribution — big or small — strengthens our ability to serve and uplift. <br />
                  Every donor is a pillar of strength behind our impact — together, we are building a future where no one is left behind.
               </p>
               <div className="partner-logos">
                  <img src="./images/zoho.png" alt="Zoho" />
                  <img src="./images/colgate.png" alt="Colgate" />
                  <img src="./images/mooncatcher.png" alt="Mooncatcher" />
                  <img src="./images/File 14.png" alt="Partner" />
                  <img src="./images/BL agro.png" alt="BL Agro" />
                  <img src="./images/Shikshadaan.png" alt="Shikshadaan" />
               </div>
             </div>        
        </section>

        <section id="Testimonials">
          <div className="testimonials">
             <h2>Testimonials</h2>
             <p>Coming Soon...</p>
          </div>
        </section>

        <section id="Careers">
          <div className="careers">
             <h2>Careers</h2>
             <p>Coming Soon...</p>
          </div>   
        </section>
      </div>
      <Pagemap />
      <Footer />
    </>
  );
}

export default About;
