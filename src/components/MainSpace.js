/*
Gita.Network: ashvattha_web

componenet: MainSpace
developed by lm(•̪●)==ε/̵͇̿​̿/’̿’̿ ̿ ̿̿ `(•.°)~
*/
// ------------------ ┌∩┐(◣_◢)┌∩┐ ------------------
import React, {Component} from 'react';


import Jumbo from "./Jumbo";
import Who from "./Who";
import What from "./What";
import Why from "./Why";
import Where from "./Where";

import HOME_JUMBO from "../data/homeJumbo"

import "../basics.css";



console.log(`Jumbo Data coming from MainSpace: ${HOME_JUMBO.title}`);
// ------------------ ┌∩┐(◣_◢)┌∩┐ ------------------
class MainSpace extends Component{

// ------------------ '(◣_◢)' ------------------
  render(){
    return(
      <div className="white-back ">
        <Jumbo data={HOME_JUMBO} />
        <Who />
        <What />
        <Why />
        <Where />
      </div>
    );
  }
// ------------------ '(◣_◢)' ------------------
}
// ------------------° ̿ ̿'''\̵͇̿̿\з=(◕_◕)=ε/̵͇̿̿/'̿'̿ ̿ °------------------

// ------------------° ̿ ̿'''\̵͇̿̿\з=(◕_◕)=ε/̵͇̿̿/'̿'̿ ̿ °------------------
export default MainSpace;
//    ‛¯¯٭٭¯¯(▫▫)¯¯٭٭¯¯’      FIN     ‛¯¯٭٭¯¯(▫▫)¯¯٭٭¯¯’
