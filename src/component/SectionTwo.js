import React from "react";
import '../styles/SectionTwo.css'
import { Button } from "react-bootstrap";

const SectionTwo = () => {
    
    return(

        <div className="car-text-container">
            <div className ="title-paragraph">
                <h1 className ="title">Buy brand new cars from major <div> retailers in.</div> </h1>
                <p className="description">We are partnering with major car distributors to bring you great and
                    <div>affordable options especially when it comes to brand new cars. Find </div>
                    out what suits your taste.
                </p>
                <a href="link2"><Button variant="warning">Get Started</Button></a>
            </div>
            <div className="suv-car">
            <img src="Image/new-suv-car.png" alt="suvcar"/>
           

            </div>
        </div>
    )
}

export default SectionTwo