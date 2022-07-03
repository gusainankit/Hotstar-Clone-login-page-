import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare ,faTwitterSquare } from "@fortawesome/free-brands-svg-icons"

import './log.css';
function Login(){
  
    return(
        <>
        <div className="nav-icon">
            <img src="https://secure-media.hotstarext.com/web-assets/prod/images/brand-logos/disney-hotstar-logo-dark.svg"
                alt=""/>
        </div>
    
        <div className="container">
            <div id="format">
                <div className="log">
                    <span>Login to continue</span>
                </div>
                <button className="btn" types="button">Have a Facebook/Email account?</button>
                <div className="field">
    
                    <p>or</p>
                </div>
    
                <span className="mobilenumber">
                    <span className="pincode">+91</span>
                    <span>
                        <input className="number" type="text" id="text" name="text" placeholder="Enter the mobile number"/>
                    </span>
                </span>
            </div>
    
    
    
             <div className="footer-container">
                <div className="footer">
                    <ul className="footer-nav">
                        <li><a href="">About Disney+Hotstar</a></li>
                        <li><a href="">Terms of use</a></li>
                        <li><a href="">PrivacyPolicy</a></li>
                        <li><a href="">FAQ</a></li>
                        <li><a href="">Feedback</a></li>
                        <li><a href="">Careers</a></li>
                    </ul>
                     <p className="footer-copywrite">
                        © 2022 STAR. All Rights Reserved. HBO, Home Box Office and all related channel and programming logos
                        are service marks of, and all related programming visuals and elements are the property of,
                        Home Box Office, Inc. All rights reserved.
    
                    </p> 
                </div>
    
    
    
                <div className="footer-1">
                    <p>Connect with us</p>
                    <FontAwesomeIcon icon={faFacebookSquare }  className="icon" />
                     <FontAwesomeIcon icon={faTwitterSquare } className="icon" /> 
                </div>
    
                <div className="footer-2">
                    <p>Disney+Hotstar App</p>
                   <div className="imagess">&nbsp;</div>
                </div>
            </div> 
        </div>
        </>
    )
   
}

export default Login