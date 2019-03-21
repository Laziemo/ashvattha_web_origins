/*
Gita.Network: ashvattha_web

componenet: Contact
developed by lm(•̪●)==ε/̵͇̿​̿/’̿’̿ ̿ ̿̿ `(•.°)~
*/
// ------------------ ┌∩┐(◣_◢)┌∩┐ ------------------
import React, {Component} from 'react';
import FormC from "./FormC";

import "../basics.css";
import SW from '../assets/final_complete/SVG/SW.svg';
import ADDRESS from '../assets/05/address.png';
import EMAIL from '../assets/05/email.png';
import PHONE from '../assets/05/phone.png';

// ------------------ ┌∩┐(◣_◢)┌∩┐ ------------------
class Contact extends Component{

// ------------------ '(◣_◢)' ------------------
  render(){
    return(
     
        <div className="container-fluid cream-back " style={{textAlign: "left"}}>
        <img className="leaves_back_pos_3 leaf" src={SW}></img>

          <div className="row">
            

              <div className="col">
                  <br />

                  <div className="row">

                    <div className="col" >
                    <h3>Contact</h3>
                    </div>
                  </div>

                  <br />
                  <br />
            

                  <div className="row ">

                    <div className="col-sm-1 ">
                    <img src={ADDRESS} alt="address"></img>
                    </div>
                    <div className="col ">
                    <p className="black-font">11-12-18 Daspalla Hills, Near Navy House.</p>
                    </div>

                  </div>
                  <br />

                  <div className="row ">

                    <div className="col-sm-1 ">
                    <img src={EMAIL} alt="email"></img>
                    </div>
                    <div className="col ">
                    <p className="black-font">skurma@gmail.com</p>
                    </div>

                  </div>
                  <br />

                  <div className="row ">

                    <div className="col-sm-1 ">
                    <img src={PHONE} alt="phone"></img>
                    </div>
                    <div className="col ">
                    <p className="black-font">9866966681</p>
                    </div>

                  </div>
                  <br />
                  <hr />
                  <hr />
                
                  
                
                  <p className="black-font " style={{textAlign:"left", fontSize:"17px"}}>ashvattha_web.origins(UnderConstruction)::created by gita::design_element</p>
                  <br />
                
              </div>

              <div className="col wish-back ">
                    <FormC />
                    <br />
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
