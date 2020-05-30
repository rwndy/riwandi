import React from 'react'
import { Container } from 'reactstrap' 

const LayoutHome = ({children}) => {
  return(
    <main className="main-home">
      <Container>
        {children}
      </Container>
    </main>
  )
}

export default LayoutHome