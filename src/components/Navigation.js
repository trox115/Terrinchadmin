import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SideNav, {
  Toggle,
  Nav,
  NavItem,
  NavIcon,
  NavText,
} from '@trendmicro/react-sidenav';
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

const NavBar = ({ ...props }) => {
  return (
  
    <SideNav
      onSelect={selected => {
        
      }}
    >

      <SideNav.Toggle />
      <SideNav.Nav defaultSelected="home">
        <NavItem eventKey="home">
          <NavIcon>
            <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
          </NavIcon>
          <NavText>Home</NavText>
        </NavItem>
        <NavItem eventKey="charts">
          <NavIcon>
          <i className="fa fa-fw fa-user" style={{ fontSize: '1.75em' }} />
          </NavIcon>
          <NavText>Clientes</NavText>
          <NavItem eventKey="charts/linechart">
            <NavText>Ver Clientes</NavText>
          </NavItem>
          <NavItem eventKey="charts/barchart">
            <NavText>Inserir Clientes</NavText>
          </NavItem>
        </NavItem>
        <NavItem eventKey="Produtos">
          <NavIcon>
          <i className="fa fa-fw fa-shopping-cart" style={{ fontSize: '1.75em' }} />
          </NavIcon>
          <NavText>Produtos</NavText>
          <NavItem eventKey="charts/linechart">
            <NavText>Ver Produtos</NavText>
          </NavItem>
          <NavItem eventKey="charts/barchart">
            <NavText>Inserir Produtos</NavText>
          </NavItem>
          <NavItem eventKey="charts/barchart">
            <NavText>Ver Encomendas</NavText>
          </NavItem>
        </NavItem>

      </SideNav.Nav>
    </SideNav>
  
  );
};

export default NavBar;
