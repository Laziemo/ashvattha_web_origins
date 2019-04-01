/*
Gita.Network: ashvattha_web

componenet: Team
developed by lm(•̪●)==ε/̵͇̿​̿/’̿’̿ ̿ ̿̿ `(•.°)~
*/
// ------------------ ┌∩┐(◣_◢)┌∩┐ ------------------
import React, {Component} from 'react';
import { Spring } from 'react-spring/renderprops'


import UNIT_DATA from '../data/unitData.js';
import LSTAIR from '../assets/final_complete/leftstair.png';
import RSTAIR from '../assets/final_complete/rightstair.png';

import "../basics.css";


const Unit = (props)=>{
  
    return (
    
          <div className="col-md-4 col_centered ">
              <div className="row">
                <img src={props.data.img} style={{width: "50%", height: "50%", margin:"0 auto"}} alt={props.data.alt} />
              </div>
          
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
class Team extends Component{

  constructor(props){
    super(props);

  }

  
// ------------------ '(◣_◢)' ------------------
  render(){
    return(
      <div className="container-fluid white-back">
      <br />
      
          <div className="row">
          <Spring
            from={{ opacity: 0 }}
            to={{ opacity: 1 }}
            config={{delay: 200, tension: 60}}>
          {Props => (
            <div className="row" style={Props}>
            <img src={LSTAIR} className="lstair"></img>
    
            {
              UNIT_DATA.map((unit)=>{
                return(
                  <Unit key={unit.id} data={unit} />
                )
              })
            }      
          
            <br />
            <br />
            <br />
            <img src={RSTAIR} className="rstair"></img> 

            </div>
          )}
          </Spring>
          </div>
      </div>
      );
  }
// ------------------ '(◣_◢)' ------------------

}
// ------------------° ̿ ̿'''\̵͇̿̿\з=(◕_◕)=ε/̵͇̿̿/'̿'̿ ̿ °------------------

// ------------------° ̿ ̿'''\̵͇̿̿\з=(◕_◕)=ε/̵͇̿̿/'̿'̿ ̿ °------------------
export default Team;
//    ‛¯¯٭٭¯¯(▫▫)¯¯٭٭¯¯’      FIN     ‛¯¯٭٭¯¯(▫▫)¯¯٭٭¯¯’
