import React from 'react'
import './About.css'
import { Col, Row, Card } from 'react-bootstrap'

function About() {
    return (
        <>
            <Row className='mt-3'>
                <Col className='text-center'>
                    <h1> <span className='text-danger'> New</span> Feature</h1>
                </Col>
            </Row>
            <Row className='mt-3 back-img' style={{background:"url(img/back3.png)"}}>
                <Col style={{ marginTop: "150px" }}>
                    <Card className='about-card-body'>
                        <Card.Img className="about-img" variant="top" src="img/girl2.jpg" />
                    </Card>
                </Col>
                <Col>
                    <Card className='about-card-body'>
                        <Card.Img className="about-img" variant="top" src="img/boy2.jpg" height="435vw" />
                    </Card>
                </Col>
                <Col>
                    <h2 className='about-text'>Home Audio: The only music that matters.</h2>
                    <p>Lorem ipsum dolor sit amet.
                    Dolores aperiam magnam tempore pariatur.
                    Vel ab tempore tenetur fugit?
                    Autem vero qui eveniet sunt!
                    Voluptatibus porro nesciunt amet neque.</p>
                    <p>Lorem ipsum dolor sit amet.
                    Dolores aperiam magnam tempore pariatur.
                    Vel ab tempore tenetur fugit?
                    Autem vero qui eveniet sunt!
                    Voluptatibus porro nesciunt amet neque.</p>
                    <button className='btn btn-warning'>Discover</button>
                </Col>

            </Row>
        </>
    )
}

export default About
