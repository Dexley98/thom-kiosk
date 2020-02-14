import React, {Component} from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import exit from "../photos/exit.svg"

class Exit extends Component{
    constructor(){
        super()
        this.state = {}
    }

    render(){
        return(
            <Link to={this.props.destination}>
                <img src={exit} alt="exit button" style={{width: 25, height: 25}}/>
            </Link>
        )
        
    }
}

export default Exit