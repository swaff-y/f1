import './home.css'
import { Container } from "react-bootstrap";
import { NavBar } from "../../components/NavBar/NavBar";
import { useLocation } from 'react-router-dom';
import { Meetings } from '../../components/Meetings/Meetings';
import { Sessions } from '../../components/Sessions/Sessions';
import { Drivers } from '../../components/Drivers/Drivers';
import { NavTabs } from '../../components/NavTabs/NavTabs';
import { FC } from 'react';

const NAV_LINKS = [
  { 
    label: 'Races',
    href: '/home/meetings'
  },
  { 
    label: 'Sessions',
    href: '/home/sessions'
  },
  { 
    label: 'Drivers',
    href: '/home/drivers'
  }
];

interface HomeProps {
  children: React.ReactNode;
}


export const Home: FC<HomeProps> = ({ children }) => {  
  return (
    <Container fluid className="home-container">
      <NavBar selected='home'/>
      <NavTabs links={NAV_LINKS}/>

      <Container fluid className="home-content">
        {children}
      </Container>
    </Container>
  );
};