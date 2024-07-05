import { FC } from 'react';
import './navTabs.css'
import { Nav } from "react-bootstrap";
import { useLocation } from "react-router-dom";

interface NavTabsProps {
  links: LinkAttrs[];
}

type LinkAttrs = {
  label: string;
  href: string;
};

export const NavTabs: FC<NavTabsProps> = ({ links }) => {
  let location = useLocation();
  
  return (
    <Nav 
      data-bs-theme="dark" 
      variant="tabs" 
      defaultActiveKey="/home"
      className="nav-tabs"
    >
      {links.map((link, index) => (
        <Nav.Item key={index}>
          <Nav.Link 
            href={link.href}
            active={
              index === 0 ? 
              ( location.pathname === link.href || location.pathname === '/' ) : 
              ( location.pathname === link.href )
            }
          >
            {link.label}
          </Nav.Link>
        </Nav.Item>
      ))}
    </Nav>
  );
};