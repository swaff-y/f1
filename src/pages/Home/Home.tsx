import './home.css'
import { Container, Nav } from "react-bootstrap";
import { NavBar } from "../../components/NavBar/NavBar";
import { useLocation } from 'react-router-dom';
import { Meetings } from '../../components/Meetings/Meetings';
import { Sessions } from '../../components/Sessions/Sessions';
import { Drivers } from '../../components/Drivers/Drivers';
import { NavTabs } from '../../components/NavTabs/NavTabs';

const NAV_LINKS = [
  { 
    label: 'Races',
    href: '/home/meetings',
    component: <Meetings />
  },
  { 
    label: 'Sessions',
    href: '/home/sessions',
    component: <Sessions />
  },
  { 
    label: 'Drivers',
    href: '/home/drivers',
    component: <Drivers />
  }
];


export const Home = () => {
  let location = useLocation();
  
  return (
    <Container fluid className="home-container">
      <NavBar selected='home'/>
      <NavTabs links={NAV_LINKS}/>

      <Container fluid className="home-content">
        { NAV_LINKS.map((link, index) => (
            ( index === 0 && location.pathname === '/') &&
              (<div key={index}>
                {link.component}
              </div>) ||
            ( location.pathname === link.href) &&
              (<div key={index}>
                {link.component}
              </div>)
            )
        )}
      </Container>
    </Container>
  );
};