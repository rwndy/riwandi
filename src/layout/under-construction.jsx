import React, { Fragment } from 'react'
import { Container } from 'reactstrap'
import './layout.css'

const Construction = ({children}) => {
  return(
    <Fragment>
      <main className="main-bg">
        <Container className="w-75">
          {children}
        </Container>
      </main>
    </Fragment>
  )
}

export default Construction