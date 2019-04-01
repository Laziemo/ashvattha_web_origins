/*
Gita.Network: ashvattha_web
//Mate, when are those planets going to start moving?
componenet: Gallery
developed by lm(•̪●)==ε/̵͇̿​̿/’̿’̿ ̿ ̿̿ `(•.°)~
*/
// ------------------ ┌∩┐(◣_◢)┌∩┐ ------------------
import React, { Component } from 'react';


import { Carousel, Fade } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';

import { transparent } from 'material-ui/styles/colors';
 
//import all album data here:
import GALLERY_COVER from '../data/galleryIntro';
import TESTIMONIALS from '../data/testimonials';

import HAMLET_ALBUM from '../data/hamletAlbum';
import ALICE_ALBUM from '../data/aliceAlbum';
import JUNGLE_BOOK_ALBUM from '../data/jungleBookAlbum';
import HOSPIRA_ALBUM from '../data/hospiraAlbum';

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

    yellow:{
        borderRadius: "0px",
        marginRight: "12px",
        outline: "none",
        color: "#333333",
        backgroundColor: '#ffb833',
        fontFamily: "Quicksand",
        '&:hover': {
          backgroundColor: '#4fb0c6',
        },
      },
      transparent:{
        borderRadius: "0px",
        outline: "none",
        color: "#f7f7f2",
        backgroundColor: 'transparent',
        fontFamily: "Quicksand",
    
        '&:hover': {
          backgroundColor: '#ffb833',
        },
        '&:focus': {
          color: '#ef8354',
          outline: "none",
    
        }
      }
  });
// ------------------ ┌∩┐(◣_◢)┌∩┐ ------------------
  
class Gallery extends Component {
// ------------------ '(◣_◢)' ------------------

    constructor(props, context) {
        super(props, context);
    
        this.handleSlide = this.handleSlide.bind(this);
        this.handleImageClick = this.handleImageClick.bind(this);
        this.handleTab=this.handleTab.bind(this);
        this.handleButton=this.handleButton.bind(this);

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
                this.setState({
                    index:0,
                    title:ALICE_ALBUM[0].title,
                    sub: ALICE_ALBUM[0].sub,
                    album: "alice"
                });
                break;
            case 1:
            //BUILD: HAMLET_ALBUM_BUILT AND THEN SET_STATE FOR ReRENDER      
                this.setState({
                    index:0,
                    title:HAMLET_ALBUM[0].title,
                    sub: HAMLET_ALBUM[0].sub,
                    album: "hamlet"
                });
                break;
        
            case 2:
                this.setState({
                    index:0,
                    title:JUNGLE_BOOK_ALBUM[0].title,
                    sub: JUNGLE_BOOK_ALBUM[0].sub,
                    album: "jungle_book"
                });
                break;

            case 3:
                this.setState({
                    index:0,
                    title:HOSPIRA_ALBUM[0].title,
                    sub: HOSPIRA_ALBUM[0].sub,
                    album: "hospira"
                });
                break;

            default:
                this.setState({
                    index:0,
                    title:GALLERY_COVER[0].title,
                    sub: GALLERY_COVER[0].sub,
                    album: "gallery",
                });
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
    
    handleButton(value) {
        if(value===0){
            this.setState({
                index:GALLERY_COVER[0].index,
                title:GALLERY_COVER[0].title,
                sub: GALLERY_COVER[0].sub,
                album: "gallery_cover"
            }); 
        }
        else if(value===1){
            alert("Download will be enabled soon :)")
        }
    
    }

// ------------------ '(◣_◢)' ------------------
    renderButtonPair(album){
        console.log("FROM RBP" ,album);
        if(album!=="gallery_cover" && album!=="testimonials"){
            const wantFade=true;
            return(
                <Fade in={wantFade} appear={wantFade}>
                <div className="row">

                    <Button 
                        variant="outlined" 
                        component="button"
                        className={this.props.classes.yellow}
                        onClick={() => {this.handleButton(0)} }
                    >
                    Back
                    </Button>

                    <Button 
                        variant="outlined"
                        component="button"
                        className={this.props.classes.transparent} 
                        onClick={() => {this.handleButton(1)} }
                    >
                    Download   
                    </Button>


                </div>
                </Fade>
            );
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
                                style={{width:"360px",height:"636px",display: "flex", alignItems: "center",justifyContent:"center", border:"3px solid black"}}                               
                                
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
                                style={{width:"360px",height:"636px",display: "flex", alignItems: "center",justifyContent:"center", border:"3px solid black"}}                               
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
                                    height:"636px",
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
                            className="d-block w-100 "
                            src={photo.img}
                            alt={photo.title}
                            style={{width:"360px",
                                height:"636px",
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
                                    height:"636px",
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
                                    height:"636px",
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
                                style={{width:"360px",height:"636px",display: "flex", alignItems: "center",justifyContent:"center", border:"3px solid black"}}                               
                                
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

                <br />
                <div className="container-fluid">
                    
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
                        label="Gallery"
                        />
                        <Tab
                        
                        classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
                        label="Testimonials"
                        />
                    </Tabs>
                        
                
                </div>
                
                <br />
                <br />
                <hr />
                
                <div className="row ">
                    <div className="col-sm-12 col-md-8 col-lg-7" style={{marginLeft:"0px"}}>

                        <Carousel
                            className="box"
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
                        
                        {
                        this.renderButtonPair(album)
                        } 
                        
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
