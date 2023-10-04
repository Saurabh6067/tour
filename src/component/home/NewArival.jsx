import React from 'react'
import './NewArival.css'
import { Col, Row ,Card,Button} from 'react-bootstrap'

function NewArival() {
  return (
    <>
      <Row className='mt-5'>
        <Col className='text-center'>
          <h1> <span className='text-danger'> New</span> Arival!</h1>
        </Col>
      </Row>
      <Row className='m-4'>
        <Col className='col-sm-3 text-center p-3'>
          <Card className='card-arival'>
            <Card.Img variant="top" src="img/new1.jpg" />
            <Card.Body>
              <Card.Title>AuraSound VintagePlayer-Wood Texture</Card.Title>
              <Card.Text className='text-danger'>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              </Card.Text>
              <Card.Title>
                <del>$300</del> &nbsp;<span className='text-danger'>$200</span>
              </Card.Title>
              <Button variant="warning">Add Cart</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col className='col-sm-3 text-center p-3'>
          <Card>
            <Card.Img variant="top" src="img/new2.jpg" />
            <Card.Body>
              <Card.Title>AuraSound VintagePlayer-Wood Texture</Card.Title>
              <Card.Text className='text-danger'>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              </Card.Text>
              <Card.Title>
                <del>$300</del> &nbsp;<span className='text-danger'>$200</span>
              </Card.Title>
              <Button variant="warning">Add Cart</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col className='col-sm-3 text-center p-3'>
          <Card>
            <Card.Img variant="top" src="img/new3.jpg" />
            <Card.Body>
              <Card.Title>AuraSound VintagePlayer-Wood Texture</Card.Title>
              <Card.Text className='text-danger'>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              </Card.Text>
              <Card.Title>
                <del>$300</del> &nbsp;<span className='text-danger'>$200</span>
              </Card.Title>
              <Button variant="warning">Add Cart</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col className='col-sm-3 text-center p-3'>
          <Card>
            <Card.Img variant="top" src="img/sp1.jpg" />
            <Card.Body>
              <Card.Title>AuraSound VintagePlayer-Wood Texture</Card.Title>
              <Card.Text className='text-danger'>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              </Card.Text>
              <Card.Title>
                <del>$300</del> &nbsp;<span className='text-danger'>$200</span>
              </Card.Title>
              <Button variant="warning">Add Cart</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default NewArival
