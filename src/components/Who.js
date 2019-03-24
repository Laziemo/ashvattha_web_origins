/*
Gita.Network: ashvattha_web

componenet: Who
secrets to removing outline: &:focus CSS prop-> outline: none
developed by lm(•̪●)==ε/̵͇̿​̿/’̿’̿ ̿ ̿̿ `(•.°)~
*/
// ------------------ ┌∩┐(◣_◢)┌∩┐ ------------------
import React, {Component} from 'react';
import {
  Nav,
} from 'react-bootstrap';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Spring } from 'react-spring/renderprops'
import { Element, animateScroll as scroll } from "react-scroll";

import About from "./About";
import Team from "./Team";

import LEAVES_BACK from '../assets/02/leaves_back.png';

import "../basics.css";
import "animate.css/animate.min.css";
import { transparent } from 'material-ui/styles/colors';
import { NONAME } from 'dns';


// ------------------ ┌∩┐(◣_◢)┌∩┐ ------------------
const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: transparent,

  },
  tabsRoot: {
    fontFamily: "Quicksand",

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

class Who extends Component{
  constructor(props){
    super(props);

    this.state={
      value: 0,
    };
    this.handleChange=this.handleChange.bind(this);
    this.renderContent=this.renderContent.bind(this);
  }
// ------------------ '(◣_◢)' ------------------
  handleChange(e,value){
      this.setState({value});
  }  
// ------------------ '(◣_◢)' ------------------
  renderContent(section){
    if(this.state.value===0){
      return (
        <About />
      
      );
    }
    if(this.state.value===1){
      return (
        <Team />
      );
    }
  }  
// ------------------ '(◣_◢)' ------------------
  render(){
    const { classes } = this.props;
    const { value } = this.state;

    return(
      <div className="container white-back">
      <Spring
        from={{ opacity: 0 }}
        to={{ opacity: 1 }}
        config={{delay: 200, tension: 60}}
      >
      {props => (
        <div style={props}>
        <div className="">
          <Spring
          from={{ opacity: 0 }}
          to={{ opacity: 1 }}
          config={{delay: 2000, tension: 20}}
          >
          {Props => (
          <div style={Props}>
          <img className="leaves_back_pos_0" src={LEAVES_BACK}></img>
          </div>)}
          </Spring>
          <br />
          <br />
          <div className="row">
                <h2 className="blue-font"  style={{marginLeft: "36px"}}>Who?</h2>
          </div>
         
          <div className="row " style={{fontSize: "27px"}}>
          <div className={classes.root} style={{fontFamily:"Quicksand"}}  style={{marginLeft: "36px"}}>
          <Tabs
            value={value}
            onChange={this.handleChange}
            classes={{ root: classes.tabsRoot, indicator: classes.tabsIndicator }}
            variant="standard"
            scrollButtons="on"
            indicatorColor="primary"

          >
            <Tab
              
              classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
              label="About"
            />
            <Tab
              
              classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
              label="Team"
            />
          </Tabs>
          </div>
          </div>

        </div>

        <div className="container-fluid">
          {this.renderContent(this.state.section)}
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
Who.propTypes={
  classes: PropTypes.object.isRequired
}
// ------------------° ̿ ̿'''\̵͇̿̿\з=(◕_◕)=ε/̵͇̿̿/'̿'̿ ̿ °------------------
export default withStyles(styles)(Who);
//    ‛¯¯٭٭¯¯(▫▫)¯¯٭٭¯¯’      FIN     ‛¯¯٭٭¯¯(▫▫)¯¯٭٭¯¯’