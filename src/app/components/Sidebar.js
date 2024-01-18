'use client';

import Image from 'next/image';
import Logo from './Logo';
import { Accordion, Nav, NavLink, useAccordionButton } from 'react-bootstrap';

function UserToggle({ children, eventKey }) {
  const decoratedOnClick = useAccordionButton(eventKey);

  return (
    <a className="collapsed" onClick={decoratedOnClick}>
      {children}
    </a>
  );
}

export default function Sidebar({ routes = [], activeRoute = '/dashboard' }) {
  return (
    <div className="sidebar" data-color="rose" data-background-color="black">
      <Logo />
      <div className="user">
        <div className="photo">
          <Image
            src="/images/faces/avatar.jpg"
            width={100}
            height={100}
            alt="photo"
          />
        </div>
        <Accordion className="info">
          <UserToggle eventKey="0">
            <span>
              Tania Andrew
              <b className="caret"></b>
            </span>
          </UserToggle>
          <div className="clearfix"></div>
          <Accordion.Collapse eventKey="0">
            <ul className="nav">
              <li>
                <a href="#">
                  <span className="sidebar-mini"> MP </span>
                  <span className="sidebar-normal"> My Profile </span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="sidebar-mini"> EP </span>
                  <span className="sidebar-normal"> Edit Profile </span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="sidebar-mini"> S </span>
                  <span className="sidebar-normal"> Settings </span>
                </a>
              </li>
            </ul>
          </Accordion.Collapse>
        </Accordion>
      </div>

      <Nav>
        {routes.map((route, key) => {
          return (
            <li className={activeRoute === route.url ? 'active' : ''} key={key}>
              <NavLink
                href={route.url}
                to={route.url}
                active={activeRoute === route.url}
                className="nav-link"
                activeClassName="active"
              >
                <i className="material-icons">{route.icon}</i>
                <p>{route.name}</p>
              </NavLink>
            </li>
          );
        })}
      </Nav>
      <div
        className="sidebar-background"
        style={{ backgroundImage: 'url(/images/sidebar-1.jpg)' }}
      ></div>
    </div>
  );
}
