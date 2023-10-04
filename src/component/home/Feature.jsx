import React from 'react'
import './Feature.css'
import { Col, Row } from 'react-bootstrap'

function Feature() {
    return (
        <>
            <Row className='feature-img' style={{ background: "url(img/person1.jpeg)" }}>
                <Col className='col-sm-6' >
                    <p className='feature-text'>Giving birth to a new breed of home audio music.</p>
                    <p className='feature-text1'>
                        Lorem ipsum dolor sit amet consectetur adipisicing
                        elit. Amet obcaecati a alias officia, temporibus
                        iusto soluta dignissimos dolorem numquam mollitia.</p>
                    <button className='btn btn-dark'>Descover More</button>
                </Col>
                <Col className='col-sm-6 text-center' >



                </Col>
            </Row>

        </>
    )
}

export default Feature
