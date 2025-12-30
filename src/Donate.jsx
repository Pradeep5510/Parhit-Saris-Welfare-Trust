/* eslint-disable react-refresh/only-export-components */
import React from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Pagemap from "./Pagemap.jsx";
import "./Donate.css";


function Donate() {
  return (
    <>
      <Header />

      <div className="donate-container">
        <h1 className="donate-title">Support Our Cause</h1>
        <p className="donate-intro">
          Your contribution helps us bring education, healthcare, food, and
          dignity to those in need. Choose a cause you wish to support.
        </p>

        <div className="donation-grid">

          <div className="donation-card">
            <h3>📘 Support Education</h3>
            <p>Help provide books, study materials, and mentorship.</p>
            <p className="donation-amount">₹1,000 – ₹5,000</p>
            <button className="donate-btn">Donate for Education</button>
          </div>

          <div className="donation-card">
            <h3>🩺 Healthcare Support</h3>
            <p>Support medical camps and hygiene initiatives.</p>
            <p className="donation-amount">₹1,500 – ₹7,000</p>
            <button className="donate-btn">Donate for Health</button>
          </div>

          <div className="donation-card">
            <h3>🍲 Feed a Family</h3>
            <p>Provide meals and ration kits.</p>
            <p className="donation-amount">₹800 – ₹3,000</p>
            <button className="donate-btn">Donate Food Support</button>
          </div>

          <div className="donation-card">
            <h3>🧣 Blanket Donation</h3>
            <p>Protect homeless individuals during winter.</p>
            <p className="donation-amount">₹500 – ₹2,000</p>
            <button className="donate-btn">Donate Blankets</button>
          </div>

          <div className="donation-card">
            <h3>👩‍🎓 Women & Youth Empowerment</h3>
            <p>Support skill training and self-employment.</p>
            <p className="donation-amount">₹2,000 – ₹10,000</p>
            <button className="donate-btn">Empower Lives</button>
          </div>

          <div className="donation-card highlight">
            <h3>❤️ General Donation</h3>
            <p>Contribute where it’s needed most.</p>
            <p className="donation-amount">Any Amount</p>
            <button className="donate-btn">Donate Now</button>
          </div>

        </div>
      </div>

      <Pagemap />
      <Footer />
    </>
  );
}
 export default Donate;