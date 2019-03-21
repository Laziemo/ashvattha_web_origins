/*
Gita.Network: ashvattha_web

componenet: MainSpace
developed by lm(•̪●)==ε/̵͇̿​̿/’̿’̿ ̿ ̿̿ `(•.°)~
*/
// ------------------ ┌∩┐(◣_◢)┌∩┐ ------------------
import React, {Component} from 'react';


import Jumbo from "./Jumbo";
import About from "./About";
import Courses from "./Courses";
import Gallery from "./Gallery";
import Contact from "./Contact";

import HOME_JUMBO from "../data/homeJumbo"

import "../basics.css";



console.log(`Jumbo Data coming from MainSpace: ${HOME_JUMBO.title}`);
// ------------------ ┌∩┐(◣_◢)┌∩┐ ------------------
class MainSpace extends Component{

// ------------------ '(◣_◢)' ------------------
  render(){
    return(
      <div className="cream-back ">
        <Jumbo data={HOME_JUMBO} />
        <About />
        <Courses />
        <Gallery />
        <Contact />
      </div>
    );
  }
// ------------------ '(◣_◢)' ------------------
}
// ------------------° ̿ ̿'''\̵͇̿̿\з=(◕_◕)=ε/̵͇̿̿/'̿'̿ ̿ °------------------

// ------------------° ̿ ̿'''\̵͇̿̿\з=(◕_◕)=ε/̵͇̿̿/'̿'̿ ̿ °------------------
export default MainSpace;
//    ‛¯¯٭٭¯¯(▫▫)¯¯٭٭¯¯’      FIN     ‛¯¯٭٭¯¯(▫▫)¯¯٭٭¯¯’
