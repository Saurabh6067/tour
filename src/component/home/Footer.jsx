import React from 'react'
import './Footer.css'
import { Col, Row, InputGroup, Form } from 'react-bootstrap'

function Footer() {
    return (
        <>

            <Row className='footer-row'>
                <hr />
                <Col className='col-sm-6 footer-col'>
                    <p className='footer-text'>Lorem ipsum dolor sit amet, consectetur
                        adipisicing elit. Nihil consequatur unde labore quis inventore nisi
                        repellat magni iusto consequuntur hic.</p>
                    <hr />
                    <InputGroup className="mb-3">
                        <Form.Control
                            placeholder="Email"
                            aria-label="Email"
                            aria-describedby="basic-addon2"
                        />
                        <InputGroup.Text id="basic-addon2"
                            style={{ backgroundColor: "orange" }}>Subsribe</InputGroup.Text>
                    </InputGroup>
                </Col>
                <Col className='col-sm-2 footer-col'>
                    <h4>Categories</h4>
                    <p>
                        Headphone <br />
                        Earphone <br />
                        Audio Player <br />
                        Speakers <br />
                        Accessories
                    </p>
                </Col>
                <Col className='col-sm-2 footer-col'>
                    <h4>Support</h4>
                    <p>
                        My Account <br />
                        Ticket Support <br />
                        FaQ <br />
                        Contact Us
                    </p>
                </Col>
                <Col className='col-sm-2 footer-col'>
                    <h4>Get in Touch</h4>
                    <p>
                        <i style={{ fontSize: "2vw" }} className="bi bi-geo-alt-fill text-danger"></i> digicoders Pvt
                        Ltd Lucknow Uttar Pradesh <br />
                        <i style={{ fontSize: "2vw" }}
                        className="bi bi-envelope-at text-danger"></i> Saurabh6067@gmail.com<br />
                        <i style={{ fontSize: "2vw" }}
                        className="bi bi-telephone text-danger"></i> 8318259972 <br />
                        
                         
                         
                    </p>
                </Col>
            </Row>
            <hr />
            <Row>
                
                <Col className="col-sm-2" style={{borderRight:"1px solid black"}}>
                    <img src="img/sitelogo.png" alt="" />
                </Col>
                <Col className='col-sm-6'>
                    <p className='pt-3'>
                    Copyrigt&copy;2023 design and develop by saurabh 
                    </p>  
                </Col>
                <Col className='col-sm-4'>
                    <p className='pt-3'>
                    <box-icon type='logo' name='visa'></box-icon>
                    </p>  
                </Col>
            </Row>


        </>
    )
}

export default Footer
