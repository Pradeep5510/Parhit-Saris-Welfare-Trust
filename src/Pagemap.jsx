import React from "react";
import './Pagemap.css';
import { Link } from "react-router-dom";

function Pagemap() {
    return (
        <div className="pagemap">
            <h3></h3>
            <div className="pagemap-content">
                <h3>About Us</h3>
                <ul>
                    <li> <Link to="/About">Who We Are</Link></li>
                    <li> <Link to="/About">Our Team</Link></li>
                    <li><Link to="/About">Our Impact</Link></li>
                    <li><Link to="/About">Our Partners</Link></li>
                    <li><Link to="/About">Testimonials</Link></li>
                    <li><Link to="/About">Careers</Link></li>
                </ul>
                
            </div>
            <div className="pagemap-content">
                <h3>Our Initiatives</h3>
                <ul>
                    <li> <Link to="/Initiatives">Educational Initiatives</Link></li>
                    <li> <Link to="/Initiatives">Health and Hygiene</Link></li>
                    <li><Link to="/Initiatives">Social Empowerment</Link></li>
                    <li><Link to="/Initiatives">Social Welfare</Link></li>
                    <li><Link to="/Initiatives">Upcoming Initiatives</Link></li>
                </ul>
            </div>
            <div className="pagemap-content">
                <h3>Contact Us</h3>
                <ul>
                    <li> <Link to="/Contact">Contact Information</Link></li>
                    <li> <Link to="/">Support and FAQs</Link></li>
                    <li><Link to="/Media">Media</Link></li>
                    <li><Link to="/Involved">Volunteer</Link></li>
                    <li><Link to="/Privacy">Privacy Policy </Link></li>
                    <li><Link to="/Privacy">Terms & Conditions </Link></li>
                    <li><Link to="/Privacy">Refund & Cancellation Policy </Link></li>
                </ul>
            </div>
            <div className="subscribe">
                <h3>Subscribe to Our Newsletter</h3>
                <form>
                    <input type="name" placeholder="Enter your name" required />
                    <input type="email" placeholder="Enter your email" required />
                    <input type="number" placeholder="Enter your mobile number" required />
                    <button type="submit">Subscribe</button>
                </form>
            </div>

        </div>
    );
}

export default Pagemap;