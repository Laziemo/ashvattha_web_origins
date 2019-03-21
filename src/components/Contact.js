/*
Gita.Network: ashvattha_web

componenet: Contact
developed by lm(•̪●)==ε/̵͇̿​̿/’̿’̿ ̿ ̿̿ `(•.°)~
*/
// ------------------ ┌∩┐(◣_◢)┌∩┐ ------------------
import React, {Component} from 'react';
import FormC from "./FormC";

import "../basics.css";
import LEAVES_BACK from '../assets/05/leaves_back.png';
import ADDRESS from '../assets/05/address.png';
import EMAIL from '../assets/05/email.png';
import PHONE from '../assets/05/phone.png';

// ------------------ ┌∩┐(◣_◢)┌∩┐ ------------------
class Contact extends Component{

// ------------------ '(◣_◢)' ------------------
  render(){
    return(
      <div className="cream-back outline" style={{textAlign: "left"}}>
        <div className="container-fluid outline">
        <img className="leaves_back_pos" src={LEAVES_BACK}></img>

          <div className="row outline">
            

              <div className="col outline" style={{marginLeft:"25px"}}>
                  <br />

                  <div className="row  outline">

                    <div className="col outline" >
                    <h3>Contact</h3>
                    </div>
                  </div>

                  <br />
                  <br />
            

                  <div className="row outline">

                    <div className="col-sm-1 outline">
                    <img src={ADDRESS} alt="address"></img>
                    </div>
                    <div className="col outline">
                    <p className="black-font">11-12-18 Daspalla Hills, Near Navy House.</p>
                    </div>

                  </div>
                  <br />

                  <div className="row outline">

                    <div className="col-sm-1 outline">
                    <img src={EMAIL} alt="email"></img>
                    </div>
                    <div className="col outline">
                    <p className="black-font">skurma@gmail.com</p>
                    </div>

                  </div>
                  <br />

                  <div className="row outline">

                    <div className="col-sm-1 outline">
                    <img src={PHONE} alt="phone"></img>
                    </div>
                    <div className="col outline">
                    <p className="black-font">9866966681</p>
                    </div>

                  </div>
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                
                  <p className="black-font outline" style={{textAlign:"left", fontSize:"17px"}}>ashvattha_web.origins(UnderConstruction)::created by gita::design_element</p>
                  <br />
                
              </div>

              <div className="col wish-back outline">
                    <FormC />
                    <br />
              </div>

          </div>
         
        </div>

      </div>

      );
  }
// ------------------ '(◣_◢)' ------------------

}
// ------------------° ̿ ̿'''\̵͇̿̿\з=(◕_◕)=ε/̵͇̿̿/'̿'̿ ̿ °------------------

// ------------------° ̿ ̿'''\̵͇̿̿\з=(◕_◕)=ε/̵͇̿̿/'̿'̿ ̿ °------------------
export default Contact;
//    ‛¯¯٭٭¯¯(▫▫)¯¯٭٭¯¯’      FIN     ‛¯¯٭٭¯¯(▫▫)¯¯٭٭¯¯’
