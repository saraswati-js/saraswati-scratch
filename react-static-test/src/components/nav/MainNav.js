import React from 'react'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Nav from 'react-bootstrap/Nav'
import { Link } from 'components/Router'

const handleSelect = (eventKey) => console.log(`selected ${eventKey}`);

export default () => (
  <div className="mainnav collapse navbar-collapse">
    <Nav variant="pills" activeKey="1" onSelect={handleSelect}>
      <Nav.Item><Link className="nav-link" to={'/'}>Home</Link></Nav.Item>
      <Nav.Item><Link className="nav-link" to={'/support'}>Support</Link></Nav.Item>
      <Nav.Item><Link className="nav-link" to={'/docs'}>Docs</Link></Nav.Item>
      <Nav.Item><Link className="nav-link" to={'/blog'}>Blog</Link></Nav.Item>

      <NavDropdown title="Dropdown" id="nav-dropdown">
        <NavDropdown.Item eventKey="4.1"><Link to={'/about'}>About</Link></NavDropdown.Item>
        <NavDropdown.Item eventKey="4.2"><Link to={'/about'}>About Us</Link></NavDropdown.Item>
        <NavDropdown.Item eventKey="4.3"><Link to={'/change-log'}>Change Log</Link></NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item eventKey="4.4"><Link to={'/faq'}>F.A.Q</Link></NavDropdown.Item>
        <NavDropdown.Item eventKey="4.5"><Link to={'/contact'}>Contact</Link></NavDropdown.Item>
        <NavDropdown.Item eventKey="4.6"><Link to={'/blog'}>Blog</Link></NavDropdown.Item>
        <NavDropdown.Item eventKey="4.7"><Link to={'/help'}>Help/Support</Link></NavDropdown.Item>
        <NavDropdown.Item eventKey="4.8"><Link to={'/account'}>Login?/register</Link></NavDropdown.Item>
        <NavDropdown.Item eventKey="4.9"><Link to={'/404'}>404 Error Page</Link></NavDropdown.Item>
      </NavDropdown>
    </Nav>
  </div>
)