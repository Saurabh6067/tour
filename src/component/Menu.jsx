import React from "react";
import './Menu.css'
import { Col, Row,Container,Nav,Navbar } from "react-bootstrap";

function Menu() {
    return (
        <>
            <Container fluid>
                <Row >
                    <Col className="p-0" >
                        <Navbar expand="lg" className="bg-body-tertiary ">
                            <Container fluid>
                                <img src="img/sitelogo.png" alt="" />
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav ">
                                    <Nav className="me-auto navlink animate__animated animate__shakeY">
                                        <Nav.Link className="navlink1" href="#home">Home</Nav.Link>
                                        <Nav.Link className="navlink1" href="#link">About</Nav.Link>
                                        <Nav.Link className="navlink1" href="#link">Contact</Nav.Link>
                                        <Nav.Link className="navlink1" href="#link">Shop</Nav.Link>
                                    </Nav>
                                    <p className="social-icon">
                                    <i className="bi bi-instagram"></i>  <i className="bi bi-facebook"></i>  <i className="bi bi-whatsapp"></i>
                                    </p>
                                </Navbar.Collapse>
                            </Container>
                        </Navbar>
                    </Col>
                </Row>
            </Container>
        </>
    );
}
export default Menu