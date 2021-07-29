import React from "react";
import '../styles/BuyACarSection.css'
import { Button } from "react-bootstrap";

// const path = require("path")
// import buy_a_car from path.resolve(__dirname, "Image/buy_a_car.jpg")
// import { Image } from "react-bootstrap";



const BuyACarSection = () => {
    return(
      <div className="first_mini_container">
        <div className="car-image-section">
          <img src="Image/buy_a_car.jpg" alt="buyacar"
           width ="489px" height="530px"
          />
        </div>
          <div className="text-section">
            <span id="text_one">WANT TO </span>
            <span id="text_two">BUY A CAR </span>
            <span id="text_three">Find the car of your choice</span>
          <div className="btn-group">
            <a href="link1" style={{marginRight:"16px"}}><Button variant="warning">Search All Cars</Button></a>
            <a href="link2"><Button variant="warning">Apply for car financing</Button></a>
          </div>
        </div>
      
    </div>
       /* <div className="boxContainer">
        
        <div className="FirstBox">
          <img src="Image/buy_a_car.jpg" alt="buyacar"/>
          <div>
            <span>WANT TO</span> <span>BUY A CAR?</span> <span>Find the right car to buy today.</span>
            <div className="callActionContainer">
              <div><span>Search all cars</span></div>
              <div><span>Apply for car financing</span></div>
            </div>
          </div>
        </div>
        <div className="SecondBox">
          <div className="SecondBoxOne">
            <img src="Image/trucks-min.jpg" alt="buyacar"/>
          </div>
          <div className="SecondBoxTwo"> 
            <img src="Image/fix-your-car.png" alt="buyacar"/>
          </div>
        </div>
    </div>  */
     
    

/* <h5>WANT TO</h5>
<h2>BUY A CAR?</h2>
<p>Find the right car to buy today</p>
<button style={{margin: 0, display: "inline", position: "absolute", bottom: "10px", left:"16px"}}><a href=" " style={{color: "black", textDecoration:'none'}}>Search all cars</a></button>
<button style={{margin:"40px", display: "inline", position: "absolute", bottom: "-30px", left:"100px"}}><a href=" " style={{color: "black", textDecoration:'none'}}>Apply for car financing</a></button> */
    );

};


export default BuyACarSection


// {<Container>

// <Row xs={1} md={2}>
//   <Col>1 of 3</Col>
//   <Col md={{ span: 4, offset: 3 }}>2 of 3</Col>
//   <Col md={{ span: 3, offset: 3 }}>3 of 3</Col>
// </Row>

// </Container>}