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

import GALLERY_COVER from '../data/galleryIntro';
import TESTIMONIALS from '../data/testimonials';

class Why extends Component {
// ------------------ '(◣_◢)' ------------------

    constructor(props, context) {
        super(props, context);
    
        this.handleSelect = this.handleSelect.bind(this);
        this.handleImageClick = this.handleImageClick.bind(this);
        this.renderCarouselItem = this.renderCarouselItem.bind(this);
        this.handleButton = this.handleButton.bind(this);

        this.state = {
            index: GALLERY_COVER[0].index,
            title: GALLERY_COVER[0].title,
            sub: GALLERY_COVER[0].sub,
            direction: null,
            gallery: true
        };
      }
// ------------------ '(◣_◢)' ------------------
    
    handleSelect(selectedIndex, e) {
        if(this.state.gallery){
            this.setState({
                index:selectedIndex,
                title:GALLERY_COVER[selectedIndex].title,
                sub: GALLERY_COVER[selectedIndex].sub,
                direction: e.direction,
            });
        }
        else{
            this.setState({
                index:selectedIndex,
                title:TESTIMONIALS[selectedIndex].title,
                sub: TESTIMONIALS[selectedIndex].sub,
                direction: e.direction,
            });
        }
    }
// ------------------ '(◣_◢)' ------------------
    
    handleImageClick(id) {
       alert("One day, I will take you to a Gallery page. I promise!\nJust got image with id: ", id)
        
    }
    // ------------------ '(◣_◢)' ------------------
    
    handleButton(id) {
        if(id===0){
            this.setState({
                index:GALLERY_COVER[0].index,
                title:GALLERY_COVER[0].title,
                sub: GALLERY_COVER[0].sub,
                gallery: true
            });
        }
        else{
            this.setState({
                index:TESTIMONIALS[0].index,
                title:TESTIMONIALS[0].title,
                sub: TESTIMONIALS[0].sub,
                gallery: false
            });
        }     
    }
// ------------------ '(◣_◢)' ------------------

    renderCarouselItem(){
        if(this.state.gallery){

            GALLERY_COVER.map((cover)=>{
                console.log("entered",  section)

                return (
                    <Carousel.Item key={cover.index}>
                    <img
                        
                        className="d-block w-100"
                        src={cover.img}
                        alt={cover.title}
                        style={{width:"360px",height:"480px",display: "flex", alignItems: "center",justifyContent:"center", border:"3px solid black"}}                               
                    />
                
                    </Carousel.Item>
                );
            })
        }
        else{
            TESTIMONIALS.map((testimonial)=>{
                return (
                    <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={testimonial.img}
                        alt={testimonial.title}
                        style={{width:"360px",height:"480px",display: "flex", alignItems: "center",justifyContent:"center", border:"3px solid black"}}                               
                    />
                
                    </Carousel.Item>
                );
            });
            
        }
    }
// ------------------ '(◣_◢)' ------------------

    render() {
        const { index, direction, title, sub, gallery } = this.state;

        return (
            <div className="container-fluid black-back " >
                  
                <img className="moon_pos" src={MOON}></img>
                <img className="mercury_pos" src={MERCURY}></img>
                <img className="saturn_pos" src={SATURN}></img>
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
                        
                        controls={true}
                        wrap={true}
                        indicators={true}
                        slide={true}
                        interval={10000}
                    >

                    {
                    (gallery)?
                       (GALLERY_COVER.map((cover)=>{
                            
                            return (
                                <Carousel.Item key={cover.index} 
                                onClick={()=>this.handleImageClick(cover.id)}>
                                <img
                                    className="d-block w-100"
                                    src={cover.img}
                                    alt={cover.title}
                                    style={{width:"360px",height:"480px",display: "flex", alignItems: "center",justifyContent:"center", border:"3px solid black"}}                               
                                    
                                />
                            
                                </Carousel.Item>
                            );
                        })) 
                       :
                       (TESTIMONIALS.map((testimonial)=>{
                            return (
                                <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={testimonial.img}
                                    alt={testimonial.title}
                                    style={{width:"360px",height:"480px",display: "flex", alignItems: "center",justifyContent:"center", border:"3px solid black"}}                               
                                />
                            
                                </Carousel.Item>
                            );
                        }))
                    }    
                    
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
                                <button type="button" 
                              
                                className="btn btn--dark btn-lg yellow-back" 
                                style={{padding:"10px", marginRight:"6px", borderRadius: "0px"}} 
                                onClick={()=>{this.handleButton(0)}}
                                >
                                Gallery</button>
                                
                                <button type="button" 
                               
                                className="btn btn--dark btn-lg blue-font" 
                                style={{padding:"10px", marginRight:"6px", borderRadius: "0px"}} 
                                onClick={()=>{this.handleButton(1)}}
                                >
                                Testimonials</button>
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
export default Why;
//    ‛¯¯٭٭¯¯(▫▫)¯¯٭٭¯¯’      FIN     ‛¯¯٭٭¯¯(▫▫)¯¯٭٭¯¯’
