import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import './index.css';

const Footer = () => {
  return(
    <div className="footer">
      <Container>
        <Row>
          <Col>
            <p>&copy; copyright <strong>Riwandi</strong> 2020</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;