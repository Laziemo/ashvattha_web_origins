/*
Gita.Network: react_origins

componenet: Jumbotron
developed by lm(•̪●)==ε/̵͇̿​̿/’̿’̿ ̿ ̿̿ `(•.°)~
*/
// ------------------ ┌∩┐(◣_◢)┌∩┐ ------------------
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Spring } from 'react-spring/renderprops'

import LEAVES_BACK from '../assets/01/leaves_back.png';
import BIRDIE from '../assets/01/birdie.png';
import CHILLIN from '../assets/01/chillin_wolma.png';
import LEAF from '../assets/final_complete/SVG/SS.svg';
import LEAF1 from '../assets/final_complete/SVG/SE.svg';

import "../basics.css";

// ------------------ ┌∩┐(◣_◢)┌∩┐ ------------------
const styles = () => ({
  input: {
    display: 'none',
  },
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
    color: "#333333",
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
class Jumbo extends Component{
// ------------------ '(◣_◢)' ------------------
  constructor(props){
    super(props);
    console.log(`JUMBO PROPS: ${props.data.title}`);
    this.state = {
      action: false
    }
    this.handleClick = this.handleClick.bind(this);
  }
// ------------------ '(◣_◢)' ------------------
  handleClick(id){
    this.setState({action: id});
  }

// ------------------ '(◣_◢)' ------------------
  render(){
    const { classes } = this.props;
    
    return(
      <div className="cream-back">
        <Spring
          from={{ opacity: 0 }}
          to={{ opacity: 1 }}
          config={{delay: 200, tension: 60}}>
          {props => 
          <div style={props}>


            <div className="jumbotron" style={{backgroundColor:"transparent", margin:"0 auto"}}>
              <img className="birdie_pos" src={BIRDIE}></img>

              <div className = "container">
                <div className= "row">
                
                  <div className="col ">
                    <img className="picforpho" src={CHILLIN} alt="oldmachillin"></img>
                  </div>
                 
                      <img className="leaf1" src={LEAF1} alt="leaf"></img>
                   

                  <div className="col " style={{marginLeft:"0px"}}>
                  
                  <div className="container ">
                    <div className="row margin_adjust ">
                      <h1 className="yellow-font ">{this.props.data.title}</h1>
                    </div>
                    
                    <div className="row ">
                      <p className="blue-font ">{this.props.data.sub}</p>
                    </div>
                    <div className="row ">
                      <h3 className="black-font ">{this.props.data.sub0}</h3>
                      <hr />
                    </div>

                    <div className="row ">

                        <Button 
                          variant="outlined" 
                          component="button"
                          className={classes.yellow}
                          onClick={() => {this.handleClick(0)} }
                          >
                        Learn More
                        </Button>

                        <Button 
                          variant="outlined"
                          component="button"
                          className={classes.transparent} 
                          onClick={() => {this.handleClick(1)} }
                          >
                          Get Brochure
                        </Button>
                    </div>
                  </div>
                  <div className="col ">
                      <img className="leaf0" src={LEAF} alt="leaf"></img>
                    </div>
                  </div>
                    
                </div>
                <br />
              </div>
              </div>
            </div>}
      
        </Spring>
      </div>
  
    );
  }
// ------------------ '(◣_◢)' ------------------
}
// ------------------° ̿ ̿'''\̵͇̿̿\з=(◕_◕)=ε/̵͇̿̿/'̿'̿ ̿ °------------------
Jumbo.propTypes = {
  classes: PropTypes.object.isRequired
};
// ------------------° ̿ ̿'''\̵͇̿̿\з=(◕_◕)=ε/̵͇̿̿/'̿'̿ ̿ °------------------
export default withStyles(styles)(Jumbo);
//    ‛¯¯٭٭¯¯(▫▫)¯¯٭٭¯¯’      FIN     ‛¯¯٭٭¯¯(▫▫)¯¯٭٭¯¯’
