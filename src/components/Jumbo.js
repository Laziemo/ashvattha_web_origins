/*
Gita.Network: react_origins

componenet: Jumbotron
developed by lm(•̪●)==ε/̵͇̿​̿/’̿’̿ ̿ ̿̿ `(•.°)~
*/
// ------------------ ┌∩┐(◣_◢)┌∩┐ ------------------
import React, {Component} from 'react';
import {  Redirect  } from 'react-router-dom';

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
  
          {this.handleRedirect(this.state.redirect_id)}
          <div className="jumbotron" style={{backgroundColor:"transparent", margin:"0 auto"}} fluid>
          <img className="leaves_back_pos" src={LEAVES_BACK}></img>
          <img className="birdie_pos" src={BIRDIE}></img>

          <div className = "container outline">
            <div className= "row">
              <div className="col outline">
                <img src={CHILLIN} alt="oldmachillin"></img>
              </div>
              <div className="col outline">
                <div className="row outline" style={{marginTop:"148px"}}>
                  <h1 className="yellow-font outline">{this.props.data.title}</h1>
                  <p className="blue-font outline">{this.props.data.sub}</p>
                  <p className="black-font outline" style={{ fontSize:"30px"}}>{this.props.data.sub0}</p>
                  <hr />
                </div>
                  <div className="row outline">
                  <button type="button" className="btn btn--dark btn-lg yellow-back" style={{padding:"10px", marginRight:"6px", borderRadius: "0px"}}>More</button>
                  
                  <button type="button" className="btn btn--dark btn-lg" style={{padding:"10px", marginRight:"6px", borderRadius: "0px"}}>Download Brochure</button>
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
