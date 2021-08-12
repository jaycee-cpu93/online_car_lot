import React from "react";
import '../styles/FixACar.css'
import { Button } from "react-bootstrap";

const FixACar = () =>{
 return(
 <div className="third_mini_container">
     <div className ="ThirdBox">
         <img src="Image/fix-your-car.jpg" alt="fixYourCar" height = "260px" width="650px"/>  
    </div>
    <div className="text-section-three">
    <span id="text_one">NEED TO CARRY OUT CAR MAINTAINANCE</span>
    <span id="text_two">FIX YOUR CAR </span>
    <span id="text_three">We will get you the best deal</span>
  <div className="btn-group">
    <a href="link1"><Button variant="warning">Pick a Service</Button></a>
  </div>
</div>
 </div>
 );
}

export default FixACar;