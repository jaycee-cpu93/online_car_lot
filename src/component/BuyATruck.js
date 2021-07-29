import React from "react";

import '../styles/BuyATruck.css'
import { Button } from "react-bootstrap";
const BuyATruck = () =>{

    return(
    <div className="second_mini_container">
    <div className="truck-image-section">
      <img src="Image/trucks-min.jpg" alt="truck" height = "265px" width="640px"/>
    </div>
    <div className="text-section-two">
            <span id="text_four">WANT TO </span>
            <span id="text_five">BUY A TRUCK </span>
            <span id="text_six">Look nowhere else</span>
          <div className="btn-group">
            <a href="link1"><Button variant="warning">Get Started</Button></a>
          </div>
    </div>
    </div>
);

}

export default BuyATruck

