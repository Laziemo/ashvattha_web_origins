/*
Gita.Network: ashvattha_web
//Mate, when are those planets going to start moving?
componenet: Gallery
developed by lm(•̪●)==ε/̵͇̿​̿/’̿’̿ ̿ ̿̿ `(•.°)~
*/
// ------------------ ┌∩┐(◣_◢)┌∩┐ ------------------
import React, { Component } from 'react';


import { Carousel } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import { transparent } from 'material-ui/styles/colors';
 
import MOON from '../assets/04/moon.png';
import MERCURY from '../assets/04/mercury.png';
import VENUS from '../assets/04/venus.png';
import SATURN from '../assets/04/saturn.png';
import URANUS from '../assets/04/uranus.png';
import STAR0 from '../assets/04/star0.png';
import STAR1 from '../assets/04/star1.png';
import GIRLIE from '../assets/04/girlie.png';
//import all album data here:
import GALLERY_COVER from '../data/galleryIntro';
import HAMLET_ALBUM from '../data/hamletAlbum';
import ALICE_ALBUM from '../data/aliceAlbum';
import JUNGLE_BOOK_ALBUM from '../data/jungleBookAlbum';

import HOSPIRA_ALBUM from '../data/hospiraAlbum';
import TESTIMONIALS from '../data/testimonials';

import request from 'request';
import { EditorBorderAll } from 'material-ui/svg-icons';

let options = {
    method: 'POST',
    url: process.env.ALBUM_SERVER,
    headers:
    {
    "Content-Type": 'application/json'
    },
    body: {},
    json: true
};
// ------------------ ┌∩┐(◣_◢)┌∩┐ ------------------
const styles = theme => ({
    root: {
      flexGrow: 1,
      backgroundColor: transparent,
  
    },
    tabsRoot: {
      fontFamily: "Quicksand",
      color: "#f7f7f2"
  
    },
    tabsIndicator: {
      borderBottom: '2px solid #4fb0c6',
      backgroundColor: 'transparent',
      fontFamily: "Quicksand"
    },
    tabRoot: {
      textTransform: 'initial',
      fontFamily: "Quicksand",
      fontSize: "24px",
  
      minWidth: 72,
      '&:hover': {
        color: '#ef8354',
        opacity: 1,
      },
      '&$tabSelected': {
        color: '#ef8354',
  
        
      },
      '&:focus': {
        color: '#ef8354',
        outline: "none",
  
      },
    },
    tabSelected: {},
  });
// ------------------ ┌∩┐(◣_◢)┌∩┐ ------------------
  
class Gallery extends Component {
// ------------------ '(◣_◢)' ------------------

    constructor(props, context) {
        super(props, context);
    
        this.handleSlide = this.handleSlide.bind(this);
        this.handleImageClick = this.handleImageClick.bind(this);
        this.handleTab=this.handleTab.bind(this);
        this.renderCarouselItem=this.renderCarouselItem.bind(this);

        this.state = {
            index: GALLERY_COVER[0].index,
            title: GALLERY_COVER[0].title,
            sub: GALLERY_COVER[0].sub,
            direction: null,
            album: "gallery_cover",
            value: 0,
        };
      }
// ------------------ '(◣_◢)' ------------------
    
