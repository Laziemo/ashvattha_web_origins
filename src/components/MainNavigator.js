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
    <div className="container-fluid cream-back" >
    
      <Navbar color="faded" light expand="md">
        
        <NavbarBrand tag={RRNavLink} exact to="/" style={{color:"#f7f7f2", fontSize:"35px"}}>
        <img
          src="http://www.clker.com/cliparts/0/5/7/9/13419482801086160092Green%20Leaf.svg.hi.png"
          width="50"
          height="50"
          className="d-inline-block align-top"
          alt="Logo" />
        </NavbarBrand>
        <NavbarBrand className="brand" 
          exact to="/" 
          style={{color:"#ffb833", fontSize:"42px", outline:"none", textAlign:"center"}}
          >Ashvattha
        </NavbarBrand>
        
        <NavbarToggler onClick={this.toggle} className="mr-2" />

        <Collapse isOpen={!this.state.isOpen} navbar>
        <Nav className="outline"
         navbar
         style={{marginLeft: "70%"}}
         >
          <NavItem >
            <NavLink 
              tag={RRNavLink} 
              exact to="/" 
              style={{color:"#333333",fontSize:"17px"}} 
              activeStyle={{ color: "#ffb833", outline:"none"}}
            >Home
            </NavLink>   
          </NavItem>
          <NavItem >
            <NavLink 
              tag={RRNavLink} 
              exact to="/gallery" 
              style={{color:"#333333",fontSize:"17px"}} 
              activeStyle={{ color: "#ffb833", outline:"none"}}
            >Gallery
            </NavLink>   
          </NavItem> 
          <NavItem >
            <NavLink 
              tag={RRNavLink} 
              exact to="/contact" 
              style={{color:"#333333",fontSize:"17px"}} 
              activeStyle={{ color: "#ffb833", outline:"none"}}
            >Contact
            </NavLink>   
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
