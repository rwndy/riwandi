import React from 'react'
import { Container, Row } from 'reactstrap'

const LayoutAbout = ({children}) => {
  return(
    <section className="section-about">
      <Container className="section-w">
        <Row>
          {children}
        </Row>
      </Container>

    </section>
  )
}

export default LayoutAbout