/*
Gita.Network: ashvattha_web

componenet: Courses
developed by lm(•̪●)==ε/̵͇̿​̿/’̿’̿ ̿ ̿̿ `(•.°)~
*/
// ------------------ ┌∩┐(◣_◢)┌∩┐ ------------------
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Spring } from 'react-spring/renderprops'

import Youth from "./Youth";
import Pro from "./Professional";

import YOUTH from '../assets/03/youth.png';
import PROFESSIONAL from '../assets/03/corporate.png';
import LEAVES_BACK from '../assets/03/leaves_back.png';

const BACK = "https://image.flaticon.com/icons/svg/137/137518.svg";

import "../basics.css";

// ------------------ ┌∩┐(◣_◢)┌∩┐ ------------------
const styles = () => ({
  input: {
    display: 'none',
  },
  yellow:{
    color: "#333333",
    borderRadius: "0px",
    fontFamily:"Quicksand",
    backgroundColor: '#ffb833',
    '&:hover': {
      backgroundColor: '#4fb0c6',
    },
  },
  blue:{
    color: "#333333",
    borderRadius: "0px",
    fontFamily:"Quicksand",
    backgroundColor: '#4fb0c6',
    '&:hover': {
      backgroundColor: '#ffb833',
    },
  }
});
// ------------------ ┌∩┐(◣_◢)┌∩┐ ------------------

class What extends Component{

  constructor(props){
    super(props);
    this.state={
      to:  "summary",
      from: "source"
    }
    this.handleClick=this.handleClick.bind(this);
  }
// ------------------ '(◣_◢)' ------------------
  handleClick(id, from){
    console.log(`Clicked button: ${id}\nFrom: ${from}`);
    if(id===0){
      this.setState({to: "detail_youth"})
    }
    if(id===1){
      this.setState({to: "detail_pro"})
    }
    if(id===2){
      this.setState({to: "summary"})
    }
    if(from==="youth"){
      this.setState({from});
    }
    if(from==="pro"){
      this.setState({from});
    }
  }
// ------------------ '(◣_◢)' ------------------
renderSection(to,from){
  const { classes } = this.props;
  if(to==="summary"){
    return(
      <div className="container-fluid">
      <Spring
        from={{ opacity: 0 }}
        to={{ opacity: 1 }}
        config={{delay: 400, tension: 60}}
        reset={true}>
        {props => (
        <div style={props}>
        <div className="row ">
          <div className="col " style={{textAlign: "center"}}>
              <br />
              <img className="" 
                src={YOUTH} 
                style={{display: "block", margin:"auto"}} 
                alt="youth"></img>
              <br />
              <br />
              <h3 className="yellow-font " style={{textAlign: "center"}}> Youth </h3>
              <br />
              <div className="container " style={{width:"420px"}}>
                <p>Our interactive coaching style builds onfidence in kids via peer interaction. Alongside this we build strong fundamentals through classic Trinity certified training methods.</p>
                <br />
              </div>

              <Button 
                variant="outlined" 
                color="primary" 
                className={classes.yellow} 
                onClick={() => { this.handleClick(0,"home") }}>
                Learn More
              </Button>
              
          </div>
          <div className="col " style={{textAlign: "center"}}>
              <br />
              <img className="" 
                src={PROFESSIONAL} 
                style={{display: "block", margin:"auto", marginTop:"-14px"}} 
                alt="pro"></img>
              <br />
              <br />
              <h3 className="yellow-font "> Professional </h3>
              <br />
              <div className="container " style={{width:"420px"}}>
                <p >Training working professionals in enterprise communication and etiquette.</p>
                <br />
              </div>

              <Button 
                variant="outlined"  
                color="primary" 
                className={classes.blue} 
                onClick={() => { this.handleClick(1,"home") }}>
              Learn More
              </Button>
        
          </div>
         
        </div>
        </div>)}
      </Spring>
      </div>
    );
  }
// ------------------ '(◣_◢)' ------------------

  if(to==="detail_youth"){
    return (
      <div>
      <Spring
        from={{ opacity: 0 }}
        to={{ opacity: 1 }}
        config={{delay: 200, tension: 60}}>
        {props => (
        <div style={props}>
        <div>
          <img
            src={BACK} 
            style={{display: "block", margin:"0", width:"50px,", height:"50px"}} 
            alt="BACK"
            onClick={() => { this.handleClick(2, "youth") }}
            >
          </img>
          <br />
          <br />

          <Youth />
        </div>
        </div>)}
        </Spring>
        
        </div>
    )
  }
// ------------------ '(◣_◢)' ------------------

  if(to==="detail_pro"){
    return (
      <Spring
        from={{ opacity: 0 }}
        to={{ opacity: 1 }}
        config={{delay: 200, tension: 60}}>
        {props => (
        <div style={props}>
        <div>
          <img
            src={BACK}
            style={{display: "block", margin:"0", width:"50px,", height:"50px"}} 
            alt="BACK"
            onClick={() => { this.handleClick(2,"pro") }}
            >
          </img>
          

          <Pro />
        </div>
        </div>)}
        </Spring>
    )
  }
}
// ------------------ '(◣_◢)' ------------------
  render(){
    return(
      <div className="container-fluid">

      <br />
  
        <div className="row text_center">
            <div className="col col_centered">
            <h2 className="text_center blue-font "> What? </h2>
            </div>
        </div>
        <hr />        

        <div>
        {this.renderSection(this.state.to, this.state.from)}
        </div>

        <br />
        <br />            
        <br />

  

      </div>
    );
  }
// ------------------ '(◣_◢)' ------------------

}
// ------------------° ̿ ̿'''\̵͇̿̿\з=(◕_◕)=ε/̵͇̿̿/'̿'̿ ̿ °------------------
What.propTypes = {
  classes: PropTypes.object.isRequired
};
// ------------------° ̿ ̿'''\̵͇̿̿\з=(◕_◕)=ε/̵͇̿̿/'̿'̿ ̿ °------------------
export default withStyles(styles)(What);
//    ‛¯¯٭٭¯¯(▫▫)¯¯٭٭¯¯’      FIN     ‛¯¯٭٭¯¯(▫▫)¯¯٭٭¯¯’
