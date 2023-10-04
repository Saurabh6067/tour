import React from 'react'
import './Slider.css'
import { Col, Row } from 'react-bootstrap'

export default function Slider() {
    return (
        <>
            <Row className='slider-background'>
                <Col className=' slider-text '>
                    <p >
                        EXCLUSIVE PRODUCT
                    </p>
                    <h1>Lumosound Fusion Pro</h1>
                    <p>Lorem ipsum dolor sit amet.
                        Ab obcaecati aperiam perferendis suscipit!
                        Incidunt nostrum quis mollitia officiis.
                        Quaerat culpa alias commodi ipsa.
                        Explicabo perspiciatis expedita sequi ea?
                        .</p>
                        <button className='btn btn-dark'>Know More</button>
                </Col>
                <Col className='slider-img text-center'>
                    <img src="img/headphone.png" alt="" />
                </Col>
            </Row>

        </>
    )
}
