/*
Gita.Network: ashvattha_web

componenet: About
developed by lm(•̪●)==ε/̵͇̿​̿/’̿’̿ ̿ ̿̿ `(•.°)~
*/
// ------------------ ┌∩┐(◣_◢)┌∩┐ ------------------
import React, {Component} from 'react';


import STORY_TIME from '../assets/02/storytime.png';
import LEAVES_BACK from '../assets/02/leaves_back.png';

import "../basics.css";
import "animate.css/animate.min.css";


// ------------------ ┌∩┐(◣_◢)┌∩┐ ------------------
class About extends Component{

// ------------------ '(◣_◢)' ------------------
  render(){
    return(
      <div className="white-back">
   

        <div className="container-fluid">
          <img className="leaves_back_pos_0" src={LEAVES_BACK}></img>

          
          <div className="row">
            <div className="col " style={{marginTop:"1%", padding:"10%"}}>
              <div className="row  offset-md-2">
                <h2 className="blue-font ">Who?</h2>
              </div>
              <div className="row  offset-md-2"  >
                <p className="black-font ">If at first you dont succeed,  call it version 0.1.0. Chuck Norris can lift up a chair with one hand... While he's sitting on it! Ipsum something lorem smiling lake within reach. Beautiful feels.</p>
              </div>
            </div>
          

            <div className="col ">
            <div className="col  outcol_centered ">
            <img className="picforpho_story" src={STORY_TIME} alt="StoryTime"></img>
            </div>
            
            </div>
          </div>
         
        </div>
      <br />
      </div>
      );
  }
// ------------------ '(◣_◢)' ------------------

}
// ------------------° ̿ ̿'''\̵͇̿̿\з=(◕_◕)=ε/̵͇̿̿/'̿'̿ ̿ °------------------

// ------------------° ̿ ̿'''\̵͇̿̿\з=(◕_◕)=ε/̵͇̿̿/'̿'̿ ̿ °------------------
export default About;
//    ‛¯¯٭٭¯¯(▫▫)¯¯٭٭¯¯’      FIN     ‛¯¯٭٭¯¯(▫▫)¯¯٭٭¯¯’
