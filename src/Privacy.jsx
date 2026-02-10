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
          We collect personal details such as name, email, phone number, and donation amount only for the purpose of processing donations,
          issuing receipts, and statutory compliance.
          <br /><br />
          We do not sell, rent, or share donor information with any third party except payment gateway providers and government authorities
          as required by law. All online transactions are secured using industry-standard encryption.
        </p>

        <p>
          All transactions made on this website are strictly for the purposes stated on the website.
        </p>

        <h3 className="contact-title">Pricing & Payments</h3>

        <ul>
          <li>All prices are listed in INR unless stated otherwise.</li>
          <li>Payments are processed through secure payment gateway partners.</li>
          <li>We do not store or process your card, UPI, or banking details on our servers.</li>
          <li>By making a payment, you agree to provide accurate and complete information.</li>
        </ul>

        <h3 className="contact-title">Order / Transaction Confirmation</h3>

        <p>
          Once a transaction is successfully completed, you will receive a confirmation via email and/or SMS.
          In case of payment failure, the amount (if debited) will be refunded as per the bank or payment gateway timelines.
        </p>

        <h3 className="contact-title">Terms & Conditions</h3>

        <p>By accessing and using https://www.parhitsaris.org/, you agree to comply with the following terms:</p>

        <ul>
          <li>All donations made are final and non-refundable.</li>
          <li>We reserve the right to modify or discontinue any program or service without prior notice.</li>
          <li>We are not liable for any indirect, incidental, or consequential damages arising from use of the website.</li>
          <li>All content is for informational purposes only and should not be construed as professional advice.</li>
          <li>By making a donation, you confirm that funds are from legitimate sources.</li>
        </ul>

        <h3 className="contact-title">Refund & Cancellation Policy</h3>

        <p>
          As Parhit Saris Foundation is a non-profit organization, all donations are final and non-refundable.
          No cancellations or refunds are permitted once a donation has been successfully processed.
          In case of duplicate payment or technical error, donors may write within 7 days to
          info@parhitsaris.org with transaction details. Genuine cases will be reviewed and resolved.
        </p>

        <h3 className="contact-title">Governing Law & Jurisdiction</h3>

        <p>
          These Terms and Conditions shall be governed by and construed in accordance with the laws of India.
          Any disputes shall be subject to the exclusive jurisdiction of the courts in your registered city and state.
        </p>
      </div>

      <Pagemap />
      <Footer />
    </>
  );
}

export default Privacy;
