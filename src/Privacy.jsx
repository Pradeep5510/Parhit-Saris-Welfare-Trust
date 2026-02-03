import React from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import "./Contact.css";
import Pagemap from "./Pagemap.jsx";

function Privacy() {
  return (
    <>
      <Header />

      <div className="contact-container">
        <h1 className="contact-title">Privacy Policy</h1>
        <p className="contact-intro">
          Parhit Saris Foundation respects your privacy and is committed to protecting the personal information of donors and beneficiaries.
          We collect personal details such as name, email, phone number, and donation amount only for the purpose of processing donations, issuing receipts, and statutory compliance.
          <br />We do not sell, rent, or share donor information with any third party except payment gateway providers and government authorities as required by law.
          All online transactions are secured using industry-standard encryption.
          For any privacy-related concerns, please contact us.
        </p>

        <div className="contact-container">
            <h3 className="contact-title">Terms & Conditions</h3>

            <p>By accessing and using https://www.parhitsaris.org/, you agree to comply with the following terms:</p>
            <ul>
                <li>All donations made are final and non-refundable.</li>
                <li>We reserve the right to modify or discontinue any program or service without prior notice.</li>
                <li>We are not liable for any indirect, incidental, or consequential damages arising from the use of our website or services.</li>
                <li>All content on the website is for informational purposes only and should not be construed as professional advice.</li>
                <li>By making a donation, you confirm that you are legally authorized to do so and that the funds are from legitimate sources.</li>
            </ul>

            <p>If you have any questions or concerns about these terms, please contact us.</p>
        </div>
         <div className="contact-contaainer">
            <h3 className="contact-title">Refund & Cancellation Policy </h3>

            <p>As Parhit Saris Foundation is a non-profit organization, all donations made through the website are final and non-refundable.
               No cancellations or refunds are permitted once a donation has been successfully processed.
               In case of duplicate payment or technical error, donors may write to us within 7 days at info@parhitsaris.org
               with transaction details. Genuine cases will be reviewed and resolved.</p>
           
            <p>If you have any questions or concerns about these terms, please contact us.</p>
          </div>

        
        </div>
        <Pagemap />
        <Footer />
      </>
  );
}

export default Privacy;
