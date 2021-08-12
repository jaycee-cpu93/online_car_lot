import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../styles/Footer.css"

const Footer = ()=>{
    return(
        <div className="footer-container">
            <Container>
                <Row>
                    {/* <Col xs={6}> <span>©  2021</span> Automarket Nigeria Ltd. All rights reserved.</Col>
                    <Col xs={2}>Term of use</Col>
                    <Col xs={2}>Privacy Policy</Col>
                    <Col  >Cookies Policy</Col>
                    <Col>F</Col> */}
                    <Row>
                        <Col xs={6}>©  2021 Automarket Nigeria Ltd. All rights reserved.</Col>
                        
                        <Col style={{paddingLeft:"64px"}} xs={6}>
                            <div >
                                <a href="link90" className = "policy"><span style={{paddingRight:"10px" }}>Term of use</span></a>
                                <a href="link91" className = "policy"><span style={{paddingRight:"10px" }}>Privacy Policy</span></a>
                                <a href="link92" className = "policy"><span> Cookies Policy</span></a>
                                <span className="split">|</span>
                                <a href="link93"><span><img src="https://media.autochek.africa/file/publicAssets/facebook-white.png" alt="facebook" width="15px" height="15px"/></span></a>
                                <a href="link94"><span className="split"><img src="Image/instagram.svg" alt="instagram" width="15px" height="15px"/></span></a>
                                <a href="link95"><span><img src="Image/twitter.svg" alt="twitter" width="15px" height="15px"/></span></a>
                            </div>
                        </Col>
                    </Row>
                </Row>
             </Container>
        </div>
    );

}

export default Footer;