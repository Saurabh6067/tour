import React from 'react'
import { Col, Row } from 'react-bootstrap'
import './Browse.css'

function Browse() {
    return (
        <Row style={{ marginTop: "100px" }}>
            <Col className='col-sm-4 browser-col'>
                <img className='bro-img' src="img/head.png" alt="" />
                <h3 className='mt-4'>Headphone</h3>
            </Col>
            <Col className='col-sm-2 browser-col1' style={{ marginTop: "150px" }}>
                <img className='bro-img1' src="img/specker.png" alt="" />
                <h3 className='mt-4'>Earphone</h3>
                
            </Col>
            <Col className='col-sm-3 browser-col1' style={{ marginTop: "150px" }}>
                <img className='bro-img1' src="img/acc.png" alt="" />
                <h3 className='mt-4'>Earphone</h3>
               
            </Col>
            <Col className='col-sm-2 browser-col1' style={{ marginTop: "150px" }}>
                <img className='bro-img1' src="img/earphone.png" alt="" />
                <h3 className='mt-4'>Earphone</h3>
                
            </Col>
        </Row>
    )
}

export default Browse
