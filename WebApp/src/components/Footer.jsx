
import React from "react";
import fb from "../images/Facebook-01.png";
import github from "../images/github.png"
import linkedin from "../images/linkedin.png"
import twitter from "../images/twitter.png"
import '../designs/footercss.css';

function Footer(){

    return(
<div className="footerdiv" id="footer">
<div className="grid-container">
  <div className="grid-item one">Home</div>
  <div className="grid-item two">About us</div>
  <div className="grid-item three"><h1>LoREM</h1>
  <h2>Made with 💚 for Vitians</h2></div>
  <div className="grid-item four">
    <img src={fb} className="fb" alt=""></img>
    <img src={github} className="fb" alt=""></img>

  </div>
  <div className="grid-item five">
  <img src={linkedin} className="fb2" alt=""></img>
    <img src={twitter} className="fb2" alt=""></img>

  </div>
  <div className="grid-item six">Events and Activities</div>
  <div className="grid-item seven">Cab Sharing</div>
  <div className="grid-item eight">Login/signup</div>

</div>

<div className="footer-text">
Copying Content/Ideas of  Lorem without express and written permission from this site’s owner is strictly prohibited. Excerpts and links may be used, provided that full and clear credit is given to  Lorem with appropriate and specific direction to the original content.
We are not associated with VIT in any way. All information provided in this website is for general information only and is not official information from VIT.
<p>
Copyright © 2017-2022  Lorem Network</p>
</div>
</div>


    );

}

export default Footer;