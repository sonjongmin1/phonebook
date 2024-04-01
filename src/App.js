import React from 'react';
import './App.css';
import { Container, Row, Col } from 'react-bootstrap'; // Row와 Col 추가
import ContactForm from './component/ContactForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import ContactList from './component/ContactList';

const App = () => {
  return (
    <div>
      <h1 className='title'>연락처</h1>
      <Container>
        <Row>
          <Col>
            <ContactForm />
          </Col>
          <Col>
            <ContactList />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default App;
