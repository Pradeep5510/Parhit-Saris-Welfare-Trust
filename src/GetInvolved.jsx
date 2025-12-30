import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Pagemap from "./Pagemap.jsx";
import "./GetInvolved.css";

function GetInvolved() {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return;

    const id = location.hash.replace("#", "");
    const element = document.getElementById(id);

    if (element) {
      setTimeout(() => {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 200);
    }
  }, [location.hash]);

  return (
    <>
      <Header />

      <div className="getinvolved-container">
        <h1 className="page-title">Get Involved</h1>
        <p className="page-intro">
          Your support can create meaningful change. Whether you give your time,
          skills, resources, or financial support, every contribution helps us
          serve communities better.
        </p>

        {/* VOLUNTEER */}
        <section id="volunteer" className="getinvolved-section">
          <h2>Volunteer With Us</h2>
          <p>
            Volunteers are the backbone of our organization. By volunteering,
            you can directly engage with communities and contribute your time,
            skills, and compassion to create real impact.
          </p>
          <ul>
            <li>Participate in education, health, and welfare programs</li>
            <li>Support field activities and awareness campaigns</li>
            <li>Help with event coordination and outreach</li>
            <li>Use your professional skills for social good</li>
          </ul>
        </section>

        {/* PARTNER */}
        <section id="partner" className="getinvolved-section">
          <h2>Partner With Us</h2>
          <p>
            We collaborate with corporates, institutions, and social
            organizations to amplify impact through shared resources and
            expertise.
          </p>
          <ul>
            <li>CSR partnerships and program sponsorships</li>
            <li>Joint community development initiatives</li>
            <li>Employee engagement and volunteering programs</li>
            <li>Long-term social impact collaborations</li>
          </ul>
        </section>

        {/* FUNDRAISE */}
        <section id="fundraise" className="getinvolved-section">
          <h2>Start a Fundraiser</h2>
          <p>
            You can raise funds on our behalf to support specific causes and
            initiatives. Fundraising helps us reach more people and respond
            quickly to urgent needs.
          </p>
          <ul>
            <li>Birthday or anniversary fundraisers</li>
            <li>Community and campus fundraising drives</li>
            <li>Online campaigns for specific causes</li>
            <li>Emergency relief fundraising</li>
          </ul>
        </section>

        {/* DONATE */}
        <section id="donate" className="getinvolved-section">
          <h2>Donate</h2>
          <p>
            Your donation helps us continue our work in education, healthcare,
            social welfare, and empowerment programs. Every contribution—big or
            small—makes a difference.
          </p>
          <ul>
            <li>Support education and skill development programs</li>
            <li>Help provide healthcare and nutrition support</li>
            <li>Contribute to food, blanket, and ration drives</li>
            <li>Enable long-term community development</li>
          </ul>
        </section>
      </div>

      <Pagemap />
      <Footer />
    </>
  );
}

export default GetInvolved;
