/*
Gita.Network: ashvattha_web

componenet: Youth
developed by lm(•̪●)==ε/̵͇̿​̿/’̿’̿ ̿ ̿̿ `(•.°)~
*/
// ------------------ ┌∩┐(◣_◢)┌∩┐ ------------------
import React, {Component} from 'react';
import { Spring } from 'react-spring/renderprops'

import YOUTH_DATA from '../data/youthData.js';

import "../basics.css";


const Course = (props)=>{
 
    return (
      <div className="col-md-4 col_centered ">
          <div className="row">
            <img src={props.data.img} style={{width: "320px", height: "320px", margin:"0 auto"}} alt={props.data.alt} />
          </div>
          
        <br />
        <br />
        <div className="row ">

          <div className="container col_centered ">
            <h3 className="text-center">{props.data.title}</h3>
            <h4 className="text-center">{props.data.sub}</h4>
            <p className="text-center">{props.data.content}</p>
          </div>
        </div>
      </div>
    );

}

// ------------------ ┌∩┐(◣_◢)┌∩┐ ------------------
class Youth extends Component{

  constructor(props){
    super(props);

  }

  
// ------------------ '(◣_◢)' ------------------
  render(){
    return(
      <div className="container-fluid white-back">
        <Spring
        from={{marginLeft: -20000 }}
        to={{ marginLeft: 1 }}
        config={{delay: 100, tension: 30}}
        >
        {props => (
        <div style={props}>
        <br />
            <div className="row">
            {
            YOUTH_DATA.map((unit)=>{
            return(
                <Course key={unit.id} data={unit} />
            )
            })
            }
            </div>
            <br />
        </div>)}
        </Spring>
        </div>
      );
  }
// ------------------ '(◣_◢)' ------------------

}
// ------------------° ̿ ̿'''\̵͇̿̿\з=(◕_◕)=ε/̵͇̿̿/'̿'̿ ̿ °------------------

// ------------------° ̿ ̿'''\̵͇̿̿\з=(◕_◕)=ε/̵͇̿̿/'̿'̿ ̿ °------------------
export default Youth;
//    ‛¯¯٭٭¯¯(▫▫)¯¯٭٭¯¯’      FIN     ‛¯¯٭٭¯¯(▫▫)¯¯٭٭¯¯’
