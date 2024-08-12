import './home.css'
import { Container } from "react-bootstrap";
import { NavBar } from "../../components/NavBar/NavBar";
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