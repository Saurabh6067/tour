import React from "react";
import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import './Menu.css';
import { Link } from "react-router-dom";

function Menu() {
    return (
        <>
            <Container fluid className="p-0">
                <Row className="p-0" >
                    <Col className="p-0" >
                        <Navbar expand="lg" className="bg-body-tertiary p-0 ">
                            <Container fluid>
                                <img src="img/sitelogo.png" alt="" />
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav ">
                                    <Nav className="me-auto navlink animate__animated animate__shakeY">
                                        <Link className="navlink1" to="/home"><Nav.Link href="#link">Home</Nav.Link></Link>
                                        <Link className="navlink1" to="/home"><Nav.Link href="#link">About</Nav.Link></Link>
                                        <Link className="navlink1" to="/home"><Nav.Link href="#link">Contact</Nav.Link></Link>
                                        <Link className="navlink1" to="/home"><Nav.Link href="#link">Shop</Nav.Link></Link>
                                        
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