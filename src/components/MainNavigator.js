/*
Gita.Network: ashvattha_web

componenet: MainNavigator
developed by lm(•̪●)==ε/̵͇̿​̿/’̿’̿ ̿ ̿̿ `(•.°)~

*/
// ------------------ ┌∩┐(◣_◢)┌∩┐ ------------------
import React, { Component }  from 'react';
import {NavLink as RRNavLink} from 'react-router-dom';
import { Link, animateScroll as scroll } from "react-scroll";

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
    <div className="container-fluid  cream-back">
    
      <div className = "container-fluid cream-back ">
        <Navbar color="faded" light fixed="top" expand="md">
          <div className="col" style={{minWidth:"420px"}}>

          <NavbarBrand tag={RRNavLink} 
          exact to="/" 
          style={{color:"#f7f7f2", fontSize:"42px"}}>
          <img
            src="http://www.clker.com/cliparts/0/5/7/9/13419482801086160092Green%20Leaf.svg.hi.png"
            width="50"
            height="50"
            onClick={()=>this.scrollToTop()}
            className="d-inline-block align-top"
            alt="Logo" />
          </NavbarBrand>
          <NavbarBrand className="brand" 
            exact to="/" 
            style={{color:"#ffb833", fontSize:"49px", outline:"none", textAlign:"center"}}
            >Ashvattha
          </NavbarBrand>

          </div>
          <div className="col" style={{}}>

          <NavbarToggler onClick={this.toggle} className="mr-2" style={{marginRight: "10px"}}/>

          <Collapse isOpen={!this.state.isOpen} navbar>
          <div className="row " style={{padding: "20px", position: "absolute", right: '0'}}>
            <div className="col "  style={{marginLeft: "55px"}}>
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
            <div className="col" style={{marginLeft: "55px"}}>
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
            <div className="col" style={{marginLeft: "55px"}}>
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
            <div className="col" style={{marginLeft: "55px"}}>
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
          </div>  
          </Collapse>
          </div>

        </Navbar>
      
      </div>

    </div>

  );
}
// ------------------ '(◣_◢)' ------------------

}
// ------------------° ̿ ̿'''\̵͇̿̿\з=(◕_◕)=ε/̵͇̿̿/'̿'̿ ̿ °------------------

// ------------------° ̿ ̿'''\̵͇̿̿\з=(◕_◕)=ε/̵͇̿̿/'̿'̿ ̿ °------------------
export default MainNavigator;
//    ‛¯¯٭٭¯¯(▫▫)¯¯٭٭¯¯’      FIN     ‛¯¯٭٭¯¯(▫▫)¯¯٭٭¯¯’
