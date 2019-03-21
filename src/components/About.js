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

// ------------------ ┌∩┐(◣_◢)┌∩┐ ------------------
class About extends Component{

// ------------------ '(◣_◢)' ------------------
  render(){
    return(
      <div className="white-back outline">
      <br />
      <br />

        <div className="container-fluid">
          <img className="leaves_back_pos_0" src={LEAVES_BACK}></img>

          <div className="row">
            <div className="col outline" style={{marginLeft:"0%"}}>
              <div className="row offset-md-2 outline ">
                <h2 className="blue-font outline">Who?</h2>
              </div>
              <div className="row offset-md-2 outline" style={{maxWidth:"420px"}}>
                <p className="black-font outline">Chuck Norris can slam a revolving door. Chuck Norris can have his cake and eat it, too. Chuck Norris is currently suing NBC, claiming Law and Order are trademarked names for his left and right legs Chuck Norris can slice meat so thin is only has one side.</p>
              </div>
            </div>
          

            <div className="col outline">
            <div className="col outline outcol_centered ">
            <img className="outline" src={STORY_TIME} alt="StoryTime"></img>
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
