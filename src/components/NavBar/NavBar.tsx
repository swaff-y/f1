import './navBar.css'
import { Container, Nav, Navbar } from "react-bootstrap"

export const NavBar = ({ selected = 'home' }: { selected: string}) => {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Navbar.Brand href="/" className="nav-brand">Open F1 viewer</Navbar.Brand>
      <div className='nav-links'>
        <Nav className="me-auto">
          <Nav.Link href="/" active={selected === 'home'}>Home</Nav.Link>
        </Nav>
        <Nav className="me-auto">
          <Nav.Link href="/analysis" active={selected === 'home'}>Analysis</Nav.Link>
        </Nav>
      </div>
    </Navbar>
  )
}