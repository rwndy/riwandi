import React, {Fragment} from 'react'
import { NavigationBar } from '../components/Navbar'
import { LayoutAbout } from '../layout'
import { Col } from 'reactstrap'
import '../css/about.css'

const About = () => {
  return(
    <Fragment>
      <NavigationBar />
      <LayoutAbout>
        <Col lg="4">
          <div className="about-ava--wrapper">
            <img src="../assets/IMG_4681.jpg" alt="avatar" className="about-ava"/>
          </div>
        </Col>
        <Col lg="8">
          <div className="about-bio--wrap">
            <h1 className="about-bio--name">Riwandi</h1>
            <p className="about-bio--info">Lahir di Indramayu dan memiliki hobi membaca. Apapun Saya baca. Mulai dari plank jalanan, Iklan Obat Kuat, dan gerak-gerik perekonomian negara</p>
          </div>
        </Col>
      </LayoutAbout>
    </Fragment>
  )
}

export default About