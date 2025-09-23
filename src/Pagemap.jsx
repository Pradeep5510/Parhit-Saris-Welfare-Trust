import React from "react";
import './Pagemap.css';

function Pagemap() {
    return (
        <div className="pagemap">
            <h3></h3>
            <div className="pagemap-content">
                <h3>About Us</h3>
                <ul>
                    <li> <a href="">Who We Are</a></li>
                    <li> <a href="">Our Team</a></li>
                    <li><a href="">Our Impact</a></li>
                    <li><a href="">Our Partners</a></li>
                    <li><a href="">Testimonials</a></li>
                    <li><a href="">Careers</a></li>
                </ul>
                
            </div>
            <div className="pagemap-content">
                <h3>Our Initiatives</h3>
                <ul>
                    <li> <a href="">Educational Initiatives</a></li>
                    <li> <a href="">Health and Hygiene</a></li>
                    <li><a href="">Social Empowerment</a></li>
                    <li><a href="">Social Welfare</a></li>
                    <li><a href="">Upcoming Initiatives</a></li>
                </ul>
            </div>
            <div className="pagemap-content">
                <h3>Contact Us</h3>
                <ul>
                    <li> <a href="">Contact Information</a></li>
                    <li> <a href="">Support and FAQs</a></li>
                    <li><a href="">Feedback</a></li>
                    <li><a href="">Media Inquiries</a></li>
                    <li><a href="">Volunteer Opportunities</a></li>
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