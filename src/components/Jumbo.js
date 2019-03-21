/*
Gita.Network: react_origins

componenet: Jumbotron
developed by lm(•̪●)==ε/̵͇̿​̿/’̿’̿ ̿ ̿̿ `(•.°)~
*/
// ------------------ ┌∩┐(◣_◢)┌∩┐ ------------------
import React, {Component} from 'react';
import {  Redirect  } from 'react-router-dom';

import ScrollAnimation from 'react-animate-on-scroll';

import LEAVES_BACK from '../assets/01/leaves_back.png';
import BIRDIE from '../assets/01/birdie.png';
import CHILLIN from '../assets/01/chillin_wolma.png';
import "../basics.css";

// ------------------ ┌∩┐(◣_◢)┌∩┐ ------------------
class Jumbo extends Component{
// ------------------ '(◣_◢)' ------------------
  constructor(props){
    super(props);
    console.log(`JUMBO PROPS: ${props.data.title}`);
    this.state = {
      redirect: false,
      redirect_id: 0
    }
    this.handleRedirect = this.handleRedirect.bind(this);

  }
// ------------------ '(◣_◢)' ------------------
  handleClick(id){
    this.setState({redirect: true, redirect_id: id});
  }

// ------------------ '(◣_◢)' ------------------
  handleRedirect(id){
    if(this.state.redirect){
      if(id===1){
        return (<Redirect to="/works" />);
      }
      else if(id===2){
        return <Redirect to="/services" />
      }
      else if(id===3){
        return <Redirect to="/works" />
      }
      else{
        alert("BUG!");
      }
    }
  }
// ------------------ '(◣_◢)' ------------------
  render(){
    console.log(this.state);
    return(
        <div className="cream-back">
        <img className="leaves_back_pos" src={LEAVES_BACK}></img>


          {this.handleRedirect(this.state.redirect_id)}
          <div className="jumbotron" style={{backgroundColor:"transparent", margin:"0 auto"}} fluid>
          <img className="birdie_pos" src={BIRDIE}></img>

          <div className = "container ">
            <div className= "row">
              <div className="col ">
                <img className="picforpho" src={CHILLIN} alt="oldmachillin"></img>
              </div>
              <div className="col ">
                <div className="row margin_adjust">
                  <h1 className="yellow-font ">{this.props.data.title}</h1>
                  <p className="blue-font ">{this.props.data.sub}</p>
                  <h3 className="black-font ">{this.props.data.sub0}</h3>
                  <hr />
                </div>
                  <div className="row ">
                  <button type="button" className="btn btn--dark btn-sm yellow-back" style={{padding:"7px", marginRight:"6px", borderRadius: "0px", fontSize:"17px"}}><b>More</b></button>
                  
                  <button type="button" className="btn btn--dark btn-sm" style={{padding:"7px", marginRight:"6px", borderRadius: "0px",fontSize:"17px"}}><b>Download Brochure</b></button>
                  </div>
                
              </div>
            <br />
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
export default Jumbo;
//    ‛¯¯٭٭¯¯(▫▫)¯¯٭٭¯¯’      FIN     ‛¯¯٭٭¯¯(▫▫)¯¯٭٭¯¯’
