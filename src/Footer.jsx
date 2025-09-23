import './Footer.css';

function Footer() {
    return (

        <footer >
            <div className="footer">
                <div className="social">
                    {/* <a  href=""><button class="donate">Donate Now</button></a> */}
                    <a href="https://www.facebook.com/yourprofile" target="_blank">
                    <img src="./images/facebook.png" alt="facebook"/> </a>
                    <a href="https://x.com/ParhitSaris" target="_blank">
                    <img src="./images/x.png" alt="Twitter"/></a>
                    <a href="https://www.linkedin.com/company/96438609/admin/dashboard/" target="_blank">
                    <img src="./images/linkedIn.png" alt="linkedIn"/> </a>    
                </div> 
                <div className='contact'>
                    <p>
                        <img  className="footer-icon" src="./images/phone (1).png" alt="phone"/>: +91-7379452352 / 9151455510
                        <img  className="footer-icon" src="./images/Email.png" alt="email"/>: info@parhitsaris.org 
                        <img  className="footer-icon" src="./images/address.png" alt="address"/>: Jagodih, Rohtas, Bihar, India - 821312
                    </p> 
                </div>                
            </div>
            <div className='copyright'>
                <p> Parhit Saris Welfare Trust ©2025. All rights reserved.</p>
            </div>
           
        </footer>
    );
}

export default Footer;