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


class Gallery extends Component {

    constructor(props, context) {
        super(props, context);
    
        this.handleSelect = this.handleSelect.bind(this);
    
        this.state = {
            index: 0,
            title: "Alice in Wonderland",
            sub: "Check out pictures of the brats performing Lewis Caroll's classic!",
            direction: null
        };
      }
    
      handleSelect(selectedIndex, e) {
        if (selectedIndex==0){
            this.setState({
            index: selectedIndex,
            title:"Alice in Wonderland",
            sub: "Check out pictures of the brats performing Lewis Caroll's classic!",
            direction: e.direction,
            });
        }
        if (selectedIndex==1){
            this.setState({
            index: selectedIndex,
            title:"Hamlet",
            sub: "Check out pictures of the brats being tormented by Shakespeare's classic!",
            direction: e.direction,
            });
        }
        if (selectedIndex==2){
            this.setState({
            index: selectedIndex,
            title:"Jungle Book",
            sub: "Check out pictures of us all having fun performing Rudyard Kipling's classic!",
            direction: e.direction,
            });
        }
      }

    render() {
        const { index, direction, title, sub } = this.state;
        console.log(this.state)


        return (
            <div className="container-fluid black-back " >
                  
                <img className="moon_pos" src={MOON}></img>
                <img className="mercury_pos" src={MERCURY}></img>
                <img className="saturn_pos" src={SATURN}></img>
                <img className="uranus_pos" src={URANUS}></img>
                <img className="star0_pos" src={STAR0}></img>
                <img className="star1_pos" src={STAR1}></img>
            
                <div className="row">
                    <div className="col" style={{marginRight:"15px"}}>
                        <br />
                        <br />
                        <br />
                        <h2 className="blue-font " style={{textAlign:"right"}}>Why?</h2>
                        <br />
                        <br />
                        <br />
                        
                    </div>
                </div>
         
                
                <div className="row ">
                    <div className="col-sm-6  " style={{marginLeft:"0px"}}>

                    <Carousel
                        activeIndex={index}
                        direction={direction}
                        onSelect={this.handleSelect}
                        fade={true}
                        indicators={true}
                        slide={true}
                    >
                        <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="http://www.caps.media/195/1-alice-in-wonderland/full/alice-in-wonderland-disneyscreencaps.com-71.jpg"
                            alt="Alice in Wonderland"
                            style={{width:"360px",height:"480px",display: "flex", alignItems: "center",justifyContent:"center", border:"3px solid black"}}
                        />
                      
                        </Carousel.Item>
                        <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="http://fettleanimation.com/wp-content/uploads/2016/02/Hamlet-Shakespeare-in-Shorts-1-%C2%A9Fettle-Animation.png"
                            alt="Hamlet"
                            style={{width:"360px",height:"480px",display: "flex", alignItems: "center",justifyContent:"center", border:"3px solid black"}}
                            
                        />

                       
                        </Carousel.Item>
                        <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="http://3.bp.blogspot.com/-BjaLZUdzhoI/T9jJE3NKwPI/AAAAAAAAE3I/Unw5JXWL_hE/s1480/disney_the_jungle_book_cartoon_wallpaper.jpg"
                            alt="Jungle Book"
                            style={{width:"360px",height:"480px",display: "flex", alignItems: "center",justifyContent:"center", border:"3px solid black"}}
                        />

                        </Carousel.Item>
                    </Carousel>

                    <br />
                        
                    <br />
                    
                    </div>

                    <div className="col  white-font " style={{padding:"30px"}}>
                        <div className="row margin_adjust0">

                            <h3 className="orange-font " style={{textAlign:"right"}}>{title}</h3>
                          
                        </div> 
                        <div className="row" style={{marginTop:"0%"}}>   
                            <p className="">{sub}</p>
                        </div>
                        
                        <div className="row" style={{marginTop:"2%"}}>

                            <div className=" ">
                                <button type="button" className="btn btn--dark btn-lg yellow-back" style={{padding:"10px", marginRight:"6px", borderRadius: "0px"}}>Gallery</button>
                                
                                <button type="button" className="btn btn--dark btn-lg blue-font" style={{padding:"10px", marginRight:"6px", borderRadius: "0px"}}>Testimonials</button>
                            </div>
                           
                        </div>
                       
                    </div>
                    
                </div>
              
                <br />
                <br />
    
            </div>
        );
    }
}

// ------------------° ̿ ̿'''\̵͇̿̿\з=(◕_◕)=ε/̵͇̿̿/'̿'̿ ̿ °------------------

// ------------------° ̿ ̿'''\̵͇̿̿\з=(◕_◕)=ε/̵͇̿̿/'̿'̿ ̿ °------------------
export default Gallery;
//    ‛¯¯٭٭¯¯(▫▫)¯¯٭٭¯¯’      FIN     ‛¯¯٭٭¯¯(▫▫)¯¯٭٭¯¯’
