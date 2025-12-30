import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./Contact.css";
import Pagemap from "./Pagemap";

function Contact() {
  return (
    <>
      <Header />

      <div className="contact-container">
        <h1 className="contact-title">Contact Us</h1>
        <p className="contact-intro">
          Feel free to reach out to us for volunteering, donations, or any general
          inquiries.
        </p>

        <div className="contact-content">
          {/* Contact Info */}
          <div className="contact-info">
            <h3>Get in Touch</h3>

            <p><strong>📍 Address:</strong> Jagodih, Rohtas, Bihar, 821312</p>
            <p><strong>📞 Phone:</strong> +91 7379452352 / 9151455510</p>
            <p><strong>📧 Email:</strong> info@parhitsaris.org</p>

            {/* WhatsApp Button */}
            <a
              href="https://wa.me/919159145510"
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-btn"
            >
              💬 Chat with us on WhatsApp
            </a>
          </div>

          {/* Google Map */}
          <div className="contact-map">
            <iframe
              title="NGO Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3649.12774099204!2d84.0458541!3d24.7704709!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398c4d2d8720242d%3A0x7c843b6bd5fbd50a!2sParhit%20Saris%20Welfare%20Trust!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
      <Pagemap />

      <Footer />
    </>
  );
}

export default Contact;
