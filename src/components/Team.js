/*
Gita.Network: ashvattha_web

componenet: Team
developed by lm(•̪●)==ε/̵͇̿​̿/’̿’̿ ̿ ̿̿ `(•.°)~
*/
// ------------------ ┌∩┐(◣_◢)┌∩┐ ------------------
import React, {Component} from 'react';

import UNIT_DATA from '../data/unitData.js';

import "../basics.css";


class Unit extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col ">
            <img src={this.props.data.img} className="img-fluid" style={{width: "60%", height: "60%"}} alt={this.props.data.alt} />
          </div>
          <div className="col ">
            <h2>{this.props.data.title}</h2>
            <h4>{this.props.data.sub}</h4>
            <p>{this.props.data.content}</p>
          </div>
        </div>
      </div>
    );
  }
}

// ------------------ ┌∩┐(◣_◢)┌∩┐ ------------------
class Team extends Component{

// ------------------ '(◣_◢)' ------------------
  render(){
    return(
      <div className="svg_backs_slant ">
      <br />
      <br />
      <br />

        <div className="container">
          
          <div className="row ">

            <div className="col" style={{textAlign: "right"}}>
              <h2>{UNIT_DATA[0].title}</h2>
              <h4 className="orange-font">{UNIT_DATA[0].sub}</h4>
              <p>{UNIT_DATA[0].content}</p>
            </div>

            <div className="col-md-2 ">
              <div className=" image-fit">
                <img src={UNIT_DATA[0].img} className="img-fluid" style={{width: "148px", height: "148px"}} alt={UNIT_DATA[0].alt} />
              </div>
            </div>

          </div>

          <br />
          <br />
          <br />
          <br />

          <div className="row">

            <div className="col" style={{textAlign: "right"}}>
              <h2>{UNIT_DATA[1].title}</h2>
              <h4 className="orange-font">{UNIT_DATA[1].sub}</h4>
              <p>{UNIT_DATA[1].content}</p>
            </div>

            <div className="col-md-2 ">
              <div className=" image-fit">
                <img src={UNIT_DATA[1].img} className="img-fluid" style={{width: "148px", height: "148px"}} alt={UNIT_DATA[1].alt} />
              </div>
            </div>

          </div>

          <br />
          <br />
          <br />
          <br />

          <div className="row">

            <div className="col" style={{textAlign: "right"}}>
              <h2>{UNIT_DATA[2].title}</h2>
              <h4 className="orange-font">{UNIT_DATA[2].sub}</h4>
              <p>{UNIT_DATA[2].content}</p>
            </div>

            <div className="col-md-2">
              <div className=" image-fit">
                <img src={UNIT_DATA[2].img} className="img-fluid" style={{width: "148px", height: "148px"}} alt={UNIT_DATA[2].alt} />
              </div>
            </div>

          </div>
          
          <br />
          <br />
          <br />
          <br />

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
