import React from 'react';

import  '../styles/Header.css';

import {Container, Row, Col} from "react-bootstrap"



const Header = (props) => {
  
  
  return (
        <div className="header">
          <Container>
            <Row>
              <Col>
              <select className="selectKey">
                  <option>🇳🇬</option>
                  <option>🇰🇪</option>
                  <option>🇬🇭</option> 
              </select>
              </Col>
              <Col md="auto" style = {{color: "white"}}>☎️ &nbsp; +234-813 056 9999</Col>
              <Col xs lg="2" style = {{color: "white"}}>
                  📖 &nbsp; Blog
              </Col>
            </Row>
          </Container>
        </div>
  );
}

export default Header;
