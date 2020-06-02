import React from 'react'
import { Container } from 'reactstrap'

const LayoutBooks = ({children}) => {
  return(
    <section className="main-section">
      <Container>
        {children}
      </Container>
    </section>
  )
}

export default LayoutBooks