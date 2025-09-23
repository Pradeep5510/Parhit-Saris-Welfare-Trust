import React from "react";
import Header from './Header.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image_Slider from './Image_Slider.jsx';
import Footer from './Footer.jsx';
import './Homepage.css';
import './Pagemap.jsx';
import Pagemap from "./Pagemap.jsx";


function Homepage() {
    return (
        <> <Header/>
           <Image_Slider/>
        <div className="container1">
            <h3>Parhit Saris Welfare Trust Narrative</h3>
             <p>          
             "परहित सरिस धर्म नहि भाई ..."<br/>
             “To serve others is the biggest of all religions”<br/><br/>
             Inspired by these thoughts , Our Founder Mr. Patanjali Pathak started
             this mission to provide underprivileged, marginalized and ultra-poor with
             the basic need for sustaining life: Education, Healthcare and well-being.
             The statement "To serve others is the biggest of all religions" highlights
             the profound idea that selfless service, compassion, and care for others
             are the ultimate expressions of spirituality and morality. It transcends
             dogmas, rituals, and the boundaries of organized religions, focusing
             instead on the universal principles of love, empathy, and humanity.
             <br/>
             <br/> Registered in 2021, 
             Parhit Saris Welfare Trust is a non-profit organization committed to making a 
             tangible difference in the lives of underprivileged communities across India. 
             With a strong belief in compassion, inclusion, and service, we have taken impactful 
             strides in social welfare, rural education, and community empowerment.        
           </p>
        </div>
        
        <div className="container2">
            {/* <h1 id="narrative">Parhit Saris Welfare Trust Narrative</h1> */}
            <div className="vision">
                <h2>Our Vision</h2>
                <p>To transform rural learning spaces
                   through use of modern learning
                   tools and to provide a platform for
                   rural transformation.
                </p>
            </div>
            <div>
                <img src="./images/Inspiration.png" alt="inspiration" />
            </div>
            <div className="mission">
                <h2>Our Mission</h2>
                <p>To provide underprivileged,
                   marginalized and ultra-poor with the
                   basic need for sustaining life:
                   Education, Healthcare and well-being.
                </p>                
            </div>
        </div>

        <div className="container3">
            <div className="initiatives">
                <h2>Our Key Initiatives</h2>
                 <p> <br/>                
                    1. Humanitarian Relief & Social Welfare<br />
                    <ul>
                        <li>Blanket Donation Drives: Bringing warmth during harsh winters to the homeless and economically weaker sections.</li>
                        <li>Food & Meal Distribution: Regularly organizing meal drives for the hungry and needy in slum and remote rural areas.</li>
                        <li>COVID-19 Relief: Provided essential medical kits, food packets, and awareness support during the pandemic to thousands of affected families.</li>
                        <li>Tree Plantation Campaigns: Encouraging environmental stewardship by planting thousands of trees across rural and urban zones.</li>
                    </ul>
                    <br />
                    2. Rural Education & Empowerment <br/>
                    <ul>
                        <li>Public Digital Library: Set up in underserved regions to provide free access to books, educational resources, and internet services, promoting self-learning and digital literacy.</li>
                        <li>Digital Classroom Program: Bridging the digital divide by introducing smart classrooms equipped with audio-visual tools to enhance learning outcomes in rural schools.</li>
                        <li>Study Kit Distribution: Providing school children with essential kits that include notebooks, stationery, school bags, and hygiene items to support their education journey.</li>
                    </ul>
                    </p>
            </div>
            <div className="donation">
                <a  href=""><button class="d1">Sponsor a Pubic Digital Library <img class="imgs" src="./images/Library Book.png"/> <h3 class="d2">Donate Now</h3></button></a>
            <a  href=""><button class="d1">Sponsor Study Materials for Kids <img class="imgs" src="./images/Study Material.png"/><h3 class="d2">Donate Now</h3></button></a>
            <a  href=""><button class="d1">Sponsor Meal for Marginalised Community<img class="imgs" src="./images/food.png"/><h3 class="d2">Donate Now</h3></button></a> 
            </div>    
        </div>

        <div className="container4">
            <h2>Our Impact</h2>
            <div className="impact-cards">
                <div className="card">
                    <img src="./images/File 5.png" alt="" />
                    <h3>5000+</h3>
                    <p>Meals and Grocery Kits Served</p>
                </div>
                <div className="card">
                    <img src="./images/File 8.png" alt="" />
                    <h3>2000+</h3>
                    <p>Study Material Kits Distributed</p>
                </div>
                <div className="card">
                    <img src="./images/File 13.png" alt="" />
                    <h3>1500+</h3>
                    <p>Students and Mentors Benefited</p>
                </div>
                <div className="card">
                    <img src="./images/File 20.png" alt="" />
                    <h3>10000+</h3>
                    <p>Blankets and Shawls Distributed</p>
                </div>
                <div className="card">
                    <img src="./images/File 31.png" alt="" />
                    <h3>1000+</h3>
                    <p>Sanitary Pads Kits Distributed</p>
                </div>
                <div className="card">
                    <img src="./images/File 32.png" alt="" />
                    <h3>20+</h3>
                    <p>Villages and Tribal Groups and Folks</p>
                </div>
            </div>            
        </div>
        <div className="container5">
            <h2>Get Involved</h2>
            <p>Join us in making a difference! Whether through volunteering, donations, or partnerships, your support can help us reach more communities and create lasting change. Together, we can build a brighter future for all.</p>
            <div className="involved-buttons">
                <div className="card1">
                    <img src="./images/volunteer.png" alt="volunteer" />
                     <a href=""><button class="d3">Become a Volunteer</button></a>    
                </div>
                <div className="card1">
                    <img src="./images/donate.png" alt="donate" />
                    <a href=""><button class="d3">Donate Now</button></a>
                </div>
                <div className="card1">
                    <img src="./images/fundraise.png" alt="fundraise" />
                    <a href=""><button class="d3">Fundraise</button></a>
                </div>
                <div className="card1">
                    <img src="./images/partner.png" alt="partner" />
                    <a href=""><button class="d3">Partner With Us</button></a>
                </div>    
            </div>      
        </div>
        <Pagemap/>
        <Footer/>
        </>
    );
}

export default Homepage;