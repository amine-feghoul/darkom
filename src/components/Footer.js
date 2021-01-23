import React from 'react'
import './Footer.css'
function Footer() {
    return (
        <div className="footer-container">
            <div className="footer-wrapper">
                <div className="footer-barnd footer-div">
                <h3> D A R <span className="logo-span">K </span>  O M </h3>
                <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis.</p>
                </div>
                <div className="footer-important-links footer-div">
                <h3>important links</h3>
                    <ul>
                        <li>- <a href="/">About Us</a></li>
                        <li>- <a href="/">Support</a></li>
                        <li>- <a href="/">Contact Us</a></li>
                        <li>- <a href="/"> Payment Methods</a></li>
                        
                   
                    </ul>
                </div>
                <div className="footer-usefull-links footer-div">
                    <h3>usefull links</h3>
                    <ul>
                        <li>- <a href="/">Themeforest</a></li>
                        <li>- <a href="/">CodeCanyon</a></li>
                        <li>- <a href="/">AudioJungle</a></li>
                        <li>- <a href="/">VideoHive</a></li>
                        <li>- <a href="/">PhotoDune</a></li>

                    </ul>
                </div>
                <div className="footer-get-in-touch footer-div">
                    <h3>get in touch</h3>
                    <p><strong>Email:</strong>   darkom@gmail.com 
                    <br/> 
                       <strong>Phone:</strong>   +213 560 76 29 63</p>
                    <div className="footer-social-media">
                        <a> <i className="fab fa-facebook-square"></i></a>
                        <a> <i className="fab fa-instagram"></i></a> 
                         <a> <i className="fab fa-twitter"></i></a>  
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
