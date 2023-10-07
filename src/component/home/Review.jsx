import React from 'react'
import './Review.css'
import { Col, Row } from 'react-bootstrap'
function Review() {
  return (
    <>
      <Row className='mt-4'>
        <Col className='col-sm-11'>
          <h1 className='review-text'>Customer Feedback & <br /> Reviews.</h1>
        </Col>
        <Col className='col-sm-1'>
          <button className='btn btn-danger'>View All</button>
        </Col>

      </Row>
      <Row className='review-row m-4'>
        <Col className='review-card text-center'>
          <img className='mt-5'  src="img/bus-men.png" alt="" height='110px' 
          width='110px' style={{borderRadius:"50px"}} />
          <h3>Ramesh</h3>
          <p className='text-danger'>
          <i className="bi bi-star-fill"></i>
          <i className="bi bi-star-fill"></i>
          <i className="bi bi-star-fill"></i>
          <i className="bi bi-star-fill"></i>
          <i className="bi bi-star-fill"></i>
          </p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil, fuga!</p>
        </Col>
        <Col className='review-card text-center'>
          <img className='mt-5'  src="img/bus-men.png" alt="" height='110px' 
          width='110px' style={{borderRadius:"50px"}} />
          <h3>Ramesh</h3>
          <p className='text-danger'>
          <i className="bi bi-star-fill"></i>
          <i className="bi bi-star-fill"></i>
          <i className="bi bi-star-fill"></i>
          <i className="bi bi-star-fill"></i>
          <i className="bi bi-star-fill"></i>
          </p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil, fuga!</p>
        </Col>
        <Col className='review-card text-center'>
          <img className='mt-5'  src="img/bus-men.png" alt="" height='110px' 
          width='110px' style={{borderRadius:"50px"}} />
          <h3>Ramesh</h3>
          <p className='text-danger'>
          <i className="bi bi-star-fill"></i>
          <i className="bi bi-star-fill"></i>
          <i className="bi bi-star-fill"></i>
          <i className="bi bi-star-fill"></i>
          <i className="bi bi-star-fill"></i>
          </p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil, fuga!</p>
        </Col>
      </Row>

    </>
  )
}

export default Review
