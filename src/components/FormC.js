/*
Gita.Network: ashvattha_web

componenet: Form
developed by lm(•̪●)==ε/̵͇̿​̿/’̿’̿ ̿ ̿̿ `(•.°)~
*/
// ------------------ ┌∩┐(◣_◢)┌∩┐ ------------------
import React, {Component} from 'react';
import {  Form  } from 'react-bootstrap';
import "../basics.css";

// ------------------ ┌∩┐(◣_◢)┌∩┐ ------------------
class FormC extends Component{

// ------------------ '(◣_◢)' ------------------
  render(){
    return(
      <div className="wish-back">
      <br />
        <div className="container outline">
          
          <h3 style={{textAlign:"center"}}>Email Us</h3>
          <br />
          <input name='email' type="text" style={{background:"transparent"}} className="form-control form-control-lg text_center" id="email" placeholder="you@email.com" onChange={event => this.handleChange(event)} />
          <br />
          <input name='subject' type="text" style={{background:"transparent"}} className="form-control form-control-lg text_center" id="subject" placeholder="Subject" onChange={event => this.handleChange(event)} />
          <br />
          <textarea name='message' type="text" style={{background:"transparent"}} className="form-control form-control-lg text_center" id="message" placeholder="Message" row="7" onChange={event => this.handleChange(event)} />
          <br />
          <div style={{display: "flex", alignItems: "right",justifyContent:"right"}}>

          <button className="btn btn-lg yellow-back outline" style={{width:"152px"}}  type="submit" onClick={this.handleLoginSubmit}>
          Send
          </button>
         
        </div>
        <br />
         
        </div>
      <br />
      </div>
      );
  }
// ------------------ '(◣_◢)' ------------------

}
// ------------------° ̿ ̿'''\̵͇̿̿\з=(◕_◕)=ε/̵͇̿̿/'̿'̿ ̿ °------------------

// ------------------° ̿ ̿'''\̵͇̿̿\з=(◕_◕)=ε/̵͇̿̿/'̿'̿ ̿ °------------------
export default FormC;
//    ‛¯¯٭٭¯¯(▫▫)¯¯٭٭¯¯’      FIN     ‛¯¯٭٭¯¯(▫▫)¯¯٭٭¯¯’
