/*
Gita.Network: ashvattha_web

componenet: About
developed by lm(•̪●)==ε/̵͇̿​̿/’̿’̿ ̿ ̿̿ `(•.°)~
*/
// ------------------ ┌∩┐(◣_◢)┌∩┐ ------------------
import React, { Component } from 'react';
import { Spring } from 'react-spring/renderprops'

import STORY_TIME from '../assets/02/storytime.png';

class About extends Component {
    render() {
        return (
            
        <div className="container-fluid">
        <br />
            <Spring
            from={{ opacity: 0 }}
            to={{ opacity: 1 }}
            config={{delay: 200, tension: 60}}>
            {props => (
            <div style={props}>

                <div className="row" style={{}}>
                    <div className="col " style={{maxWidth: "850px",marginTop:"128px"}}>
                        <p className="black-font ">If at first you dont succeed,  call it version 0.1.0. Chuck Norris can lift up a chair with one hand... While he's sitting on it! Ipsum something lorem smiling lake within reach. Beautiful feels.</p>
                        <p className="black-font ">Few more shpeals just to fill in the deals. Working for meals. Almost at version 0.1.3. Add one more line kthnksbye. </p>
                        <p className="black-font ">aand a little bit more just to nail the point home. About should not get longer than all  this.</p>

                    </div>
                
            
                    <div className="col-lg-4  col_centered ">
                    <img className="picforpho_story" src={STORY_TIME} alt="StoryTime"></img>
                    </div>    
                </div>
            </div>)}
            </Spring>
        </div>
        );
    }
}

// ------------------° ̿ ̿'''\̵͇̿̿\з=(◕_◕)=ε/̵͇̿̿/'̿'̿ ̿ °------------------

// ------------------° ̿ ̿'''\̵͇̿̿\з=(◕_◕)=ε/̵͇̿̿/'̿'̿ ̿ °------------------
export default About;
//    ‛¯¯٭٭¯¯(▫▫)¯¯٭٭¯¯’      FIN     ‛¯¯٭٭¯¯(▫▫)¯¯٭٭¯¯’

