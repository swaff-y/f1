import './home.css'
import { Container, Nav } from "react-bootstrap";
import { NavBar } from "../../components/NavBar/NavBar";
import { useLocation } from 'react-router-dom';
import { Meetings } from '../../components/Meetings/Meetings';
import { Sessions } from '../../components/Sessions/Sessions';
import { Drivers } from '../../components/Drivers/Drivers';


export const Home = () => {
  let location = useLocation();
  
  return (
    <Container fluid className="home-container">
      <NavBar selected='home'/>
        <Nav data-bs-theme="dark" variant="tabs" defaultActiveKey="/home">
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
      <Container fluid className="home-content">
        { (location.pathname === '/home/meetings' || location.pathname === '/') && (
          <Meetings />
        )}
        { location.pathname === '/home/sessions' && (
          <Sessions />
        )}
        { location.pathname === '/home/drivers' && (
          <Drivers />
        )}
      </Container>
    </Container>
  );
};