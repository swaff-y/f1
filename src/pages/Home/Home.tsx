import './home.css'
import { Container, Nav } from "react-bootstrap";
import { NavBar } from "../../components/NavBar/NavBar";
import { useLocation } from 'react-router-dom';
import { Meetings } from '../../components/Meetings/Meetings';
import { Sessions } from '../../components/Sessions/Sessions';
import { Drivers } from '../../components/Drivers/Drivers';
import { NavTabs } from '../../components/NavTabs/NavTabs';


export const Home = () => {
  let location = useLocation();
  
  return (
    <Container fluid className="home-container">
      <NavBar selected='home'/>
      <NavTabs />

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