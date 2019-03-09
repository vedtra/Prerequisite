import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import './App.css';
import Header from './components/header/header';
import Pages from './components/pages/pages';
import Content from './components/pages/content';
import Recomendation from './components/pages/recomendation';
class App extends Component {
  render() {
    return (
      <div>
       <Header />
       <Container>
       <Row>
      <Col xs="3"><Pages />
        </Col>
        <Col xs="6"><Content /></Col>
          <Col xs="3">
          <Recomendation />
          </Col>
        </Row>
        </Container>
        
      </div>
    );
  }
}

export default App;
