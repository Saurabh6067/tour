import React from 'react'
import './Flash.css'
import { Col, Row, Card } from 'react-bootstrap'

function Flash() {
    return (
        <>
            <Row className='mt-5'>
                <Col className='text-center'>
                    <h1> <span className='text-danger'> Flash</span> Sale!</h1>

                </Col>
            </Row>
            <Row className='m-4'>
                <Col className='col-sm-2 p-3 text-center'>
                    <Card className='card-border'>
                        <Card.Img variant="top" src="img/sp1.jpg" />
                        <Card.Body>
                            <Card.Title>JBL SUPER BOOSTER</Card.Title>
                            <p>
                                <del>$150</del>     <span style={{ color: "red" }}>$100</span>
                            </p>
                            <p className='text-danger'>
                                <i className="bi bi-star-fill"></i> <i className="bi bi-star-fill"></i> <i className="bi bi-star-fill"></i> <i className="bi bi-star-fill"></i> <i className="bi bi-star-fill"></i>
                            </p>
                            <button className='btn btn-warning mt-2'>View More</button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className='col-sm-2 p-3 text-center'>
                    <Card className='card-border'>
                        <Card.Img variant="top" src="img/sp2.jpg" />
                        <Card.Body>
                            <Card.Title>JBL SUPER BOOSTER</Card.Title>
                            <p>
                                <del>$150</del>     <span style={{ color: "red" }}>$100</span>
                            </p>
                            <p className='text-danger'>
                                <i className="bi bi-star-fill"></i> <i className="bi bi-star-fill"></i> <i className="bi bi-star-fill"></i> <i className="bi bi-star-fill"></i> <i className="bi bi-star-fill"></i>
                            </p>
                            <button className='btn btn-warning mt-2'>View More</button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className='col-sm-2 p-3 text-center'>
                    <Card className='card-border'>
                        <Card.Img variant="top" src="img/sp3.jpg" />
                        <Card.Body>
                            <Card.Title>JBL SUPER BOOSTER</Card.Title>
                            <p>
                                <del>$150</del>     <span style={{ color: "red" }}>$100</span>
                            </p>
                            <p className='text-danger'>
                                <i className="bi bi-star-fill"></i> <i className="bi bi-star-fill"></i> <i className="bi bi-star-fill"></i> <i className="bi bi-star-fill"></i> <i className="bi bi-star-fill"></i>
                            </p>
                            <button className='btn btn-warning mt-2'>View More</button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className='col-sm-2 p-3 text-center'>
                    <Card className='card-border'>
                        <Card.Img variant="top" src="img/sp3.jpg" />
                        <Card.Body>
                            <Card.Title>JBL SUPER BOOSTER</Card.Title>
                            <p>
                                <del>$150</del>     <span style={{ color: "red" }}>$100</span>
                            </p>
                            <p className='text-danger'>
                                <i className="bi bi-star-fill"></i> <i className="bi bi-star-fill"></i> <i className="bi bi-star-fill"></i> <i className="bi bi-star-fill"></i> <i className="bi bi-star-fill"></i>
                            </p>
                            <button className='btn btn-warning mt-2'>View More</button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className='col-sm-2 p-3 text-center'>
                    <Card className='card-border'>
                        <Card.Img variant="top" src="img/sp1.jpg" />
                        <Card.Body>
                            <Card.Title>JBL SUPER BOOSTER</Card.Title>
                            <p>
                                <del>$150</del>     <span style={{ color: "red" }}>$100</span>
                            </p>
                            <p className='text-danger'>
                                <i className="bi bi-star-fill"></i> <i className="bi bi-star-fill"></i> <i className="bi bi-star-fill"></i> <i className="bi bi-star-fill"></i> <i className="bi bi-star-fill"></i>
                            </p>
                            <button className='btn btn-warning mt-2'>View More</button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className='col-sm-2 p-3 text-center'>
                    <Card className='card-border'>
                        <Card.Img variant="top" src="img/sp1.jpg" />
                        <Card.Body>
                            <Card.Title>JBL SUPER BOOSTER</Card.Title>
                            <p>
                                <del>$150</del>     <span style={{ color: "red" }}>$100</span>
                            </p>
                            <p className='text-danger'>
                                <i className="bi bi-star-fill"></i> <i className="bi bi-star-fill"></i> <i className="bi bi-star-fill"></i> <i className="bi bi-star-fill"></i> <i className="bi bi-star-fill"></i>
                            </p>
                            <button className='btn btn-warning mt-2'>View More</button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    )
}

export default Flash
