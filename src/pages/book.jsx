import React, { Fragment } from 'react'
import { LayoutBooks } from '../layout'
import { NavigationBar  } from '../components/Navbar'
import '../css/books.css'

const Books = () =>  {
  return(
    <Fragment>
      <NavigationBar />
      <LayoutBooks>
        <h1 className="section-books--title">Coming Soon!</h1>
      </LayoutBooks>
    </Fragment>
  )
}

export default Books