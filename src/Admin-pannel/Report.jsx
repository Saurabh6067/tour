import React, { Component } from 'react'
import { Container, Row, Col, Navbar, Nav, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';



export default class Report extends Component {
  render() {
    return (
        <div>
      
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">Dashboard</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#analytics">Analytics</Nav.Link>
            <Nav.Link href="#settings">Settings</Nav.Link>
          </Nav>
        </Navbar>
        <Container fluid>
          <Row>
            <Col sm={3} className="bg-danger">
              <Nav className="flex-column" style={{height:"600px"}}>
             <Link style={{textDecoration:"none"}} to='/dash'><Nav.Link className='text-dark'  href="#reports">Dashbord</Nav.Link></Link> 
             <Link style={{textDecoration:"none"}} to='/report'><Nav.Link className='text-dark'  href="#reports">Reports</Nav.Link></Link> 
                <Nav.Link className='text-dark' href="#users">Users</Nav.Link>
              </Nav>
            </Col>
            <Col sm={4} className="mt-3">
              <h2>Reports</h2>
              <Card>
                <Card.Body>
                  <p>Welcome to your dashboard!</p>
                </Card.Body>
              </Card>
              <Card className='mt-3'>
                <Card.Body>
                  <p>Welcome to your dashboard!</p>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={4} className="mt-3">
              <Card className='mt-5'>
                <Card.Body>
                  <p>Welcome to your dashboard!</p>
                </Card.Body>
              </Card>
              <Card className='mt-3'>
                <Card.Body>
                  <p>Welcome to your dashboard!</p>
                </Card.Body>
              </Card>
            </Col>
            
          </Row>
        </Container>
      </div>
    )
  }
}
