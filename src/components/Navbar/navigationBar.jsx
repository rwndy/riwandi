import React, { useState } from 'react'
import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  NavbarBrand
} from 'reactstrap'

import '../../css/navbar.css'


const NavigationBar = () => {

  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  return(
    <Navbar color="transparent" dark expand="md" className="nav-toggler__white">
      <Container>
        <NavbarBrand href="/">Home</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
          <NavItem>
              <NavLink className="nav-text__white" href="/about">About</NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="nav-text__white" href="/books">Books</NavLink>
          </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  )
}

export default NavigationBar