import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './Admin.css';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === 'saurabh' && password === '12345') {
      Swal.fire({
        title: 'Login Successful!',
        text: 'You have successfully logged in.',
        icon: 'success',
      });
      navigate('/dash');
    } else {
      Swal.fire({
        title: 'Login Failed',
        text: 'Invalid email or password.',
        icon: 'error',
      });
    }
  };

  return (
    <Container className="admin-login">
      <Row className="justify-content-center">
        <Col md={6}>
          <h2 className="text-center">Admin Login</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="email">
              <Form.Label>User-Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Username"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit" block>
              Login
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default AdminLogin;
