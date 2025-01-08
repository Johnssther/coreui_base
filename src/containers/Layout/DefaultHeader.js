import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { UncontrolledDropdown, DropdownItem, DropdownMenu, DropdownToggle, Nav, NavItem } from 'reactstrap';
import PropTypes from 'prop-types';
import Dialog from './modals'

import { AppAsideToggler, AppNavbarBrand, AppSidebarToggler } from '@coreui/react';
import logo from '../../assets/img/brand/logo.svg'
import sygnet from '../../assets/img/brand/sygnet.svg'

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

class DefaultHeader extends Component {
  constructor(props) {
    super(props)
    this.state = {
      usuario: JSON.parse(localStorage.getItem('auth')),
      usuario_nombre: '',
      color:'white',
    }

  }
  componentDidMount() {
    this.setState({
      usuario_nombre: localStorage.getItem('auth') === null ? '' : JSON.parse(localStorage.getItem('auth')).name
    })
  }
  render() {

    // eslint-disable-next-line
    const { children, ...attributes } = this.props;
    return (
      <React.Fragment>
        <AppSidebarToggler className="d-lg-none" display="md" mobile />
        {/* <AppNavbarBrand
          full={{ src: logo, width: 89, height: 25, alt: 'Gastos' }}
          minimized={{ src: sygnet, width: 30, height: 30, alt: 'Gastos' }}
        /> */}
        <p
  style={{
    fontFamily: 'Arial, sans-serif',
    fontSize: '1.5rem',
    color: '#4CAF50',
    background: 'linear-gradient(90deg, white, white)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    margin: '10px',
    paading: '2px',
    borderRadius: '2px',
    display: 'inline-block',
    cursor: 'pointer',
    transition: 'transform 0.2s',
  }}
  onMouseOver={(e) => (e.target.style.transform = 'scale(1.1)')}
  onMouseOut={(e) => (e.target.style.transform = 'scale(1)')}
>
  Savvi
</p>

        <AppSidebarToggler className="d-md-down-none" display="lg" />

        <Nav className="d-md-down-none" navbar>
          <NavItem className="px-3">
            <NavLink to="/dashboard" className="nav-link" style={{ color: this.state.color }} >Dashboard</NavLink>
          </NavItem>
          <NavItem className="px-3">
            <NavLink to="/expenses/moduls/personalexpenses/create" className="nav-link" style={{ color: this.state.color }}>Register Expenses</NavLink>
          </NavItem>
        </Nav>
        <Nav className="ml-auto" navbar>
          <NavItem className="px-3">
            <strong style={{ color: this.state.color }}>{this.state.usuario_nombre}</strong>
          </NavItem>
          <NavItem className="px-3">
            <AppAsideToggler className="d-md-down-none" style={{ background: 'white' }} mobile/>
          </NavItem>
        </Nav>
        
        <AppAsideToggler className="d-lg-none" mobile />
      </React.Fragment>
    );
  }
}

DefaultHeader.propTypes = propTypes;
DefaultHeader.defaultProps = defaultProps;

export default DefaultHeader;
