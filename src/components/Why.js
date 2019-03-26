/*
Gita.Network: ashvattha_web
//Mate, when are those planets going to start moving?
componenet: Gallery
developed by lm(•̪●)==ε/̵͇̿​̿/’̿’̿ ̿ ̿̿ `(•.°)~
*/
// ------------------ ┌∩┐(◣_◢)┌∩┐ ------------------
import React, { Component } from 'react';


import { Carousel } from 'react-bootstrap';

import MOON from '../assets/04/moon.png';
import MERCURY from '../assets/04/mercury.png';
import VENUS from '../assets/04/venus.png';
import SATURN from '../assets/04/saturn.png';
import URANUS from '../assets/04/uranus.png';
import STAR0 from '../assets/04/star0.png';
import STAR1 from '../assets/04/star1.png';
import GIRLIE from '../assets/04/girlie.png';

import Gallery from './Gallery';

class Why extends Component {
// ------------------ '(◣_◢)' ------------------

    constructor(props, context) {
        super(props, context);
    
      }


    render() {
        const { id  } = this.props;
        return (
            <div className="container-fluid black-back"  id={id} >
                <img className="moon_pos" src={MOON}></img>
                <img className="mercury_pos" src={MERCURY}></img>
                <img className="saturn_pos" src={SATURN}></img>
                <img className="star0_pos" src={STAR0}></img>
                <img className="star1_pos" src={STAR1}></img>   
                 <br />
                <div className="col" >
                   
              
                    <br />

                        <h2 className="blue-font " style={{textAlign:"left", marginLeft: "15px"}}>Why?</h2>
                        
                     
                        
                  
                </div>
         
                <Gallery  />
                   

              
                <br />
                <br />
    
            </div>
        );
    }
}

// ------------------° ̿ ̿'''\̵͇̿̿\з=(◕_◕)=ε/̵͇̿̿/'̿'̿ ̿ °------------------

// ------------------° ̿ ̿'''\̵͇̿̿\з=(◕_◕)=ε/̵͇̿̿/'̿'̿ ̿ °------------------
export default Why;
//    ‛¯¯٭٭¯¯(▫▫)¯¯٭٭¯¯’      FIN     ‛¯¯٭٭¯¯(▫▫)¯¯٭٭¯¯’
