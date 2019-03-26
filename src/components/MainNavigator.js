/*
Gita.Network: ashvattha_web

componenet: MainNavigator
developed by lm(•̪●)==ε/̵͇̿​̿/’̿’̿ ̿ ̿̿ `(•.°)~

*/
// ------------------ ┌∩┐(◣_◢)┌∩┐ ------------------
import React, { Component }  from 'react';
import {NavLink as RRNavLink} from 'react-router-dom';
import { Link, animateScroll as scroll } from "react-scroll";
import logo from '../assets/logo.png';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
   

import "../basics.css";
// ------------------ ┌∩┐(◣_◢)┌∩┐ ------------------
class MainNavigator extends Component{
  constructor(props) {
  super(props);

  this.toggle = this.toggle.bind(this);
  this.state = {
    isOpen: true
  };
}
toggle() {
  this.setState({
    isOpen: !this.state.isOpen
  });
}
scrollToTop = () => {
  scroll.scrollToTop();
};

// ------------------ '(◣_◢)' ------------------
render() {
  return (
        <div className="container">
        <Navbar color="dark" light fixed="top" expand="md">
          
          <div className="col-sm-2 col-md-3 col-lg-2">

          <NavbarBrand tag={RRNavLink} 
          exact to="/" 
          >
          <img
            className='logo'
            width="287"
            height="100"
            src={logo}
            onClick={()=>this.scrollToTop()}
            className="d-inline-block align-top "
            alt="Logo" />
          </NavbarBrand>
          </div>
          
          <div className="col-sm-2 col-md-3 col-lg-4 cream-font">
          </div>

          <div className="col-sm-2 col-md-6 col-lg-6 cream-font" 
          style={{fontSize: "21px", padding:"20px"}}>
          <div className="row ">
          <NavbarToggler onClick={this.toggle} 
          className="col-md-2"/>

          <Collapse isOpen={!this.state.isOpen} navbar>
          <div className="col-md-3 menu-text">
            <NavItem>
            <Link
                activeClass="active"
                to="who"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
            >
            About
            </Link>
            </NavItem>
            </div>

            <div className="col-md-3 menu-text">
            <NavItem>
            <Link
                activeClass="active"
                to="what"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
            >
            Training
            </Link>
            </NavItem>
            </div>

            <div className="col-md-3 menu-text">
            <NavItem>
            <Link
                activeClass="active"
                to="why"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
            >
            Gallery
            </Link>
            </NavItem>
            </div>
            <div className="col-md-3 menu-text">

            <NavItem>
            <Link
                activeClass="active"
                to="where"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
            >
            Contact
            </Link>
            </NavItem>
            </div>
          
          </Collapse>
          </div>
          </div>

        </Navbar>
        </div>
      
      

  );
}
// ------------------ '(◣_◢)' ------------------

}
// ------------------° ̿ ̿'''\̵͇̿̿\з=(◕_◕)=ε/̵͇̿̿/'̿'̿ ̿ °------------------

// ------------------° ̿ ̿'''\̵͇̿̿\з=(◕_◕)=ε/̵͇̿̿/'̿'̿ ̿ °------------------
export default MainNavigator;
//    ‛¯¯٭٭¯¯(▫▫)¯¯٭٭¯¯’      FIN     ‛¯¯٭٭¯¯(▫▫)¯¯٭٭¯¯’
