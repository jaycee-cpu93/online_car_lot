import React from "react";
import "../styles/Nav.css"

import { Container, Image, Navbar, Nav } from 'react-bootstrap'
const HeaderTwo = (props) => {

    
                    
    return(
            // <div className="header__two">
            // <a href ="/ng"><img src="Image/autochek.png" alt="autochek" style={{width: "50px",
            // height: "30px" }} /></a>
                
            //         <span>
            //             <a  style={{textDecoration: "none"}} href=" ">Fix Your Car</a> &nbsp;&nbsp;&nbsp;
            //              <a style={{textDecoration: "none"}}href=" ">Buy A Car</a>  &nbsp;&nbsp;&nbsp;
            //              <a style={{textDecoration: "none"}}href=" ">Sell A Car</a> &nbsp;&nbsp;&nbsp;
            //              <a style={{textDecoration: "none"}}href=" ">Buy A Truck</a> &nbsp;&nbsp;&nbsp;
            //              <a style={{textDecoration: "none"}} href=" "> Car Loan</a>

            //         </span>
            
            // </div>

          
            <Navbar bg="light" expand="lg" className = "header__two">
                <Container >
                    <Navbar.Brand href="#home"><Image className="pic_size" src="Image/autochek.png" fluid width="100px" height="110px" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Fix Your Car</Nav.Link>
                            <Nav.Link href="#link">Buy A Car</Nav.Link>
                            <Nav.Link href="#link">Sell A Car</Nav.Link>
                            <Nav.Link href="#link">Buy A Truck</Nav.Link>
                            <Nav.Link href="#link">Car Loan</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    <Nav className="me-auto">
                            <Nav.Link href="#home">Sign-In</Nav.Link>
                            <Nav.Link href="#link">Regsiter</Nav.Link>
                        </Nav>
                </Container>
            </Navbar>
                    
    );

}

export default HeaderTwo;