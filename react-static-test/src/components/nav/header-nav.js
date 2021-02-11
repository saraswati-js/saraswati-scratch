/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'

import { Link } from 'components/Router'

const imgUrl = 'https://www.isenberg.umass.edu/sites/default/files/styles/large/public/fake-logo-01.png'

export default () => (
  <nav>
    <Navbar bg="light" expand="lg">
      <a className="navbar-brand" href="index.html"><img src={imgUrl} /></a>
      <Navbar.Brand href="#home">Product Docs</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link className="nav-link" to="/">Home</Link>
          <Link className="nav-link" to="/#">Support</Link>
          <Link className="nav-link" to="/#">Docs</Link>
          <Link className="nav-link" to="/blog">Blog</Link>

          {/* <Nav.Link href="#link">Link</Nav.Link> */}
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </nav>
)
