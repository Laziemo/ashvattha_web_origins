/*
Gita.Network: ashvattha_web

componenet: MainNavigator
developed by lm(•̪●)==ε/̵͇̿​̿/’̿’̿ ̿ ̿̿ `(•.°)~

*/
// ------------------ ┌∩┐(◣_◢)┌∩┐ ------------------
import React, { Component }  from 'react';
import {NavLink as RRNavLink} from 'react-router-dom';
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
// ------------------ '(◣_◢)' ------------------
render() {
  return (
    <div className="cream-back">
 

      <Navbar color="transparent" light fluid justify expand="md">
      <NavbarBrand href="#home">
      <img
        src="http://www.clker.com/cliparts/0/5/7/9/13419482801086160092Green%20Leaf.svg.hi.png"
        width="50"
        height="50"
        className="d-inline-block align-top"
        alt="Logo"
      />
    </NavbarBrand>
        <NavbarBrand className="" tag={RRNavLink} exact to="/" style={{color:"#ffb833", fontSize:"42px", marginLeft: "0px"}}>Ashvattha</NavbarBrand>
        <NavbarToggler light onClick={this.toggle} />
        <Collapse isOpen={!this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink tag={RRNavLink} exact to="/team" style={{color:"#333333",fontSize:"17px", paddingRight: "72px"}} activeStyle={{backgroundColor: '#2e2f31', textDecoration: 'none', outline:"none"}}>Team</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={RRNavLink} exact to="/events" style={{color:"#333333", fontSize:"17px", paddingRight: "72px"}} activeStyle={{backgroundColor: '#2e2f31', textDecoration: 'none',outline:"none"}}>Events</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={RRNavLink} exact to="/moments" style={{color:"#333333",fontSize:"17px", paddingRight: "72px"}} activeStyle={{backgroundColor: '#2e2f31', textDecoration: 'none', outline:"none"}}>Moments</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={RRNavLink} exact to="/contact" style={{color:"#333333",fontSize:"17px", paddingRight: "72px"}} activeStyle={{backgroundColor: '#2e2f31', textDecoration: 'none', outline:"none"}}>Contact</NavLink>
              </NavItem>
            </Nav>
        </Collapse>
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