    handleSlide(selectedIndex, e) {
    //this manages the data in state based on the current item in the carousel
    //initialize for every newly added album
        switch(this.state.album){
            case "gallery_cover":
                this.setState({
                    index:selectedIndex,
                    title:GALLERY_COVER[selectedIndex].title,
                    sub: GALLERY_COVER[selectedIndex].sub,
                    direction: e.direction,
                });
                break;
            
            case "testimonials":
                this.setState({
                    index:selectedIndex,
                    title:TESTIMONIALS[selectedIndex].title,
                    sub: TESTIMONIALS[selectedIndex].sub,
                    direction: e.direction,
                });
                break;
            
            case "hamlet":
                this.setState({
                    index:selectedIndex,
                    title:HAMLET_ALBUM[selectedIndex].title,
                    sub: HAMLET_ALBUM[selectedIndex].sub,
                    direction: e.direction,
                });
                break;
            
            case "hospira":
                this.setState({
                    index:selectedIndex,
                    title:HOSPIRA_ALBUM[selectedIndex].title,
                    sub: HOSPIRA_ALBUM[selectedIndex].sub,
                    direction: e.direction,
                });
                break;

            case "alice":
                this.setState({
                    index:selectedIndex,
                    title:ALICE_ALBUM[selectedIndex].title,
                    sub: ALICE_ALBUM[selectedIndex].sub,
                    direction: e.direction,
                });
                break;
            
            case "jungle_book":
                this.setState({
                    index:selectedIndex,
                    title:JUNGLE_BOOK_ALBUM[selectedIndex].title,
                    sub: JUNGLE_BOOK_ALBUM[selectedIndex].sub,
                    direction: e.direction,
                });
                break;
            
            default :
                this.setState({
                    index:selectedIndex,
                    title:GALLERY_COVER[selectedIndex].title,
                    sub: GALLERY_COVER[selectedIndex].sub,
                    direction: e.direction,
                });
                break;
            
        }
        
    }

// ------------------ '(◣_◢)' ------------------
    
    handleImageClick(id) {
        console.log(id);
        switch(id){
            case 0:
                this.setState({album: "alice"});
                break;
            case 1:
            //BUILD: HAMLET_ALBUM_BUILT AND THEN SET_STATE FOR ReRENDER      
                this.setState({album: "hamlet"});
                break;
        
            case 2:
                this.setState({album: "jungle_book"});
                break;

            case 3:
                this.setState({album: "hospira"});
                break;

            default:
                this.setState({album: "gallery"});
                break;
            
        }

    }

// ------------------ '(◣_◢)' ------------------
    
    handleTab(event,value) {
    //value in state is only used by the Tabs  
        this.setState({value});
        if(value===0){
            this.setState({
                index:GALLERY_COVER[0].index,
                title:GALLERY_COVER[0].title,
                sub: GALLERY_COVER[0].sub,
                album: "gallery_cover"
            }); 
        }
        else{
            this.setState({
                index:TESTIMONIALS[0].index,
                title:TESTIMONIALS[0].title,
                sub: TESTIMONIALS[0].sub,
                album: "testimonials"
            });
        }
    
    }

// ------------------ '(◣_◢)' ------------------
    
