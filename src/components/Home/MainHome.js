import React from 'react';
import {Container, Row, Col} from 'reactstrap';

const MainHome = () => {
  return(
    <div className="main-bg">
      <Container>
        <Row>
          <Col md="6">
            <div className="title-home">
              <h3>My name is Riwandi</h3>
              <h1>Welcome to <span>my website</span></h1>
            </div>
          </Col>
          <Col md="6">
            <div className="header-img">
              <img src="/assets/me-1.png" alt="foto riwandi"/>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default MainHome;