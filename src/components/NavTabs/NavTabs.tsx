import './navTabs.css'
import { Nav } from "react-bootstrap";
import { useLocation } from "react-router-dom";

export const NavTabs = () => {
  let location = useLocation();
  
  return (
    <Nav 
      data-bs-theme="dark" 
      variant="tabs" 
      defaultActiveKey="/home"
      className="nav-tabs"
    >
      <Nav.Item>
        <Nav.Link href='/home/meetings' active={
          location.pathname === '/home/meetings' || location.pathname === '/'
        }>Races</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href='/home/sessions' active={
          location.pathname === '/home/sessions'
        }>Sessions</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href='/home/drivers' active={
          location.pathname === '/home/drivers'
        }>Drivers</Nav.Link>
      </Nav.Item>
    </Nav>
  );
};