    renderCarouselItem(album){
    //renders an album to the carouseel based on state{album}
    //add new case for every new album
        switch(album){
            case 'gallery_cover':
                return(
                    GALLERY_COVER.map((cover)=>{
                        return (
                            <Carousel.Item key={cover.index} 
                            onClick={()=>this.handleImageClick(cover.index)}>
                            <img
                                className="d-block w-100"
                                src={cover.img}
                                alt={cover.title}
                                style={{width:"360px",height:"480px",display: "flex", alignItems: "center",justifyContent:"center", border:"3px solid black"}}                               
                                
                            />
                        
                            </Carousel.Item>
                        );
                    })
                );
        
            case 'testimonials':
                return(
                    TESTIMONIALS.map((testimonial)=>{
                        return (
                            <Carousel.Item  key={testimonial.index}>
                            <img
                                className="d-block w-100"
                                src={testimonial.img}
                                alt={testimonial.title}
                                style={{width:"360px",height:"480px",display: "flex", alignItems: "center",justifyContent:"center", border:"3px solid black"}}                               
                            />
                        
                            </Carousel.Item>
                        );
                    })
                );
            
            case 'hospira':
                
                return(
                    HOSPIRA_ALBUM.map((photo)=>{

                        return (
                            <Carousel.Item  key={photo.index}>
                            <img
                                className="d-block w-100"
                                src={photo.img}
                                alt={photo.title}
                                style={{width:"360px",
                                    height:"480px",
                                    display: "flex", 
                                    alignItems: "center",
                                    justifyContent:"center", 
                                    border:"3px solid black"
                                }}                               
                            />
            
                            </Carousel.Item>

                        );
                    })
                );

            case 'hamlet':
            
            return(
                HAMLET_ALBUM.map((photo)=>{

                    return (
                        <Carousel.Item  key={photo.index}>
                        <img
                            className="d-block w-100"
                            src={photo.img}
                            alt={photo.title}
                            style={{width:"360px",
                                height:"480px",
                                display: "flex", 
                                alignItems: "center",
                                justifyContent:"center", 
                                border:"3px solid black"
                            }}                               
                        />
        
                        </Carousel.Item>

                    );
                })
            );

            case 'alice':
            
                return(
                    ALICE_ALBUM.map((photo)=>{

                        return (
                            <Carousel.Item  key={photo.index}>
                            <img
                                className="d-block w-100"
                                src={photo.img}
                                alt={photo.title}
                                style={{width:"360px",
                                    height:"480px",
                                    display: "flex", 
                                    alignItems: "center",
                                    justifyContent:"center", 
                                    border:"3px solid black"
                                }}                               
                            />
            
                            </Carousel.Item>

                        );
                    })
                );

            case 'jungle_book':
        
                return(
                    JUNGLE_BOOK_ALBUM.map((photo)=>{
    
                        return (
                            <Carousel.Item  key={photo.index}>
                            <img
                                className="d-block w-100"
                                src={photo.img}
                                alt={photo.title}
                                style={{width:"360px",
                                    height:"480px",
                                    display: "flex", 
                                    alignItems: "center",
                                    justifyContent:"center", 
                                    border:"3px solid black"
                                }}                               
                            />
            
                            </Carousel.Item>
    
                        );
                    })
                );    

            default:
                return(
                    GALLERY_COVER.map((cover)=>{
                        
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
                    })
                );
        }
    }
// ------------------ '(◣_◢)' ------------------

    render() {
        const { index, direction, title, sub, album, value } = this.state;
        const { classes } = this.props;
        console.log(album);
        return (
            <div className="container-fluid black-back " >
                
                <img className="moon_pos" src={MOON}></img>
                <img className="mercury_pos" src={MERCURY}></img>
                <img className="saturn_pos" src={SATURN}></img>
                <img className="star0_pos" src={STAR0}></img>
                <img className="star1_pos" src={STAR1}></img>
                <br />
                <br />
                <div className="row">
                    <div className="col" style={{marginLeft:"15px"}}>
                    <Tabs
                        value={value}
                        onChange={this.handleTab}
                        classes={{ root: classes.tabsRoot, indicator: classes.tabsIndicator }}
                        variant="standard"
                        scrollButtons="on"
                        indicatorColor="primary"

                    >
                        <Tab
                        
                        classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
                        label="Events"
                        />
                        <Tab
                        
                        classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
                        label="Testimonials"
                        />
                    </Tabs>
                        
                    </div>
                </div>
                
                <br />
                <br />
                <hr />
                
                <div className="row ">
                    <div className="col-sm-6  " style={{marginLeft:"0px"}}>

                    <Carousel
                        activeIndex={index}
                        direction={direction}
                        onSelect={this.handleSlide}
                    
                        controls={true}
                        wrap={true}
                        indicators={true}
                        slide={true}
                        interval={10000}
                    >

                    {
                    this.renderCarouselItem(album)
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
        
                       
                    </div>
                    
                </div>
              
                <br />
                <br />
    
            </div>
        );
    }
}

// ------------------° ̿ ̿'''\̵͇̿̿\з=(◕_◕)=ε/̵͇̿̿/'̿'̿ ̿ °------------------
Gallery.propTypes={
    classes: PropTypes.object.isRequired
  }
// ------------------° ̿ ̿'''\̵͇̿̿\з=(◕_◕)=ε/̵͇̿̿/'̿'̿ ̿ °------------------
export default withStyles(styles)(Gallery);
//    ‛¯¯٭٭¯¯(▫▫)¯¯٭٭¯¯’      FIN     ‛¯¯٭٭¯¯(▫▫)¯¯٭٭¯¯’
