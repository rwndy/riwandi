import React from 'react'
import { NavigationBar } from '../components/Navbar'
import { LayoutHome  } from '../layout'
import '../css/home.css'

const Home = () => {
  return(
      <header>
        <NavigationBar />
        <LayoutHome>
          <h1 className="home-title__white">Riwandi</h1>
          <span><p className="home-sub__white">(Front End Developer and Always Love You)</p></span>
        </LayoutHome>
      </header>
  )
}

export default Home