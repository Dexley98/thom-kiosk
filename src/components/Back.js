import React, {Component} from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import back from "../photos/back-arrow.svg"

class Back extends Component{
    constructor(){
        super()
        this.state = {}
    }

    render(){
        return(
            <Link to={this.props.destination}>
                <img src={back} alt="back button" style={{width: 25, height: 25}}/>
            </Link>
        )
        
    }
}

export default Back