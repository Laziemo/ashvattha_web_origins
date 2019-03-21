/*
Gita.Network: ashvattha_web

componenet: Courses
developed by lm(•̪●)==ε/̵͇̿​̿/’̿’̿ ̿ ̿̿ `(•.°)~
*/
// ------------------ ┌∩┐(◣_◢)┌∩┐ ------------------
import React, {Component} from 'react';

import YOUTH from '../assets/03/youth.png';
import CORPORATE from '../assets/03/corporate.png';
import LEAVES_BACK from '../assets/03/leaves_back.png';

import "../basics.css";

// ------------------ ┌∩┐(◣_◢)┌∩┐ ------------------
class Courses extends Component{

// ------------------ '(◣_◢)' ------------------
  render(){
    return(
      <div className="container-fluid ">
      <br />

        <div className="row  text_center">
            <div className="col col_centered">
            <h2 className="text_center blue-font"> What? </h2>
            </div>
        </div>
        <img className="leaves_back_pos_1" src={LEAVES_BACK}></img>

        <div className="row ">
            <div className="col" style={{textAlign: "center"}}>
                <br />
                <img src={YOUTH} style={{display: "block", margin:"auto"}} alt="youth"></img>
                <br />
                <br />
                <h3 className="yellow-font" style={{textAlign: "center"}}> Youth </h3>
                <br />
                <div className="container" style={{width:"340px"}}>
                <p>Our interactive coaching style builds onfidence in kids via peer interaction. Alongside this we build strong fundamentals through classic Trinity certified training methods.</p>
                <br />
                </div>
            </div>
            <div className="col" style={{textAlign: "center"}} >
                <br />
                <img src={CORPORATE} style={{display: "block", margin:"auto"}} alt="corporate"></img>
                <br />
                <br />
                <h3 className="yellow-font"> Corporate </h3>
                <br />
                <div className="container" style={{width:"340px"}}>
                <p >Training working professionals in enterprise communication and etiquette.</p>
                </div>
                <br />
            </div>
        
            <hr />
        </div>
        <br />
        <br />
  

      </div>
    );
  }
// ------------------ '(◣_◢)' ------------------

}
// ------------------° ̿ ̿'''\̵͇̿̿\з=(◕_◕)=ε/̵͇̿̿/'̿'̿ ̿ °------------------

// ------------------° ̿ ̿'''\̵͇̿̿\з=(◕_◕)=ε/̵͇̿̿/'̿'̿ ̿ °------------------
export default Courses;
//    ‛¯¯٭٭¯¯(▫▫)¯¯٭٭¯¯’      FIN     ‛¯¯٭٭¯¯(▫▫)¯¯٭٭¯¯’
