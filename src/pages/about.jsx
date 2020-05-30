import React, {Fragment} from 'react'
import { NavigationBar } from '../components/Navbar'
import '../css/about.css'

const About = () => {
  return(
    <Fragment>
      <NavigationBar />
      <section>
        <h1 className="about-title__white">About</h1>
      </section>
    </Fragment>
  )
}

export default About