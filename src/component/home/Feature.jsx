import React from 'react'
import './Feature.css'
import { Col, Row } from 'react-bootstrap'

function Feature() {
  return (
   <>
   <Row className='feature-img' style={{background:"url(img/person2.jpg)"}}>
    <Col className='col-sm-6' >

    </Col>
    <Col className='col-sm-6 text-center' >
        <p className='feature-text'>Giving birth to a new breed of home audio music.</p>

    
    </Col>
   </Row>
   
   </>
  )
}

export default Feature
