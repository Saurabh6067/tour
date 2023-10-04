import React from 'react'
import './Feature.css'
import { Col, Row } from 'react-bootstrap'

function Feature() {
    return (
        <>
            <Row className='feature-img mt-5' style={{ background: "url(img/girl3.jpg)" }}>
                <Col className='col-sm-6' >
                    <p className='feature-text text-light'>Discount up to 35% for first purchase only this month.</p>
                    <p className='feature-text1'>
                        Lorem ipsum dolor sit amet consectetur adipisicing
                        elit. Amet obcaecati a alias officia, temporibus
                        iusto soluta dignissimos dolorem numquam mollitia.</p>
                    <button className='btn btn-danger'>Shop Now</button>
                </Col>
                <Col className='col-sm-6 text-center' >



                </Col>
            </Row>

        </>
    )
}

export default Feature
